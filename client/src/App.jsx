import socketIO from 'socket.io-client';
import Home from './components/home/home.jsx';
import ChatPage from './components/chat/components/index.jsx';
import Main from './components/main/main.jsx';
import Register from './registrations/register.jsx'
import Navigation from './components/navigation/navigation.jsx';
import { Route, Routes } from 'react-router-dom';

const socket = socketIO.connect('http://localhost:5000');

function App() {
  return (
    <>
      <Navigation socket={socket} />

      <Routes>
        <Route path='/register' element={<Register socket={socket} />} />
        <Route path='/main' element={<Main socket={socket} />} />
        <Route path='/log_chat' element={<Home socket={socket} />} />
        <Route path='/chat' element={<ChatPage socket={socket} />} />
      </Routes>
    </>
  );
}

export default App;
