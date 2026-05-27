import { Link } from "react-router-dom";
import styles from "./navbar.module.css"

function Navbar() {
    return(
        <nav>
            <ul className={styles.nav_list}>
                <Link to="/"><li className={styles.nav_item}>home</li></Link>
                <Link to="/about"><li className={styles.nav_item}>about</li></Link>
                <Link to="/projects"><li className={styles.nav_item}>projects</li></Link>
                <a href="/Jacob Klamerus Resume-2.pdf" target="_blank" rel="noopener" className={styles.nav_item}>resume</a>
                <Link to="/links"><li className={styles.nav_item}>links</li></Link>
            </ul>
      </nav>
    )
}

export default Navbar