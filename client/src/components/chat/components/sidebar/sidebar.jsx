import React from "react";
import styles from "./styles.module.css"

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h4 classname={styles.header}>Users</h4>
            <ul classname={styles.users}>
                <li>User1</li>
                <li>User2</li>
                <li>User3</li>
            </ul>
        </div>
    )
}

export default Sidebar