// REACT
import React from 'react';

// COMPONENTS
import Layout from 'components/Layout';
import Actions from 'components/Actions';
import Img from 'components/Img';

const SolidHaerdttrae = () => {
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
                                src="/traeterrasser/solid-haerdttrae.jpeg"
                                alt="En terrassebrædde"
                            />
                        </div>
                    </div>
                    <span style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
                        Tak til Kirkedal for lån af billede
                    </span>
                </div>
                <div className="right">
                    <div className="info">
                        <h2>Solid Hårdttræ</h2>
                        <h4>Info</h4>
                        <p>
                            Solid Sort er en smuk naturlignende kompositbrædde
                            fra Kirkedal. Komposit er vedligeholdelsesfrit og
                            langtidsholdbart
                        </p>
                        <h4>Vejledende pris med montage</h4>
                        <p>Pris efter aftale</p>
                        <h4>Farve</h4>
                        <p>Brun</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SolidHaerdttrae;
