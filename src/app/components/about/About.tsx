"use client"
import { useInView } from "react-intersection-observer"
import styles from "./About.module.css"

function About() {
  const {ref, inView} = useInView({
    threshold:0.3
  })

    const move = {
    opacity: 1,
    filter: "blur(0)"
  }
  return (
    <section className={styles.about} id="about">
        <h2 className={styles.about__title}><span>Sobre</span> mim</h2>
        <div className={styles.about__container} ref={ref} style={inView? move:{}}>
            <img src="/photos/corrente.png" alt="imagem de corrente" className={styles.about__chain}/>
            <img src="/photos/corrente.png" alt="imagem de corrente" className={styles.about__chain}/>
            <div className={styles.about__perfil}>
              <img src="/photos/foto-about.png" alt="foto de carlos" className={styles.about__photo}/>
              <img src="/photos/circle-text.png" alt="text" className={styles.About__circle}/>
            </div>

            <div className={styles.about__text}>
                <p>Olá! Sou Carlos Henrique, mas muitos me conhecem como Carlos Personal. Sou <strong><span>professor de academia</span></strong> formado em Educação Física e atuo como <strong><span>personal trainer em Pompéu</span></strong> e região. Minha missão é ajudar pessoas a conquistarem mais saúde, autoestima e qualidade de vida por meio da atividade física.</p>
                <p>Quando atendo alunos em <em><span>academias de pompéu</span></em>, sei que cada pessoa tem um ritmo e um objetivo diferente. Por isso, meu trabalho é baseado em treinos personalizados, pensados de acordo com as necessidades, limitações e metas de cada aluno. Seja para <span>emagrecimento, ganho de massa muscular, condicionamento físico</span> ou melhoria da saúde.</p>
            </div>
        </div>
    </section>
  )
}

export default About