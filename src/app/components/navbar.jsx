import Link from "next/link";
import styles from '../assets/navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.link}>
                <span>Home</span>
            </Link>
            <Link href="/search" className={styles.link}>
                <span>Search</span>
            </Link>
            <Link href="/favourites/" className={styles.link}>
                <span>Favourites</span>
            </Link>
            <Link href="/city" className={styles.link}>
                <span>Cities</span>
            </Link>
        </nav>
    )
}