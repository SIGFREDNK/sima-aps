import Layout from 'components/Layout';
import Image from 'next/image';
import Actions from 'components/Actions';

import { FaAngleDoubleDown } from 'react-icons/fa';

import styles from './index.module.scss';

export default function Diamantboring() {
    return (
        <Layout title="Diamantboring">
            <div className="background">
                <Image
                    src="/diamantboring/diamantboring-1.jpg"
                    layout="fill"
                    alt="Et billede af diamantboring"
                />
                <div className="arrow">
                    <FaAngleDoubleDown />
                </div>
            </div>
            <div className="page">
                <h2 className="title">Diamantboring</h2>
                <p className="subtitle">Alle priser er inkl. moms</p>
                <Actions />
                <div className={styles.content}>
                    <h4 className="bold">Startgebyr</h4>
                    <p>Jylland og Fyn 500 kr.</p>
                    <p>Sjælland 700 kr.</p>
                    <h4 className="bold">Kørsel</h4>
                    <p>300 kr. pr. time</p>
                    <p>Broafgift opkræves ved opgaver på Sjælland</p>
                    <h4 className="bold">Timeløn</h4>
                    <p>Forberedende arbejde 375 kr.</p>
                    <p>Diamantboring 500 kr.</p>
                    <p>Oprydning 375 kr.</p>
                    <h4 className="bold">Bortkørsel af affald</h4>
                    <p>267,5 kr. per læs + 300 kr. pr. kørt time</p>
                </div>
            </div>
        </Layout>
    );
}
