import React from "react";

import { ChatEngineWrapper, ChatSocket, ChatFeed } from "react-chat-engine";

const Chat = () => {
  return (
    <ChatEngineWrapper>
      <ChatSocket
        projectID="1df8c178-3d58-4652-99bf-1d3e9394a04c"
        chatID="37134"
        chatAccessKey="ca-9bd0c8b2-706a-4e55-890e-f4ae2f7d0814"
        senderUsername="Sergey"
      />

      <ChatFeed activeChat="kaptex" />
    </ChatEngineWrapper>
  );
};

export default Chat;
