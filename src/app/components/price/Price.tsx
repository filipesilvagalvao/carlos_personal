"use client"
import { useInView } from "react-intersection-observer"
import styles from "./Price.module.css"

type PriceProps = {
    title: string,
    description: string,
    benefits: string[],
    price: string,
    time?: string,
    cta: string,
    link:string
}

function Price({ title, description, benefits, price, time, cta,link }: PriceProps) {

    const { ref, inView } = useInView()

    const move = {
        opacity: 1,
        filter: "blur(0)"
    }

    return (
        <div className={styles.cardContainer} ref={ref} style={inView ? move : {}}>
            <div className={styles.titleCard}>
                <p>{title}</p>
            </div>
            <div className={styles.cardContent}>
                <p className={styles.title}>{description}</p>
                <p className={styles.plain}>
                    <span>{price}</span>
                    <span>{time}</span>
                </p>
                <ul className={styles.description}>
                    {benefits.map((item, index) => (
                        <li key={index}>
                            <i className="fa-solid fa-check"></i> {item}
                        </li>
                    ))}
                </ul>
                <a
                    href={link}
                    target="_blank"
                    className={styles.cardBtn}>{cta}</a>
            </div>
        </div>
    )
}

export default Price