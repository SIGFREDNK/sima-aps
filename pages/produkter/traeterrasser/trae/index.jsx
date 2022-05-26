import Layout from 'components/Layout';
import SmallItem from 'components/SmallItem';
import Actions from 'components/Actions';

import styles from '../index.module.scss';

export default function TraeTerrasser() {
    return (
        <Layout title="Træterrasser">
            <div className={styles.page}>
                <h2 className={styles.title}>Terrasser i træ</h2>
                <Actions />
                <div className="small-grid">
                    <SmallItem
                        src="/traeterrasser/trykimpraegneret.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Trykimprægneret"
                        path="/produkter/traeterrasser/trykimpraegneret"
                        style={{ width: '200px' }}
                        className={styles.zoomed}
                    />
                </div>
            </div>
        </Layout>
    );
}
