import Axios from "axios";
import { format } from 'date-fns'
import styles from '../styles/News.module.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const News = ({ newsData }) => {
  
  console.log(newsData);
  return (
    <Carousel showThumbs={false} className={styles.carouselcontainer}>
      {newsData.articles.map((article,index) => {
        const publishedDate = new Date(article.publishedAt)
        const formattedDate = format(publishedDate, 'MMMM dd, yyyy')
      
        return (
          <div >
          <h1 className={styles.header}>Wall Street Journal</h1>
          <div className={styles.container} key={index} >
            
            <h1 className={styles.title}>{article.title}</h1>
            <h3>{article.author}</h3>
            <h5>{formattedDate}</h5>
            <img className={styles.image} src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>
            <a href={article.url}>Read more</a>
            </div>
            <br/>
            </div>
        );
      })}
  </Carousel>
  );
};


export const getStaticProps = async () => {
  const apiKey = "39bdf0ae44e74999b540cbd7499068f0";
  const apiUrl = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=39bdf0ae44e74999b540cbd7499068f0";

  try {
    const response = await Axios.get(apiUrl, {
      params: {
        apiKey: apiKey,
      },
    });
    const newsData = response.data;
    return {
      props: {
        newsData,
      },
      revalidate: 60 * 60,
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        newsData: null,
      },
    };
  }
};


export default News;