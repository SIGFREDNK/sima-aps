import Layout from 'components/Layout';
import Image from 'next/image';
import Actions from 'components/Actions';

import styles from './index.module.scss';

export default function TraeBeskaering() {
    return (
        <Layout title="Træbeskæring">
            <div className="background">
                <Image
                    src="/traebeskaering/traebeskaering-1.jpg"
                    layout="fill"
                    alt="Et billede af et fældet træ"
                />
            </div>
            <div className="page">
                <h2 className="title">Træbeskæring</h2>
                <p className="subtitle">Priser kun efter aftale</p>
                <Actions />
            </div>
        </Layout>
    );
}
