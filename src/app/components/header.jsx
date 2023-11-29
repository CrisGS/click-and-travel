import Image from "next/image";
import styles from '../assets/header.module.css';
import Navbar from './navbar.jsx';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Image src="/airplane.png" width={48} height={48} alt="Logo" className={styles.logo} />
                <span className={styles.text}>
                    Click and Travel
                </span>
            </div>
            <Navbar />
        </header>
    );
}