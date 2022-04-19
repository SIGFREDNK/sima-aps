import { AnimatePresence, motion } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';
import Head from 'next/head';

import styles from './index.module.scss';
import { useState } from 'react';

export default function Layout({ children, title }) {
    const [sidemenu, setSidemenu] = useState(false);

    return (
        <>
            <Head>
                <title>{`Sima ApS - ${title}`}</title>
                <meta
                    name="description"
                    content="Vi er en midtjysk håndværkervirksomhed med speciale i hegn, stubfræsning, diamantboring og træterrasser"
                />
                <link
                    rel="shortcut icon"
                    href="/favicon.ico"
                    type="image/x-icon"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Header
                changeState={boolean => setSidemenu(boolean)}
                state={sidemenu}
            />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    );
}
