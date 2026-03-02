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
                    <a href="" className={styles.hero__getCustomer}>Solicitar Consultoria</a>
                </div>
        
            </div>
        </section>
    )
}

export default Hero