import React, { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import TopicSelector from './components/TopicSelector';
import './App.css';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('general');

  return (
    <div className="App">
      <header className="App-header">
        <h1>English Conversation Practice</h1>
        <p>Practice your English with virtual role players</p>
      </header>
      
      <main className="App-main">
        <TopicSelector 
          selectedTopic={selectedTopic} 
          onTopicChange={setSelectedTopic} 
        />
        
        <ChatInterface selectedTopic={selectedTopic} />
      </main>
      
      <footer className="App-footer">
        <p>Built for English Learning Practice</p>
      </footer>
    </div>
  );
}

export default App;