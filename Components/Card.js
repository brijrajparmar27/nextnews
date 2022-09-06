import styles from "../styles/Card.module.css";

const Card = ({data}) => {
    return (
        <div className={styles.news_card}>
            <div className={styles.news_img}>
                <img src={data.urlToImage} className={styles.img}/>
            </div>
            <div className={styles.news_title}>
                <h2>{data.title}</h2>
            </div>
            <div className={styles.news_desc}>
                <p>{data.description}</p>
            </div>
        </div>
    )
}
export default Card;