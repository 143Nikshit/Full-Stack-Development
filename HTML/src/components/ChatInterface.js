import React, { useState, useEffect, useRef } from 'react';
import { getResponse, getTopicIntroduction } from '../data/responses';

const ChatInterface = ({ selectedTopic }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  // Load chat history from storage on component mount
  useEffect(() => {
    const savedChat = window.safeLocalStorage?.getItem('englishChatHistory') || localStorage.getItem('englishChatHistory');
    if (savedChat) {
      setMessages(JSON.parse(savedChat));
    } else {
      const initialMessage = {
        id: 1,
        text: "Hello! I'm your English practice partner. Choose a topic to start our conversation!",
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages([initialMessage]);
    }
  }, []);

  // Save chat history to storage whenever messages change
  useEffect(() => {
    const storage = window.safeLocalStorage || localStorage;
    storage.setItem('englishChatHistory', JSON.stringify(messages));
  }, [messages]);

  // Add topic introduction when topic changes
  useEffect(() => {
    if (selectedTopic && messages.length === 1 && messages[0].text.includes("Choose a topic")) {
      const topicMessage = {
        id: messages.length + 1,
        text: getTopicIntroduction(selectedTopic),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, topicMessage]);
    }
  }, [selectedTopic, messages]);

  // Scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputMessage('');

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = getResponse(inputMessage, selectedTopic);
      const botMessage = {
        id: updatedMessages.length + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const clearChat = () => {
    setMessages([{
      id: 1,
      text: "Hello! I'm your English practice partner. Choose a topic to start our conversation!",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString()
    }]);
    const storage = window.safeLocalStorage || localStorage;
    storage.removeItem('englishChatHistory');
  };

  return (
    <div className="chat-interface">
      <div className="chat-header">
        <h2>English Conversation Practice</h2>
        <div className="topic-info">
          <span>Topic: {selectedTopic || 'General'}</span>
          <button onClick={clearChat} className="clear-btn">Clear Chat</button>
        </div>
      </div>
      
      <div className="messages-container">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            <div className="message-content">
              <p>{message.text}</p>
              <span className="timestamp">{message.timestamp}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="input-form">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message in English..."
          className="message-input"
        />
        <button type="submit" className="send-btn">Send</button>
      </form>
    </div>
  );
};

export default ChatInterface;