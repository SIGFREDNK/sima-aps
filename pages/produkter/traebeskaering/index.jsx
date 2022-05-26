import Layout from 'components/Layout';
import Image from 'next/image';
import Actions from 'components/Actions';

import styles from './index.module.scss';

export default function TraeBeskaering() {
    return (
        <Layout title="Træbeskæring">
            {/* <div className="background">
                <Image
                    src="/traebeskaering/traebeskaering-1.jpg"
                    layout="fill"
                    alt="Et billede af et fældet træ"
                />
            </div> */}
            <div className="page">
                <h2 className="title">Træbeskæring</h2>
                <p className="subtitle">Priser kun efter aftale</p>
                <Actions />
                <h4 className="bold">Forsikring</h4>
                <p>Vi er fuldt forsikrede</p>
                <h4 className="bold">Ydelser</h4>
                <p>Topkapning</p>
                <p>Beskæring</p>
                <p>Fældning</p>
                <h4 className="bold">Bortskaffelse</h4>
                <p>Vi tilbyder bortskaffelse mod betaling</p>
                <h4 className="bold">Stubfræsning</h4>
                <p>Stubfræsning kan tilkøbes til fordelagtig pris</p>
            </div>
        </Layout>
    );
}
