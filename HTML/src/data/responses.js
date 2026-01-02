export const conversationResponses = {
  general: {
    greetings: [
      "Hello! Let's start practicing English. How are you today?",
      "Hi there! Ready to practice some English conversation?",
      "Greetings! I'm here to help you practice English. How can I assist you today?"
    ],
    howAreYou: [
      "I'm doing great, thank you for asking! How about you?",
      "I'm wonderful! Hope you're having a good day too.",
      "I'm fine, thanks! Ready for our English practice session."
    ],
    default: [
      "That's interesting! Tell me more about that.",
      "I see. Could you elaborate on that?",
      "That's a good point. What else would you like to discuss?",
      "Interesting perspective! Let's continue our conversation.",
      "I understand. How do you feel about that?"
    ]
  },
  
  interview: {
    greetings: [
      "Hello! I'm your interview coach. Let's practice some common interview questions.",
      "Welcome to your interview practice session! Ready to begin?",
      "Hi! I'll be your mock interviewer today. Let's start with some questions."
    ],
    questions: [
      "Can you tell me about yourself?",
      "What are your greatest strengths?",
      "Why do you want to work for our company?",
      "Where do you see yourself in 5 years?",
      "How do you handle pressure or stressful situations?"
    ],
    feedback: [
      "Good answer! Let me ask you another question.",
      "That's a solid response. Here's another common interview question.",
      "Well done! Let's continue with the practice."
    ],
    default: [
      "That's a good response. Let me ask you another question.",
      "Interesting answer. Here's another common interview scenario.",
      "Good point. Let's continue with our interview practice."
    ]
  },
  
  travel: {
    greetings: [
      "Hello traveler! Ready to practice English for your next adventure?",
      "Welcome! Let's practice some travel-related English conversations.",
      "Hi! I'll help you practice English for traveling. Where would you like to go?"
    ],
    questions: [
      "What's your favorite travel destination?",
      "How do you usually plan your trips?",
      "What's the most interesting place you've ever visited?",
      "Do you prefer beach vacations or mountain getaways?",
      "What's your best travel memory?"
    ],
    responses: [
      "That sounds amazing! I'd love to visit there too.",
      "Interesting choice! Tell me more about that place.",
      "That's a great travel story! Have you been to many countries?",
      "Wonderful! What made that trip special for you?"
    ],
    default: [
      "That sounds like a wonderful travel experience!",
      "Traveling is such a great way to learn about different cultures.",
      "I enjoy hearing about travel adventures. Tell me more!",
      "That destination sounds fascinating. What did you like most about it?"
    ]
  },
  
  customerSupport: {
    greetings: [
      "Hello! Thank you for contacting customer support. How can I help you today?",
      "Welcome to customer service! What can I assist you with?",
      "Good day! I'm here to help with any questions or issues you might have."
    ],
    commonIssues: [
      "I'm having trouble with my account.",
      "The product isn't working properly.",
      "I need help with a refund.",
      "Can you explain your pricing?",
      "How do I cancel my subscription?"
    ],
    solutions: [
      "I understand the issue. Let me help you resolve that.",
      "I apologize for the inconvenience. Here's what we can do...",
      "Thank you for bringing this to our attention. Let me assist you.",
      "I can help you with that right away."
    ],
    default: [
      "I understand your concern. Let me help you with that.",
      "Thank you for explaining the issue. Here's how we can resolve it.",
      "I appreciate you sharing this with me. Let's find a solution.",
      "I can assist you with that. Let me guide you through the process."
    ]
  }
};

export const getTopicIntroduction = (topic) => {
  const introductions = {
    general: "Hello! I'm here to help you practice general English conversation. What would you like to talk about?",
    interview: "Welcome to your interview practice! I'll be asking you common interview questions to help you prepare.",
    travel: "Ready to practice travel English? Let's talk about your travel experiences and plans!",
    customerSupport: "Thank you for contacting customer support. How can I assist you today?"
  };
  return introductions[topic] || introductions.general;
};

export const getResponse = (userMessage, topic = 'general') => {
  const message = userMessage.toLowerCase();
  
  // Greeting responses
  if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
    const greetings = conversationResponses[topic]?.greetings || conversationResponses.general.greetings;
    return greetings[Math.floor(Math.random() * greetings.length)];
  }
  
  // How are you responses
  if (message.includes('how are you') || message.includes("how're you")) {
    return conversationResponses.general.howAreYou[Math.floor(Math.random() * conversationResponses.general.howAreYou.length)];
  }
  
  // Thank you responses
  if (message.includes('thank') || message.includes('thanks')) {
    return "You're welcome! Is there anything else you'd like to practice?";
  }
  
  // Goodbye responses
  if (message.includes('bye') || message.includes('goodbye') || message.includes('see you')) {
    return "It was great practicing with you! Feel free to come back anytime for more English practice.";
  }
  
  // Topic-specific responses
  if (topic === 'interview' && conversationResponses.interview.questions) {
    const questions = conversationResponses.interview.questions;
    return questions[Math.floor(Math.random() * questions.length)];
  }
  
  if (topic === 'travel' && conversationResponses.travel.questions) {
    const questions = conversationResponses.travel.questions;
    return questions[Math.floor(Math.random() * questions.length)];
  }
  
  if (topic === 'customerSupport') {
    if (message.includes('problem') || message.includes('issue') || message.includes('help')) {
      const solutions = conversationResponses.customerSupport.solutions;
      return solutions[Math.floor(Math.random() * solutions.length)];
    }
  }
  
  // Default responses
  const defaults = conversationResponses[topic]?.default || conversationResponses.general.default;
  return defaults[Math.floor(Math.random() * defaults.length)];
};