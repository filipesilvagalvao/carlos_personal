import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>

            <div className={styles.header__container}>

                <a href="/" className={styles.header__logo}>
                    <img src="/logo/logo-site.png" alt="" />
                </a>
                <input type="checkbox" id="hamburguer" className={styles.header__check} />
                <label htmlFor="hamburguer" className={styles.header__hamburguer}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <nav className={styles.header__nav}>
                    <a href="/" className={styles.header__link}>Home</a>
                    <a href="#treinos" className={styles.header__link}>Treinos</a>
                    <a href="#precos" className={styles.header__link}>Preços</a>
                    <a href="#feedbacks" className={styles.header__link}>Depoimentos</a>
                    {/* <a href="#resultados" className={styles.header__link}>Resultados</a> */}
                    <a href="#about" className={styles.header__link}>Sobre</a>
                    <a href="#faq" className={styles.header__link}>FAQ</a>
                    <a href="https://www.instagram.com/carlosoliverpersonal/" className={styles.header__social} target="_blank"><i className="fa-brands fa-instagram"></i></a>
                </nav>
            </div>

        </header>
    )
}

export default Header