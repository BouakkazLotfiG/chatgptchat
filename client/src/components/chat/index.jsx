import React from 'react';
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from 'react-chat-engine-advanced';
import Header from '@/components/Header';
import StandardMessageFrom from '@/components/customMessageForms/StandardMessageFrom';
import Ai from '@/components/customMessageForms/Ai';

const Chat = ({ user, secret }) => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    user,
    secret
  );

  return (
    <div style={{ flexBasis: '100%' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: '100vh' }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          if (chatProps.chat?.title.startsWith('AiChat_')) {
            return <Ai props={props} activeChat={chatProps.chat} />;
          }

          return (
            <StandardMessageFrom props={props} activeChat={chatProps.chat} />
          );
        }}
      />
    </div>
  );
};

export default Chat;
