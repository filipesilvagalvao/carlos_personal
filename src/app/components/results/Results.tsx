import Card_Result from "../card_result/Card_Result"
import styles from "./Results.module.css"

function Results() {
  return (
    <section className={styles.results} id="resultados">
      <h2 className={styles.results__title}><span>Resultados</span> dos treinos</h2>
      <div className={styles.results__container}>
        <Card_Result
          img1="/compare/musculacao-antes.png"
          img2="/compare/musculacao-depois.png"
          name="João Pedro"
          time="6 meses"
          muscle="+5kg massa magra"
          fat="-8% gordura"
        />
        <Card_Result
          img1="/compare/emagrecer-antes.png"
          img2="/compare/emagrecer-depois.jpg"
          name="Bruna Rios"
          time="6 meses"
          muscle="+5kg massa magra"
          fat="-8% gordura"
        />
        <Card_Result
          img1="/compare/musculacao-antes.png"
          img2="/compare/musculacao-depois.png"
          name="João Pedro"
          time="6 meses"
          muscle="+5kg massa magra"
          fat="-8% gordura"
        />

        <Card_Result
          img1="/compare/emagrecer-antes.png"
          img2="/compare/emagrecer-depois.jpg"
          name="Bruna Rios"
          time="6 meses"
          muscle="+5kg massa magra"
          fat="-8% gordura"
        />

        <Card_Result
          img1="/compare/musculacao-antes.png"
          img2="/compare/musculacao-depois.png"
          name="João Pedro"
          time="6 meses"
          muscle="+5kg massa magra"
          fat="-8% gordura"
        />
      </div>
    </section>
  )
}

export default Results