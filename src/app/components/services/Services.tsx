import Service from "../service/Service"
import styles from "./Services.module.css"

function Services() {

    return (
        <section className={styles.service} id="treinos">
            <h2 className={styles.service__title}>Treinos <span>Focados</span> em</h2>

            <div className={styles.service__container + " articles"}>

                <Service img="/img/hipertrofia.jpg" title="Hipertrofia" benefits={["Ganho muscular", "Treino progressivo", "Estratégia de evolução"]} />

                <Service img="/img/emagrecimento.jpg" title="Emagrecimento" benefits={["Redução de gordura corporal", "Treinos de alta queima", "Acompanhamento contínuo"]} />

                <Service img="/img/condicionamento-fisico.jpg" title="Condicionamento Físico" benefits={["Mais resistência", "Mais disposição", "Mais performance"]} />

            </div>
        </section>
    )
}

export default Services