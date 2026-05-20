import styles from "./PageFooter.module.css"

function PageFooter() {
    return(
        <footer className={styles.footer_container}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>klamerus3@gmail.com</li>
          <li className={styles.nav_item}><a href="https://github.com/j-klamerus" target="_blank">Github</a></li>
          <li className={styles.nav_item}><a href="https://www.linkedin.com/in/jacob-klamerus-289265395/" target="_blank">Linkedin</a></li>
        </ul>
      </footer>
    )
}

export default PageFooter