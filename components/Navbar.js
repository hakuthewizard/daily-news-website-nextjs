import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import ham from '../public/ham.png';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.navbar}>
      <button className={styles.hamb} onClick={toggleSidebar}>
        <Image className={styles.hamb} src={ham} alt='hamburger menu' width={25} height={25} />
      </button>
      <Link href="/" className={styles.title}>Daily News Website</Link>
      <div></div>
      <Sidebar toggleSidebar={isSidebarOpen} />
    </div>
  );
};

export default Navbar;
