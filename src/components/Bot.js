import React, { useState } from 'react';


const ChatComponent = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();

    const userMessage = input;
    setMessages((prevMessages) => [...prevMessages, { text: userMessage, sender: 'user' }]);
    setInput('');

    try {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: userMessage,
          max_tokens: 100
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const chatbotResponse = data.choices[0].text;

      setMessages((prevMessages) => [...prevMessages, { text: chatbotResponse, sender: 'bot' }]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  console.log(messages.text);

  return (
    <div className=' w-96 min-h-20 bg-gray-300'>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            {message.sender === 'user' ? <b>User:</b> : <b>Bot:</b>} {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatComponent;
