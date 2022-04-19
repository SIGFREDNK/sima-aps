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
                <div className="grid">
                    <Item
                        src="/traeterrasser/komposit-1.jpg"
                        alt="Et billede af et kompositterrasse"
                        title="Komposit"
                        href="/traeterrasser/komposit"
                    />
                    <Item
                        src="/traeterrasser/haerdttrae-1.jpg"
                        alt="Et billede af en hårdttræsterrasse"
                        title="Hårdttræ"
                        href="/traeterrasser/haerdttrae"
                    />
                    <Item
                        src="/traeterrasser/trae-1.jpg"
                        alt="Et billede af en traeterrasse"
                        title="Træ"
                        href="/traeterrasser/trae"
                    />
                </div>
            </div>
        </Layout>
    );
}
