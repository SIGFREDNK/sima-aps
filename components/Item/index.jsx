import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.scss';

export default function Item({ alt, src, title, path, priority }) {
    return (
        <div className="item">
            <Link href={path} passHref>
                <div style={{ position: 'relative' }}>
                    <Image
                        src={src}
                        layout="fill"
                        alt={alt}
                        priority={priority}
                    />
                </div>
            </Link>
            <span
                className="title"
                style={{
                    pointerEvents: 'none'
                }}
            >
                {title}
                <Link href={path}>
                    <a className={styles.button}>Se mere</a>
                </Link>
            </span>
        </div>
    );
}

Item.defaultProps = {
    priority: false
};
