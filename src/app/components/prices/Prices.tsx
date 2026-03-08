import Price from "../price/Price"
import styles from "./Prices.module.css"

function Prices() {
    return (
        <section className={styles.prices} id="precos">
            <h2 className={styles.prices__title}>Nossos <span>Preços</span></h2>
            <div className={styles.prices__container}>
                <Price
                    title="Consultoria online"
                    description="Ideal para quem busca suporte personalizado"
                    benefits={["Dicas de treino", "Ficha de treino", "Disponibilidade para tirar dúvidas"]}
                    price="R$40,00"
                    cta="Começar agora"
                />

                <Price
                    title="Aula avulsa"
                    description="Ideal para testar e conhecer"
                    benefits={["Avaliação física", "Treino personalizado", "Acompanhamento presencial", "Disponibilidade para tirar dúvidas"]}
                    price="R$40,00"
                    cta="Começar agora"
                />
                
                <Price
                    title="Personalizar Plano"
                    description="Personalize seu treino do jeito que quiser"
                    benefits={["Horário flexível","Ficha de treino", "Disponibilidade para tirar dúvidas"]}
                    price="Consulte-nos"
                    cta="Começar agora"
                />
            </div>
        </section>
    )
}

export default Prices