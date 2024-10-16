import socketIO from 'socket.io-client'
import Home from './components/home/home.jsx'
import ChatPage from './components/chat/index.jsx'
import {Route, Routes} from 'react-router-dom'
const socket = socketIO.connect('http://localhost:5000')

function App() {
  return (
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/chat' element= {<ChatPage />} />
    </Routes>
  )
}

export default App;
