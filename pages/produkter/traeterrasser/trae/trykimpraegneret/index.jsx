// REACT
import React from 'react';

// COMPONENTS
import Layout from 'components/Layout';
import Actions from 'components/Actions';
import Img from 'components/Img';

const Trykimpraegneret = () => {
    return (
        <Layout title="Kompositterrasse">
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
                                src="/traeterrasser/trykimpraegneret.jpeg"
                                alt="En terrassebrædde"
                            />
                        </div>
                    </div>
                    <span style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
                        Tak til Stark for lån af billede
                    </span>
                </div>
                <div className="right">
                    <div className="info">
                        <h2>Trykimprægneret træ</h2>
                        <h4>Info</h4>
                        <p>
                            Trykimprægneret træ er træ der er givet en
                            behandling således at træet holder længere end
                            normalt. Trykimprængeret træ er forholdsvis
                            prisvenligt.
                        </p>
                        <h4>Vejledende pris med montage</h4>
                        <p>Pris efter aftale</p>
                        <h4>Farve</h4>
                        <p>Lysebrun</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Trykimpraegneret;
