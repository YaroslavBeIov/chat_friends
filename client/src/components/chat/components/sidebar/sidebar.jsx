import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Sidebar = ({ socket }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const handleSocketConnection = () => {
            socket.on('responseNewUser', (data) => setUsers(data));
        }

        if (socket && socket.connected) {
            handleSocketConnection();
        } else if (socket) {
            socket.on('connect', handleSocketConnection);
        }

        return () => {
            if (socket) {
                socket.off('responseNewUser');
                socket.off('connect', handleSocketConnection);
            }
        };
    }, [socket, users]);

    const filteredList = users.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.user === value.user && t.socketID === value.socketID
        ))
    );

    return (
        <div className={styles.sidebar}>
            <h4 className={styles.header}>Users</h4>
            <ul className={styles.users}>
                {filteredList.map((element) => (
                    <li key={element.socketID}>{element.user}</li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
