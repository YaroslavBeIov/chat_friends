const express = require('express')
const app = express()
const PORT = 5000
const http = require('http').Server(app)
const cors = require('cors')
const connectDB = require('./config/database')
const authRoutes = require('./routes/routes')
const socketIO = require('socket.io')(http,{
    cors: {
        origin: 'http://localhost:5173'
    }
})

connectDB();

app.use(cors())
app.use(express.json());

app.use('/api/auth', authRoutes);

const users = []

socketIO.on('connection', (socket) =>{
    console.log(`${socket.id} user connected`)
    socket.on('message', (data) =>{
        socketIO.emit('response', data)
    })

    socket.on('typing', (data) => socket.broadcast.emit('responseTyping', data))
    
    socket.on('newUser', (data) =>{
        users.push(data)
        socketIO.emit('responseNewUser', users)
    })
    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnect`)
    })
})

http.listen(PORT, () => {
    console.log('Server working')
})