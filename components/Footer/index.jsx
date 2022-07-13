import Logo from '../Logo';
import Link from 'next/link';

import styles from './index.module.scss';

import Actions from 'components/Actions';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <Logo />
            <p className={styles.cvr}>
                Cvr. 42989681 | Tlf. <a href="tel:30288255">30 28 82 55</a>
            </p>
            <Actions />
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link href="/privatlivspolitik">
                        <a className={styles.anchor}>Privatlivspolitik</a>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/Handelsbetingelser">
                        <a className={styles.anchor}>Handelsbetingelser</a>
                    </Link>
                </li>
                <li className={styles.li}>
                    <a
                        className={styles.anchor}
                        href="https://policies.google.com/privacy/google-partners"
                    >
                        Cookiepolitik
                    </a>
                </li>
                <li className={styles.li}>
                    <Link href="/databeskyttelse">
                        <a className={styles.anchor}>Databeskyttelse</a>
                    </Link>
                </li>
            </ul>
            <div className={styles.credit}>
                <span className={styles.copyright}>© 2022 Sima ApS</span>
                <small className={styles.virketrang}>
                    Powered by Virketrang
                </small>
            </div>
        </div>
    );
}
