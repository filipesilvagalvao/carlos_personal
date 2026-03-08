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
                    link="https://wa.me/+553799297699?text=Ol%C3%A1%20Carlos!%20Tenho%20interesse%20em%20sua%20consultoria%20online"
                />

                <Price
                    title="Aula avulsa"
                    description="Ideal para testar e conhecer"
                    benefits={["Avaliação física", "Treino personalizado", "Acompanhamento presencial", "Disponibilidade para tirar dúvidas"]}
                    price="R$40,00"
                    cta="Começar agora"
                    link="https://wa.me/+553799297699?text=Ol%C3%A1%20Carlos!%20Tenho%20interesse%20em%20sua%20aula"
                />
                
                <Price
                    title="Personalizar Plano"
                    description="Personalize seu treino do jeito que quiser"
                    benefits={["Horário flexível","Ficha de treino", "Disponibilidade para tirar dúvidas"]}
                    price="Consulte-nos"
                    cta="Começar agora"
                    link="https://wa.me/+553799297699?text=Ol%C3%A1%20Carlos!%20Tenho%20interesse%20personalizar%20um%20plano"
                />
            </div>
        </section>
    )
}

export default Prices