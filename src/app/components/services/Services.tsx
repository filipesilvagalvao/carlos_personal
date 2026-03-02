import styles from "./Services.module.css"

function Services() {
    return (
        <section className={styles.service} id="treinos">
            <h2 className={styles.service__title}>Treinos <span>Focados</span> em</h2>

            <div className={styles.service__container}>
                <article className={styles.service__card}>
                    <div className={styles.service__description}>
                        <img src="/img/hipertrofia.jpg" alt="imagem de emagrecimento" />
                        <h2 className={styles.service__cardTitle}>Hipertrofia</h2>
                        <ul className={styles.service__list}>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Ganho muscular</li>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Treino progressivo</li>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Estratégia de evolução</li>
                        </ul>
                    </div>
                </article>

                <article className={styles.service__card}>
                    <div className={styles.service__description}>
                        
                        <h2 className={styles.service__cardTitle}>Emagrecimento</h2>
                        <ul className={styles.service__list}>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Redução de gordura corporal</li>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Treinos de alta queima</li>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Acompanhamento contínuo</li>
                        </ul>
                        <img src="/img/emagracimento.jpg" alt="imagem de emagrecimento" />
                    </div>
                </article>

                <article className={styles.service__card}>
                    <div className={styles.service__description}>
                        <img src="/img/condicionamento-fisico.jpg" alt="imagem de emagrecimento" />
                        <h2 className={styles.service__cardTitle}>Condicionamento Físico</h2>
                        <ul className={styles.service__list}>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Mais resistência</li>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Mais disposição</li>
                            <li className={styles.service__item}><i className="fa-solid fa-check"></i>Mais performance</li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Services