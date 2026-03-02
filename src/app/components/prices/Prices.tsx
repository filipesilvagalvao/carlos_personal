import Price from "../price/Price"
import styles from "./Prices.module.css"

function Prices() {
    return (
        <section className={styles.prices} id="precos">
            <h2 className={styles.prices__title}>Nossos <span>Preços</span></h2>
            <div className={styles.prices__container}>
                <Price
                    title="Avulsa - Sessão única"
                    description="Ideal para testar e conhecer"
                    benefits={[
                        "Avaliação física e postural",
                        "Um treino presencial completo",
                        "Orientação de exercícios"
                    ]}
                    price="R$150"
                    time="/sessão"
                    cta="Agendar Agora"
                />
                <Price
                    title="Mensal - Adaptação"
                    description="Foco no início e consistência"
                    benefits={[
                        "Treinos presenciais (frequência a combinar)",
                        "App de treinos e acompanhamento",
                        "Avaliação física mensal",
                        "Suporte via WhatsApp"
                    ]}
                    price="R$380"
                    time="/mês"
                    cta="Começar Hoje"
                />

                <Price
                    title="Trimestral - Resultado"
                    description="Evolução e compromisso"
                    benefits={[
                        "Treinos presenciais intensos",
                        "Planejamento trimestral",
                        "Superto VIP & dicas de nutrição",
                        "Bônus: 1 avaliação extra"
                    ]}
                    price="R$1050,00"
                    cta="Quero Este!"
                />

                <Price
                    title="Semestral - Transformação"
                    description="Foco em longo prazo e alta performance"
                    benefits={[
                        "Todos os benefícios do plano trimestral",
                        "Planejamento avançado de longo prazo",
                        "Flexibilidade de horários"
                    ]}
                    price="R$1980,00"
                    cta="Mudar de Vida"
                />
            </div>
        </section>
    )
}

export default Prices