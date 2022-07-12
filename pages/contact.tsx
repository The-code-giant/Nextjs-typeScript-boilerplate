import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const ContactPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li>
            <Link href="/" passHref>
              Home
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        <div>hi</div>
      </main>
    </div>
  );
};
export default ContactPage;
