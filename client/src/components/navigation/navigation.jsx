import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Navigation = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Проверяем, зарегистрирован ли пользователь (например, по флагу в localStorage)
        const user = localStorage.getItem("user");
        setIsAuthenticated(!!user); // Устанавливаем true, если пользователь найден
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
                {isAuthenticated && ( // Кнопка видна только зарегистрированным пользователям
                    <button 
                        className={`${styles.navButton} ${styles.chatButton}`} 
                        onClick={() => handleNavigate('/chat')}
                    >
                        Чат
                    </button>
                )}
                <button 
                    className={styles.navButton} 
                    onClick={() => handleNavigate('/log_chat')}
                >
                    Регистрация
                </button>
            </nav>
        </header>
    );
};

export default Navigation;
