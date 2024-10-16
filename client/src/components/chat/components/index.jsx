import React from "react"
import Sidebar from "./sidebar/sidebar";
import Body from "./body/body";
import MessageBlock from "./message-block/message-block";
import styles from './styles.module.css'

const ChatPage = ({socket}) => {
    return (
        <div className={styles.chat}>
            <Sidebar />
            <main className={styles.main}>
                <Body />
                <MessageBlock />
            </main>
        </div>
    )
}

export default ChatPage;