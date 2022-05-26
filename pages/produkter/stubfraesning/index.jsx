import Layout from 'components/Layout';
import styles from './index.module.scss';
import Image from 'next/image';
import Actions from 'components/Actions';

import { FaAngleDoubleDown } from 'react-icons/fa';

export default function Stubfraesning() {
    return (
        <Layout title="Stubfræsning">
            <div className="background">
                <Image
                    src="/stubfraesning/stubfraesning-1.jpg"
                    layout="fill"
                    alt="Et billede af en der stubfræser"
                />
                <div className="arrow">
                    <FaAngleDoubleDown />
                </div>
            </div>
            <div className="page">
                <h2 className="title">Stubfræsning</h2>
                <p className="subtitle">Alle priser er inkl. moms</p>
                <Actions />
                <p className={styles.fyi}>
                    Alle stubbe måles på det længste led og ved jordoverfladen
                    inkl. synlige rødder. Disse priser gælder kun ved fræsning
                    fra 15 cm over jordoverflade til 15 cm under. Ved større
                    opgaver (2.500 kr. +) gives mængderabat
                </p>
                <h4 className="bold">Diameter</h4>
                <p>0-10 cm : 75 kr.</p>
                <p>11-20 cm : 150 kr.</p>
                <p>21-30 cm : 225 kr.</p>
                <p>31-40 cm : 300 kr.</p>
                <p>41-50 cm : 412,50 kr.</p>
                <p>51-60 cm : 525 kr.</p>
                <p>61-70 cm : 637,50 kr.</p>
                <p>71-80 cm : 780 kr.</p>
                <p>81-90 cm : 900 kr.</p>
                <p>91-100 cm : 1046,40 kr</p>
                <p>101-110 cm : 1200 kr.</p>
                <p>111-120 cm : 1387,50 kr.</p>
                <p>121-130 cm : 1575 kr.</p>
                <p>131-140 cm : 1762,50 kr.</p>
                <p>141-150 cm : 1950 kr.</p>
                <p>151-160 cm : 2137,50 kr.</p>
                <p>161-170 cm : 2325 kr.</p>
                <p>171-180 cm : 2550 kr.</p>
                <p>181-190 cm : 2775 kr.</p>
                <p>191-200 cm : 3000 kr.</p>
                <p>201-210 cm : 3225 kr.</p>
                <p>211-220 cm : 3450 kr.</p>
                <p>221-230 cm : 3675 kr.</p>
                <p>231-240 cm : 3900 kr.</p>
                <p>241-250 cm : 4125 kr.</p>
                <h4 className="bold">Timeløn</h4>
                <p>Stor stubfræser: 3000 kr. pr. time</p>
                <p>Lille stubfræser: 1000 kr. pr. time</p>
                <h4 className="bold">Startgebyr</h4>
                <p>200 kr.</p>
                <h4 className="bold">Mindstepris</h4>
                <p>1080 kr.</p>
                <h4 className="bold">Kørsel</h4>
                <p>Som udgangspunkt inkluderet,</p>
                <p style={{ width: '20rem' }}>
                    men kan forekomme afhængig af distance og opgavens størrelse
                </p>
                <h4 className="bold">Naborabat</h4>
                <p>
                    Op til <b>20%</b>, men vurderes ved den konkrete opgave
                </p>
            </div>
        </Layout>
    );
}
