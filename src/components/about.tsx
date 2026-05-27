import Navbar from "./navbar"
import styles from "./about.module.css"

function About() {
    return(
        <div>
            <Navbar/>
            <div className={styles.container}>
                <h2 className={styles.about_headers}>About</h2>
                <p className={styles.about_info}>Hi, I'm Jacob and this is my personal website. I am a senior at the University of Michigan-Flint studying computer science. Sorry if this site is a little hard on the eyes, I've clearly never been a big fan of frontend 😅.</p>
                <h2 className={styles.about_headers}>Interests</h2>
                <ul className={styles.about_headers}>
                    <li className={styles.about_info}>sports</li>
                    <li className={styles.about_info}>reading</li>
                    <li className={styles.about_info}>programming</li>
                    <li className={styles.about_info}>esports</li>
                </ul>
            </div>
        </div>
    )
}

export default About