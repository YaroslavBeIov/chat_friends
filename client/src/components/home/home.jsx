import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./styles.module.css"

const Home = ({socket}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('user', user)
        navigate('/chat')
    }

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <h2 className={styles.open}>Вход в чат</h2>
            <label htmlFor="user"></label>
            <input type="text" id='user' value={user} onChange={(e) => setUser(e.target.value)}/>
            <button type='submit' className={styles.button}>Войти</button>
        </form>
    )
}

export default Home;