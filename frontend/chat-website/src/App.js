import  ChatBoxWithSend  from "./components/chatBox";
import Reciever from "./components/chatContainer";
function App() {
  return (
 <div style={{ backgroundColor :'#ece5dd', height:'100vh'}}>
 <h1>chat website</h1>
<ChatBoxWithSend  avatar='https://picsum.photos/200' />
<Reciever/>
 </div>
  );
}

export default App;



