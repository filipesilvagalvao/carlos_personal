import { Compare } from "../compare/Compare"
import styles from "./Card_Result.module.css"
type CardResult__Props = {
    img1: string,
    img2: string,
    name: string,
    time: string,
    muscle: string,
    fat: string
}
function Card_Result({ img1, img2, name, time, muscle, fat }:CardResult__Props) {
    return (
        <article className={styles.cardResult}>
            <Compare before={img1} after={img2} />

            <div className={styles.cardResult__container}>

                <h3 className={styles.cardResult__title}>{name}</h3>

                <ul className={styles.cardResult__list}>
                    <li><img src="/img/data-limite.png" alt="data" />{time}</li>
                    <li><img src="/img/musculo.png" alt="musculo" />{muscle}</li>
                    <li><img src="/img/fogo.png" alt="fogo" />{fat}</li>
                </ul>
            </div>
        </article>
    )
}

export default Card_Result