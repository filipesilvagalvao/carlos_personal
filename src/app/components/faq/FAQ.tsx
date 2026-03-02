import styles from "./FAQ.module.css"

function FAQ() {
    return (
        <section className={styles.faq} id="faq">
            <h2 className={styles.faq__title}><span>Algumas</span> Dúvidas</h2>
            <div className={styles.faq__container}>
                <details>
                    <summary>A consultoria funciona para iniciantes?</summary>
                    <p>Sim, o treino é adaptado ao seu nível atual, seja você iniciante ou avançado.</p>
                </details>

                <details>
                    <summary>E se eu nunca treinei antes?</summary>
                    <p>O programa é feito respeitando sua condição física e evolução gradual.</p>
                </details>

                <details>
                    <summary>Em quanto tempo começo a ver resultados?</summary>
                    <p>Depende do seu objetivo e dedicação, mas a maioria dos alunos percebe mudanças nas primeiras 4 a 6 semanas.</p>
                </details>
            </div>
        </section>
    )
}

export default FAQ