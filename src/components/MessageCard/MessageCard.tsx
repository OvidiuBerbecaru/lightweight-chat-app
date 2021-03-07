import React, { useEffect, useRef } from 'react';
import { Paper } from '@material-ui/core';
import {
  MessageCardWrapperStyle,
  MessageWrapperStyle,
  TimeStyle,
  TextStyle
} from './Style/index';
import { useMessage } from '../../providers/MessageProvider';

const MessageCard: React.FC = () => {
  const { messages } = useMessage()
  const paperCard = useRef<HTMLDivElement>(null)

  useEffect(() => {
    paperCard.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages])
  return (
    <MessageCardWrapperStyle>
      <Paper elevation={3} className="card-paper">
          {
            messages.map((message,id) => (
              <MessageWrapperStyle key={`${message}-${id}`}>              
                <TimeStyle>{new Date().toLocaleTimeString()}</TimeStyle>
                <TextStyle>{message}</TextStyle>
              </MessageWrapperStyle>
            ))
          }
        <div ref={paperCard} />
      </Paper>
    </MessageCardWrapperStyle>
  )
}

export default MessageCard;