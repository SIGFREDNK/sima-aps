import Layout from 'components/Layout';
import SmallItem from 'components/SmallItem';
import Actions from 'components/Actions';

import styles from '../index.module.scss';

export default function KompositTerrasser() {
    return (
        <Layout title="Træterrasser">
            <div className={styles.page}>
                <h2 className={styles.title}>Terrasser i komposit</h2>
                <Actions />
                <span style={{ marginTop: '1.5rem', fontStyle: 'italic' }}>
                    Tak til Kirkedal for lån af billeder
                </span>
                <div className="small-grid">
                    <SmallItem
                        src="/traeterrasser/solid-eg.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Solid Eg"
                        path="/produkter/traeterrasser/solid-eg"
                    />
                    <SmallItem
                        src="/traeterrasser/solid-haerdttrae.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Solid hårdttræ"
                        path="/produkter/traeterrasser/solid-haerdttrae"
                    />
                    <SmallItem
                        src="/traeterrasser/solid-sort.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Solid Sort"
                        path="/produkter/traeterrasser/solid-sort"
                    />
                    <SmallItem
                        src="/traeterrasser/heimdal-eg-haerdttrae.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Eg"
                        path="/produkter/traeterrasser/heimdal-eg-haerdttrae"
                        className={styles.image}
                    />
                    <SmallItem
                        src="/traeterrasser/heimdal-graa-sort.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Grå | sort"
                        path="/produkter/traeterrasser/heimdal-graa-sort"
                        className={styles.image}
                    />
                </div>
            </div>
        </Layout>
    );
}
