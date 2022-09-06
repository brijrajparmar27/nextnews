import styles from "../styles/Pno.module.css";

import Card from "../Components/Card";
import { useRouter } from "next/router";

const Feed = ({ page, articles }) => {
    // console.log(articles);
    const router = useRouter();
    // router.push("/1");
    return (
        <div className={styles.home}>
            <div className={styles.news_contain}>
                {articles.map((data,index) => {
                    return <Card data={data} key={index}/>
                })}
            </div>
            <div className={styles.pages}>
                <div className={styles.btn} onClick={() => { page>1 && router.push(`/${page-1}`)  }}><h3 className={styles.btn_text}>Previous Page</h3></div>
                <div className={styles.current_page}>#</div>
                <div className={styles.btn} onClick={() => { page<5 && router.push(`/${page+1}`) }}><h3 className={styles.btn_text}>Next Page</h3></div>
            </div>
        </div>
    )
}

export const getServerSideProps = async pageContext => {
    const pagenumber = pageContext.query.pno;
    if (!pagenumber || pagenumber < 1 || pagenumber > 5) {
        return {
            props: {
                articles: [],
                page: 1
            }
        }

    }
    const raw = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=cf4fd07510764ff396924b5df49a565f&pageSize=15&page=" + pagenumber);
    const data = await raw.json();

    return {
        props: {
            articles: data.articles,
            page: parseInt(pagenumber)
        }
    }

}
export default Feed;
