import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <div>
          <li>
            <Link href="/">
              <i className="material-icons" title="home">home</i>
            </Link>
          </li>
        </div>
        <div>
          <li>
            <Link href="/carriera">
              <i className="material-icons" title="career">work</i>
            </Link>
          </li>
        </div>
        <div>
          <li>
            <Link href="/progetti">
              <i className="material-icons" title="projects">terminal</i>
            </Link>
          </li>
        </div>
        <div className={styles.right}>
          <li>
            <Link href="mailto:dennisturco@gmail.com">
              <i className="material-icons" title="contattami">email</i>
            </Link>
          </li>
        </div>
        <div id="school">
          <li>
            <Link href="/studi">
              <i className="material-icons" title="education">school</i>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
