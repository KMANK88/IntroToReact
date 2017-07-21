import React from 'react';

const ChatApp = (props) => {
  const info = props.data.chats.map(function(info){
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
