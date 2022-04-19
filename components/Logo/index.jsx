import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.scss';

export default function Logo() {
    return (
        <Link href="/">
            <a className={styles.logo}>
                <Image
                    src="/logo.png"
                    alt="Sima ApS' logo"
                    width={28}
                    height={28}
                    className={styles.icon}
                />
                <h1 className={styles.text}>Sima ApS</h1>
            </a>
        </Link>
    );
}
