import Link from "next/link";
import styles from "../../styles/navigation.module.scss";
const Header = ()=> {
    return (
        <header className={styles.navigation}> 
            <nav>
                <Link href="/">
                    <h1> HOME</h1>
                </Link>

                <ul>
                    <li>
                        <Link href="/liked">
                            <a> My Likes</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;