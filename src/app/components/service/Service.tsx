"use client"
import { useInView } from "react-intersection-observer"
import styles from "./Service.module.css"

function Service({ img, title, benefits }: { img: string, title: string, benefits: string[] }) {
    const {ref, inView} = useInView()

    const move = {
        opacity:1,
        filter:"blur(0)",
        transform: "translateX(0)"
    }
    
    return (
        <article className={styles.service__card + " service__card"} ref={ref} style={inView?move:{}}>
            <div className={styles.service__description + " service__description"}>
                <img src={img} alt={title} />
                <h2 className={styles.service__cardTitle}>{title}</h2>
                <ul className={styles.service__list}>
                    {benefits.map((benefit, index) => (
                        <li key={index} className={styles.service__item}>
                            <i className="fa-solid fa-check"></i>{benefit}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default Service