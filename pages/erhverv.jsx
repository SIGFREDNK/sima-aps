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
                <h2 className="title">Erhverv</h2>
                <p style={{ marginTop: '1rem' }}>
                    Ønsker du at indgå et samarbejde med os eller ønsker du at
                    benytte os som underentreprenør?
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
            </div>
        </Layout>
    );
};

export default Erhverv;
