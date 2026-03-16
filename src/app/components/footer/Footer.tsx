import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <p className={styles.footer__social}><a href="https://www.instagram.com/carlosoliverpersonal/" target="_blank"><i className="fa-brands fa-instagram"></i></a></p>
                <p>&copy; Todos os direitos reservados. Carlos Personal 2026</p>
            </div>
        </footer>
    )
}

export default Footer