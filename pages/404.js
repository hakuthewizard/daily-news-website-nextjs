import Link from "next/link"
import styles from '../styles/404.module.css';
const PageNotFound = () => {
    return (
    <div className={styles.container}>
        <h1>
            Page Not Found
        </h1>

        <h3>No worries though!</h3>
        <Link href="/">Click here to go home</Link>
    </div>
    )
}
export default PageNotFound;