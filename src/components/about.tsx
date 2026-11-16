import Navbar from "./navbar"
import styles from "./about.module.css"

function About() {
    return(
        <div>
            <Navbar/>
            <div className={styles.container}>
                <h2 className={styles.about_headers}>About</h2>
                <p className={styles.about_info}>
                    I’m Jacob, a computer science student at the University of Michigan–Flint interested in software engineering. I’ve built projects in web and Android development, including my HLTV Stats Page Clone, which I am particularly proud of. Currently I am exploring embedded development with an ESP32 and a Raspberry Pi Zero. 
                </p>
                <p className={styles.about_info}>
                    <u>I’m looking for opportunities to contribute to a team and keep growing as an engineer.</u>
                </p>
                <h2 className={styles.about_headers}>Interests</h2>
                <ul className={styles.about_headers}>
                    <li className={styles.about_info}>sports and esports</li>
                    <li className={styles.about_info}>reading</li>
                    <li className={styles.about_info}>programming</li>
                    <li className={styles.about_info}>chess</li>
                </ul>
            </div>
        </div>
    )
}

export default About