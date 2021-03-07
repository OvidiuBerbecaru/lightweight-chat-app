import React from 'react';
import Search from './components/Search/Search';
import './App.css';
import { MessageProvider } from './providers/MessageProvider';
import MessageCard from './components/MessageCard/MessageCard';

function App() {
  return (
    <div className="App">
      <MessageProvider>
        <Search />
        <MessageCard />
      </MessageProvider>
    </div>
  );
}

export default App;
