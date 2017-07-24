import React from 'react';
import data from './DATA';

const ChatApp = () => {
  const info = data.chats.map(function(info){
    return(
      <div>
      <h2>{info.username}</h2>
      <p>{info.chat}</p>
      </div>
    )
  })
  return (
    <div className="chat-container">
    {info}
    </div>
  )
}


export default ChatApp;
