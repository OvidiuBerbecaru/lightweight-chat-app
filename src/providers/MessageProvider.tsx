import React, { createContext, useContext, useState } from 'react';

interface MessageContextProps {
  onMessageSend: (message: string) => void;
  messages: Array<String>;
}

const MessageContext = createContext<MessageContextProps>({
  onMessageSend: () => {},
  messages: []
});

const MessageProvider = (props: any) => {
  const [messages, setMessages] = useState<Array<String>>([]);

  const onMessageSend = (message: string) => {
    setMessages([...messages, message])
  }

  return (
    <MessageContext.Provider
      value={{ messages, onMessageSend }}
      {...props}
    />
  );
};

const useMessage = () => useContext(MessageContext);

export { MessageProvider, useMessage };
