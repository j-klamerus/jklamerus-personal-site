import Navbar from "./navbar"
import styles from "./about.module.css"

function About() {
    return(
        <div>
            <Navbar/>
            <div className={styles.container}>
                <h2 className={styles.about_headers}>About</h2>
                    <p className={styles.about_info}>hi, im Jacob and this is my personal website!</p>
                <h2 className={styles.about_headers}>Education</h2>
                    <p className={styles.about_info}>Univeristy of Michigan-Flint Computer Science, graduating Fall 26'</p>
                <h2 className={styles.about_headers}>Work</h2>
                    <p className={styles.about_info}>...</p>
                <h2 className={styles.about_headers}>Interests</h2>
                <ul className={styles.about_headers}>
                    <li className={styles.about_info}>esports</li>
                    <li className={styles.about_info}>reading</li>
                    <li className={styles.about_info}>programming</li>
                    <li className={styles.about_info}>sports</li>
                </ul>
            </div>
        </div>
    )
}

export default About