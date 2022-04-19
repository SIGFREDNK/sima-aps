import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from './index.module.scss';

export default function Item({ alt, src, title, href }) {
    return (
        <div className="item">
            <Link href={href} passHref>
                <Image src={src} layout="fill" alt={alt} />
            </Link>
            <span
                className="title"
                style={{
                    pointerEvents: 'none'
                }}
            >
                {title}
            </span>
        </div>
    );
}
