import BackgroundGradient from "../backgroundGradient/BackgroundGradient"
import Cascate from "../cascate/Cascate"
import styles from "./Hero.module.css"

function Hero() {
    return (
        <section className={styles.hero}>
            <BackgroundGradient/>
            <div className={styles.hero__container}>
                <div className={styles.hero__contentPhoto}>
                    <img
                        src="/photos/foto-principal-carlos.png"
                        alt="foto do carlos"
                        className={styles.hero__photo}
                    />
                </div>

                <div className={styles.hero__cta}>
                    
                    <Cascate/>
                    <a href="https://wa.me/+553799297699?text=Ol%C3%A1%20Carlos!%20Tenho%20interesse%20nos%20treinos" target="_blank" className={styles.hero__getCustomer}>Começar agora!</a>
                </div>
        
            </div>
        </section>
    )
}

export default Hero