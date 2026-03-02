import styles from "./Feedback.module.css"
import type { Person } from "@/app/utils/type_person"

function Feedback({ namePerson, photo, alt, coments, stars}:Person) {
const estrelas = []

for (let index = 0; index < stars; index++) {

  estrelas.push(<i className="fa-solid fa-star"></i>)
  
}

  return (
    <article className={styles.feedback}>
      <figure className={styles.feedback__photoPerson}>
        <img src={photo} alt={alt} />
        <figcaption>{namePerson}</figcaption>
      </figure>
      <p className={styles.feedback__coments}>
        {coments}
      </p>
      <div className={styles.feedback__stars}>
        {
          estrelas.map((_,index)=>(
            <i className="fa-solid fa-star" key={index}></i>
          ))
        }
      </div>
    </article>
  )
}

export default Feedback