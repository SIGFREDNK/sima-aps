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
                <div className="grid">
                    <Item
                        src="/hegn/komposithegn-1.jpg"
                        alt="Et billede af et komposithegn"
                        title="Komposit"
                        href="/hegn/komposithegn"
                    />
                    <Item
                        src="/hegn/betonhegn-1.jpeg"
                        alt="Et billede af et betonhegn"
                        title="Betonhegn"
                        href="/hegn/betonhegn"
                    />
                    <Item
                        src="/hegn/maskinflet-1.jpg"
                        alt="Et billede af maskinflet"
                        title="Maskinflet"
                        href="/hegn/maskinflet"
                    />
                    <Item
                        src="/hegn/panelhegn-1.jpg"
                        alt="Et billede af panelhegn"
                        title="Panelhegn"
                        href="/hegn/panelhegn"
                    />
                    <Item
                        src="/hegn/rionet-1.jpeg"
                        alt="Et billede af et rionethegn"
                        title="Rionet"
                        href="/hegn/rionet"
                    />
                    <Item
                        src="/hegn/raftehegn-1.jpeg"
                        alt="Et billede af et raftehegn"
                        title="Raftehegn"
                        href="/hegn/raftehegn"
                    />
                    <Item
                        src="/hegn/lamelhegn-1.jpeg"
                        alt="Et billede af et lamelhegn"
                        title="Lamelhegn"
                        href="/hegn/lamelhegn"
                    />
                    <Item
                        src="/hegn/smedejernshegn-1.jpeg"
                        alt="Et billede af et smedejernshegn"
                        title="Smedejernshegn"
                        href="/hegn/smedejernshegn"
                    />
                    <Item
                        src="/hegn/stoejhegn-1.jpeg"
                        alt="Et billede af et støjhegn"
                        title="Støjhegn"
                        href="/hegn/stoejhegn"
                    />
                    <Item
                        src="/hegn/stakit-1.jpeg"
                        alt="Et billede af et stakit"
                        title="Stakit"
                        href="/hegn/stakit"
                    />
                    <Item
                        src="/hegn/plankevaerk-1.jpeg"
                        alt="Et billede af et plankeværk"
                        title="Plankeværk"
                        href="/hegn/plankevaerk"
                    />
                    <Item
                        src="/hegn/klinkehegn-1.jpeg"
                        alt="Et billede af et klinkehegn"
                        title="Klinkehegn"
                        href="/hegn/klinkehegn"
                    />
                </div>
            </div>
        </Layout>
    );
}
