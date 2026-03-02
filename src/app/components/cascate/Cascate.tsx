"use client"
import styles from "./Cascate.module.css"

function Cascate() {
  return (
    <div className={styles.cascate}>
        <div className={styles.cascate__container}>
            <p className={styles.cascate__text}>Carlo<span>s Pers</span>onal</p>
            <p className={styles.cascate__text}>Treino <span>estra</span>tégico</p>
            <p className={styles.cascate__text}>Discip<span>lina d</span>iária</p>
            <p className={styles.cascate__text}>Plano<span> indiv</span>idual</p>
        </div>
    </div>
  )
}

export default Cascate