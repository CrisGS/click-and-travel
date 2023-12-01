import Image from "next/image";
import Styles from '../assets/header.module.css';
import Link from "next/link";

export default function Header() {
    return (
        <header className={Styles.header}>
            <div className={Styles.logoContainer}>
                <Image src="/airplane.png" width={48} height={48} alt="Logo" className={Styles.logo} />
                <span className={Styles.text}>
                    Click and Travel
                </span>
            </div>
            <nav className={Styles.navbar}>
                <Link href="/" className={Styles.link}>
                    <span>Home</span>
                </Link>
                <Link href="/search" className={Styles.link}>
                    <span>Search</span>
                </Link>
                <Link href="/favourites/" className={Styles.link}>
                    <span>Favourites</span>
                </Link>
                <Link href="/city" className={Styles.link}>
                    <span>Cities</span>
                </Link>
            </nav>
        </header>
    );
}