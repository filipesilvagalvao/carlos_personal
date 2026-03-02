import styles from "./Price.module.css"

type PriceProps = {
    title:string,
    description:"Ideal para testar e conhecer"|"Foco no início e consistência"|"Evolução e compromisso"|"Foco em longo prazo e alta performance",
    benefits:string[],
    price:string,
    time?:string,
    cta:string
}

function Price({title,description,benefits,price,time,cta}:PriceProps) {
    return (
        <article className={styles.price}>
            
            <div className={styles.price__content}>
                <h3 className={styles.price__title}>{title}</h3>
                <p className={styles.price__text}>{description}</p>

                <ul className={styles.price__list}>
                    {benefits.map((item, index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <p className={styles.price__value}><span>{price}</span>{time}</p>
            <a
                href=""
                className={styles.price__getService}
            >{cta}</a>
        </article>
    )
}

export default Price