// REACT
import React from 'react';

// COMPONENTS
import Layout from 'components/Layout';
import Actions from 'components/Actions';
import Img from 'components/Img';

const GraaSort = () => {
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
                                src="/traeterrasser/heimdal-graa-sort.jpeg"
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
                        <h2>Heimdal Grå | sort</h2>
                        <h4>Info</h4>
                        <p>
                            Heimdal Gråsort er en slidstærk og stilren
                            terrassebrædde fra Kirkedal. Planken er UV-behandlet
                            og langtidsholdbar
                        </p>
                        <h4>Vejledende pris med montage</h4>
                        <p>Pris efter aftale</p>
                        <h4>Farve</h4>
                        <p>Grå / sort</p>
                        <h4>Bestanddele</h4>
                        <p>
                            Brættet består af 60% poppel, 30% HDPE og 10% proces
                            additiver
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default GraaSort;
