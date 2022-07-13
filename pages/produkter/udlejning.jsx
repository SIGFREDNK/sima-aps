import React from 'react';

import Layout from 'components/Layout';

const Erhverv = () => {
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
                <h2 className="title">Maskinudlejning</h2>
                <p style={{ marginTop: '1rem' }}>
                    Vi udlejer udstyr til private
                </p>
                <p style={{ marginTop: '0.5rem' }}>
                    Kontakt os på telefon{' '}
                    <a
                        href="tel:30288255"
                        style={{ textDecoration: 'underline' }}
                    >
                        30 28 82 55
                    </a>
                </p>
                <h4 style={{ marginTop: '2rem' }} className="bold">
                    Klik for at ringe til os
                </h4>
                <a
                    href="tel:30288255"
                    className="button"
                    style={{ backgroundColor: '#3fbf81' }}
                >
                    Ring
                </a>
                <div>
                    <h4 className="bold">Hækklipper</h4>
                    <p>Pris: 200 kr. pr. dag</p>
                    <p>Depositum: 500 kr.</p>
                    <p>Brændstof kan tilkøbes</p>
                    <h4 className="bold">Jordbor</h4>
                    <p>Pris: 250 kr. pr. dag inkl. 1 bor</p>
                    <p>Ekstra bor kan tilkøbes til 100 kr. pr. dag</p>
                    <p>Depositum: 500 kr.</p>
                    <p>Brændstof kan tilkøbes</p>
                    <h4 className="bold">Rotationslaser</h4>
                    <p>Pris: 200 kr. pr. dag</p>
                    <p>Depositum: 500 kr.</p>
                    <h4 className="bold">Afrettersæt</h4>
                    <p>Pris: 150 kr. pr. dag</p>
                    <p>Depositum: 300 kr.</p>
                </div>
            </div>
        </Layout>
    );
};

export default Erhverv;
