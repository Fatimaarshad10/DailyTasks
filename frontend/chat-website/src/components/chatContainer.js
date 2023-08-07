import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Reciever = () => {
  const [message, setMessage] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io.connect('http://localhost:5000'); // Replace with your server URL
    setSocket(socket);
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    const data = {
      userId: 'fatima',
      msg: message,
    };
    socket.emit('data', data.msg);

  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
      />
      <button onClick={sendMessage}>Send</button>
     
    </div>
  );
};

export default Reciever;
