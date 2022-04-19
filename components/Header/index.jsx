import { useEffect, useState } from 'react';
import { FaBars, FaPhone } from 'react-icons/fa';

import Nav from '../Nav';
import Logo from '../Logo';

import styles from './index.module.scss';

export default function Header({ changeState, state }) {
    const [isSticky, setIsSticky] = useState(false);

    const sticky = event => {
        const header = document.querySelector('header');
        const scrollTop = window.scrollY;
        scrollTop > 0 ? setIsSticky(true) : setIsSticky(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', sticky);
        return () => {
            window.removeEventListener('scroll', sticky);
        };
    });

    return (
        <header className={isSticky ? styles.sticky : styles.header}>
            <Logo />
            <Nav changeState={changeState} state={state} />
            <div className={styles.quick}>
                <a href="tel:30288255">
                    <FaPhone className={styles.phone} />
                </a>
                <FaBars
                    className={styles.hamburger}
                    onClick={() => changeState(true)}
                />
            </div>
        </header>
    );
}
