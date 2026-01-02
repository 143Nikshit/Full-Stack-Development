import React from 'react';

const TopicSelector = ({ selectedTopic, onTopicChange }) => {
  const topics = [
    { value: 'general', label: 'General Conversation' },
    { value: 'interview', label: 'Interview Practice' },
    { value: 'travel', label: 'Travel English' },
    { value: 'customerSupport', label: 'Customer Support' }
  ];

  return (
    <div className="topic-selector">
      <h3>Choose Conversation Topic:</h3>
      <div className="topic-buttons">
        {topics.map((topic) => (
          <button
            key={topic.value}
            onClick={() => onTopicChange(topic.value)}
            className={`topic-btn ${selectedTopic === topic.value ? 'active' : ''}`}
          >
            {topic.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopicSelector;