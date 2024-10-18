import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Body = ({ messages = [] }) => {
    const navigate = useNavigate();

    const handleLeave = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.welcome}>Добро пожаловать в гей-чат</h1>
                <button className={styles.btn} onClick={handleLeave}>
                    Покинуть чат
                </button>
            </header>

            <div className={styles.container}>
                {
                    messages.map(element =>
                        element.name === localStorage.getItem('user') ? (
                            <div className={styles.chats} key={element.id}>
                                <p className={styles.senderName}>Вы</p>
                                <div className={styles.messageSender}>
                                    <p className={styles.textMessage}>{element.text}</p>
                                </div>
                            </div>
                        ) : (
                            <div className={styles.chats} key={element.id}>
                                <p className={styles.opponentName}>{element.name}</p>
                                <div className={styles.messageRecipient}>
                                    <p className={styles.textMessage}>{element.text}</p>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </>
    );
};

export default Body;
