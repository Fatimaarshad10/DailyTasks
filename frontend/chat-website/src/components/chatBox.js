import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Avatar, Image } from 'antd';
const styles = {
button:{
  width : '10%',
  height : 50,
  fontWeight : 'bold',
  borderRadius : 10,
  fontSize : 18,
  backgroundColor :'#34b7f1',
  borderWidth : 0,
  color :'#fff'
},
textarea :{
  width:'60%',
  height:50,
  borderRadius :10,
  borderWidth :0,
  padding : 10,
  fontSize:18
},
textContainer:{
  display : 'flex',
  justifyContent: 'space-evenly',
  alignItems : 'center'
}
}
export default function ChatBoxWithSend({ avatar }) {
  const [message, setMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const [receive, setReceive] = useState([])
  const [sentMessages, setSentMessages] = useState([]);
  useEffect(() => {
    const newSocket = io('http://localhost:5000');
    setSocket(newSocket);
    console.log('this is connection');


   newSocket.on('receive', (data) => {
    console.log(data)
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected from server');
    });


  
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    socket.emit('createId', { userId: 'fatima', msg: message });

    setSentMessages([...sentMessages, { id: Date.now(), msg: message }]);
    setMessage('');
  };

  return (
    <div>
      <div>
       {sentMessages.map((data) => (   
        <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }} key={data.id}>
          <Avatar
            size={50}
            src={
              <Image
                src={avatar}
                style={{
                  objectFit: 'cover',
                  width: 45,
                  height: 45,
                  borderRadius: '100%',
                }}
                preview={false}
              />
            }
          />
          <p style={{ padding: 10, backgroundColor: '#ffff', borderRadius: 10, maxWidth: '60%' }}>
            <strong style={{ fontSize: 13 }}>fatima</strong>
            <br />
            <br />
                <h1>{data.msg}</h1>
          </p>
        </div>
        ))}
  
      </div>
      
      {receive.map((data) => (   
      <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row' }} key={data.id}>
         <Avatar
           size={50}
           src={
             <Image
               src={avatar}
               style={{
                 objectFit: 'cover',
                 width: 45,
                 height: 45,
                 borderRadius: '100%',
               }}
               preview={false}
             />
           }
         />
         <p style={{ padding: 10, backgroundColor: '#D9F3C3', borderRadius: 10, maxWidth: '60%' }}>
           <strong style={{ fontSize: 13 }}>Admin</strong>
           <br />
           <br />
        {/* {data} */}
         </p>
       </div>
         ))}

      <div style={styles.textContainer}> 
      <textarea style={styles.textarea} rows={6} placeholder='write something...' value={message} onChange={handleChange}>  </textarea> 
      <button onClick={sendMessage} style={styles.button}>Send Message</button> 
      </div>
     
      </div>




      
  );
}



