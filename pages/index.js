
import Link from "next/link";
import styles from '../styles/Home.module.css'

const Home = () => {
 
  return (
    <div className={styles.homeContainer}>
      <Link className={styles.links} href="/techcrunchnews">TechCrunch News</Link>
      <p className={styles.parag}>TechCrunch is an American online newspaper focusing on high tech and startup companies. It was founded in June 2005 by Archimedes Ventures, led by partners Michael Arrington and Keith Teare.

In 2010, AOL acquired the company for approximately $25 million. Following the 2015 acquisition of AOL and Yahoo by Verizon, the site was owned by Verizon Media from 2015 through 2021. In 2021 Verizon sold its media assets, including AOL, Yahoo, and TechCrunch, to the private equity firm Apollo Global Management, and Apollo integrated them into a new entity called Yahoo! Inc..

In addition to its news reporting, TechCrunch is also known for its Disrupt conference, an annual technology event hosted in several cities across United States, Europe, and China.</p>
      <Link className={styles.links}  href="/wallstreetnews">Wall Street Journal</Link>
      <p className={styles.parag}>The Wall Street Journal (self-styled on the nameplate as "THE WALL STREET JOURNAL." in upright all-capital letters with a dot at the end of the name) is an American business and economic-focused international daily newspaper based in New York City. The Journal is published six days a week by Dow Jones & Company, a division of News Corp. The newspaper is published in broadsheet format and online. The Journal has been printed continuously since its inception on July 8, 1889. The Journal is regarded as a newspaper of record, particularly in terms of business and financial news.The newspaper has won 38 Pulitzer Prizes, the most recent in 2019.</p>
      <Link className={styles.links} href="/businessheadlinesus">Top Business Headlines In The US</Link><p className={styles.parag}>This section is a collection of top business headlines in the US from various online resources.</p>
    </div>
  );
};


export default Home;