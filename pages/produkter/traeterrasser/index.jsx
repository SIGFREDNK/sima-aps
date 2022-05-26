import Layout from 'components/Layout';
import Item from 'components/Item';
import Actions from 'components/Actions';

import styles from './index.module.scss';

export default function TraeTerrasser() {
    return (
        <Layout title="Træterrasser">
            <div className={styles.page}>
                <h2 className={styles.title}>Træterrasser</h2>
                <p className={styles.subtitle}>Se vores terrasser nedenfor</p>
                <Actions />
                <p
                    className={styles.subtitle}
                    style={{ marginTop: '1rem', fontWeight: 600 }}
                >
                    Leverandør brochure
                </p>
                <div>
                    <a
                        href="https://keflico.com/wp-content/uploads/2022/03/Keflico-terrasse-i-trae-2022.pdf"
                        style={{ textDecoration: 'underline' }}
                    >
                        Keflico
                    </a>
                    <span style={{ margin: '0 0.5rem' }}> | </span>
                    <a
                        href="https://viewer.ipaper.io/Wimex/hegn-og-terrasse-2022/"
                        style={{ textDecoration: 'underline' }}
                    >
                        Wimex
                    </a>
                    <span style={{ margin: '0 0.5rem' }}> | </span>
                    <a
                        href="https://ipaper.ipapercms.dk/FroeslevTrae/froeslev-hegnterrasse-2022/?page=1"
                        style={{ textDecoration: 'underline' }}
                    >
                        Frøslev
                    </a>
                    <span style={{ margin: '0 0.5rem' }}> | </span>
                    <a
                        href="https://kirkedalkomposit.dk/katalog/"
                        style={{ textDecoration: 'underline' }}
                    >
                        Kirkedal
                    </a>
                </div>
                <div className="grid">
                    <Item
                        src="/traeterrasser/komposit-1.jpg"
                        alt="Et billede af et kompositterrasse"
                        title="Komposit"
                        path="/produkter/traeterrasser/komposit"
                    />
                    <Item
                        src="/traeterrasser/haerdttrae-1.jpg"
                        alt="Et billede af en hårdttræsterrasse"
                        title="Hårdttræ"
                        path="/produkter/traeterrasser/haerdttrae"
                    />
                    <Item
                        src="/traeterrasser/trae-1.jpg"
                        alt="Et billede af en traeterrasse"
                        title="Almindelig træ"
                        path="/produkter/traeterrasser/trae"
                    />
                </div>
            </div>
        </Layout>
    );
}
