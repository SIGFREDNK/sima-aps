// REACT
import React from 'react';

// COMPONENTS
import Layout from 'components/Layout';
import Actions from 'components/Actions';
import Img from 'components/Img';

const Tatajuba = () => {
    return (
        <Layout title="Hårdttræsterrasse">
            <div className="action-group">
                <h4>Kontakt os</h4>
                <Actions />
            </div>
            <div className="subpage">
                <div className="left">
                    <h2 style={{ marginBottom: '1rem' }}>Prøve</h2>
                    <div className="images">
                        <div className="image-slider">
                            <Img
                                src="/traeterrasser/tatajuba.jpeg"
                                alt="En terrassebrædde"
                            />
                        </div>
                    </div>
                    <span style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
                        Tak til Keflico for lån af billede
                    </span>
                </div>
                <div className="right">
                    <div className="info">
                        <h2>Tatajuba</h2>
                        <h4>Info</h4>
                        <p>
                            Tatajuba er en gullig til gulbrun træsort. Den er
                            smuk, eksotisk og meget stærk.
                        </p>
                        <h4>Varighedsklasse</h4>
                        <p>Klasse 1</p>
                        <h4>Vejledende pris med montage</h4>
                        <p>Pris efter aftale</p>
                        <h4>Farve</h4>
                        <p>Gullig / gulbrun</p>
                        <h4>Densitet</h4>
                        <p>
                            800 kg/m<sup>3</sup> ved 12 % træfugtighed
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Tatajuba;
