import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React from 'react'
import './Chat.css';

function Chat() {
  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar></Avatar>
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at....</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined></SearchOutlined>
          </IconButton>
          <IconButton>
            <AttachFile></AttachFile>
          </IconButton>
          <IconButton>
            <MoreVert></MoreVert>
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className='chat__message'>
          <span className='chat__name'>Avdhoot</span>
          This is a meesage
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat__message chat__reciever'>
          <span className='chat__name'>Amey</span>
          This is a meesage
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon></InsertEmoticon>
        <form>
          <input
          placeholder='Type a message'
          type='text'
          >
          </input>
          <button type="submit">Send a Message</button>
        </form>
        <Mic></Mic>
      </div>
    </div>
  )
}

export default Chat