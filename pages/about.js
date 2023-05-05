import styles from '../styles/about.module.css'

const About = () => {
    return <div className={styles.container}>
        <p className={styles.parag}>This Daily News Website uses the free version of the NewsAPI to fetch articles and relevant data to showcase the recent news in the related pages.
            <br/>
            <em>This website is a portfolio project website built by Beyza Ballı, using Next.js. 05-05-2023</em>
        </p>
    </div>
}
export default About;