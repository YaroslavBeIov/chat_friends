import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Navigation = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Проверяем наличие токена в локальном хранилище
        const token = localStorage.getItem("token"); // Замените 'user' на 'token'
        setIsAuthenticated(!!token); // Устанавливаем статус авторизации на основе наличия токена
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

                {/* Отображаем кнопки только для неавторизованных пользователей */}
                {!isAuthenticated && (
                    <div className={styles.authButtons}>
                        <button 
                            className={`${styles.navButton} ${styles.loginButton}`} 
                            onClick={() => handleNavigate('/login')}
                        >
                            Авторизация
                        </button>
                        <button 
                            className={`${styles.navButton} ${styles.registerButton}`} 
                            onClick={() => handleNavigate('/register')}
                        >
                            Регистрация
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navigation;
