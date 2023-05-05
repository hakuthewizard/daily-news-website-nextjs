import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className={`${styles.sidebar} ${toggleSidebar ? styles.open : ''}`}>
      <Link className={styles.link} href='/'>Home</Link>
      <Link className={styles.link} href='/about'>About</Link>
      <h1></h1>
    </div>
  );
};

export default Sidebar;
