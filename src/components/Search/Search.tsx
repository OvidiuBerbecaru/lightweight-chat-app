import React, { useRef, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import {
  SearchWrapperStyle
} from './Style/index';
import { useMessage } from '../../providers/MessageProvider';

const Search: React.FC = () => {
  const { onMessageSend } = useMessage()
  const [textValue, setTextValue] = useState<String>('')
  const message = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onMessageSend(message.current!.value);
    setTextValue('');
  }
  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    setTextValue(message.current!.value);
  }
  return (
    <SearchWrapperStyle>
      <form onSubmit={handleSubmit}>
        <TextField
          placeholder="Your Message" 
          variant="outlined"
          inputRef={message}
          className="text-field"
          onChange={handleChange}
          value={textValue}
        />
        <Button
          type="submit"
          variant="contained"
        >
          Send Message
        </Button>
      </form>
    </SearchWrapperStyle>
  )
}

export default Search;