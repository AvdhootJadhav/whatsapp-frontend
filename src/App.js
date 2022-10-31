import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios'

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(()=>{
    axios.get('/messages/sync')
    .then(resp => {
      setMessages(resp.data)
    })
  },[])

  useEffect(()=>{
    const pusher = new Pusher('e0bbae6bd53b5c5062c3', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      setMessages([...messages, data])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages])

  console.log(messages);

  return (
    <div className="app">
      <div className='app__body'>
        <Sidebar></Sidebar>
        <Chat messages={messages}></Chat>
      </div>
    </div>
  );
}

export default App;