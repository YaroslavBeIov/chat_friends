import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Navigation = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        setIsAuthenticated(!!user);
    }, []);

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <button 
                    className={styles.navButton} 
                    onClick={() => handleNavigate('/main')}
                >
                    Главная
                </button>

                {isAuthenticated && (
                    <button 
                        className={`${styles.navButton} ${styles.chatButton}`} 
                        onClick={() => handleNavigate('/chat')}
                    >
                        Чат
                    </button>
                )}

                <button 
                    className={`${styles.navButton} ${styles.registerButton}`} 
                    onClick={() => handleNavigate('/register')}
                >
                    Регистрация
                </button>
            </nav>
        </header>
    );
};

export default Navigation;
