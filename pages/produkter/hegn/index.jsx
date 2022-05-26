import Layout from 'components/Layout';
import Item from 'components/Item';
import Actions from 'components/Actions';

import styles from './index.module.scss';

export default function Hegn() {
    return (
        <Layout title="Hegn">
            <div className={styles.page}>
                <h2 className={styles.title}>Hegn</h2>
                <p className={styles.subtitle}>Se vores hegnstyper nedenfor</p>
                <Actions />
                <p
                    className={styles.subtitle}
                    style={{ marginTop: '1rem', fontWeight: 600 }}
                >
                    Leverandør brochure
                </p>
                <div>
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
                        src="/hegn/komposithegn-1.jpg"
                        alt="Et billede af et komposithegn"
                        title="Komposit"
                        path="/produkter/hegn/komposithegn"
                        priority={true}
                    />
                    <Item
                        src="/hegn/maskinflet-1.jpg"
                        alt="Et billede af maskinflet"
                        title="Maskinflet"
                        path="/produkter/hegn/maskinflet"
                    />
                    <Item
                        src="/hegn/panelhegn-1.jpg"
                        alt="Et billede af panelhegn"
                        title="Panelhegn"
                        path="/produkter/hegn/panelhegn"
                    />
                    <Item
                        src="/hegn/rionet-1.jpeg"
                        alt="Et billede af et rionethegn"
                        title="Rionet"
                        path="/produkter/hegn/rionet"
                    />
                    <Item
                        src="/hegn/raftehegn-1.jpeg"
                        alt="Et billede af et raftehegn"
                        title="Raftehegn"
                        path="/produkter/hegn/raftehegn"
                    />
                    <Item
                        src="/hegn/lamelhegn-1.jpeg"
                        alt="Et billede af et lamelhegn"
                        title="Lamelhegn"
                        path="/produkter/hegn/lamelhegn"
                    />
                    <Item
                        src="/hegn/smedejernshegn-1.jpeg"
                        alt="Et billede af et smedejernshegn"
                        title="Smedejernshegn"
                        path="/produkter/hegn/smedejernshegn"
                    />
                    <Item
                        src="/hegn/stoejhegn-1.jpeg"
                        alt="Et billede af et støjhegn"
                        title="Støjhegn"
                        path="/produkter/hegn/stoejhegn"
                    />
                    <Item
                        src="/hegn/stakit-1.jpeg"
                        alt="Et billede af et stakit"
                        title="Stakit"
                        path="/produkter/hegn/stakit"
                    />
                    <Item
                        src="/hegn/plankevaerk-1.jpeg"
                        alt="Et billede af et plankeværk"
                        title="Plankeværk"
                        path="/produkter/hegn/plankevaerk"
                    />
                    <Item
                        src="/hegn/klinkehegn-1.jpeg"
                        alt="Et billede af et klinkehegn"
                        title="Klinkehegn"
                        path="/produkter/hegn/klinkehegn"
                    />
                </div>
            </div>
        </Layout>
    );
}
