import { Link } from "react-router-dom";
import styles from "./navbar.module.css"

function Navbar() {
    return(
        <nav>
            <ul className={styles.nav_list}>
                <Link to="/"><li className={styles.nav_item}>Home</li></Link>
                <Link to="/about"><li className={styles.nav_item}>About</li></Link>
                <Link to="/projects"><li className={styles.nav_item}>Projects</li></Link>
                <a href="/Jacob Klamerus Resume-3.pdf" target="_blank" rel="noopener" className={styles.nav_item}>Resume</a>
                <Link to="/links"><li className={styles.nav_item}>Contact</li></Link>
            </ul>
      </nav>
    )
}

export default Navbar