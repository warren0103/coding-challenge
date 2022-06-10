import Link from "next/link";
import styles from "../../styles/navigation.module.scss";
const Header = ()=> {
    return (
        <header className={styles.header}> 
            <nav>
                <Link href="/">
                    <h1> HOME</h1>
                </Link>

                <ul>
                    <li>
                        <Link href="/liked">
                            <a> my likes</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;