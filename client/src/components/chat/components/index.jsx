import React, {useEffect, useState} from "react"
import Sidebar from "./sidebar/sidebar";
import Body from "./body/body";
import MessageBlock from "./message-block/message-block.jsx";
import styles from './styles.module.css'

const ChatPage = ({socket}) => {
    const [messages, setMessages] = useState([])
    
    const [status, setStatus] = useState('')

    useEffect(()=> {
        socket.on('response', (data) => setMessages([...messages, data]))
    }, [socket, messages])

    useEffect(()=> {
        socket.on('responseTyping', (data) => {
            setStatus(data)
            setTimeout(()=>setStatus(''), 1000)
        })
    }, [socket])

    return (
        <div className={styles.chat}>
            <Sidebar socket={socket}/>
            <main className={styles.main}>
                <Body messages={messages} status={status}/>
                <MessageBlock socket={socket}/>
            </main>
        </div>
    )
}

export default ChatPage;