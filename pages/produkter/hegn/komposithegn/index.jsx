import React, { useEffect, useState, useRef } from 'react';

import Img from 'components/Img';

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import Layout from 'components/Layout';
import Actions from 'components/Actions';

const Komposithegn = () => {
    const [index, setIndex] = useState(0);
    const slider = useRef(null);

    const nextSlide = () => {
        setIndex(prevIndex => setIndex(prevIndex === 4 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setIndex(prevIndex => setIndex(prevIndex === 0 ? 4 : prevIndex - 1));
    };

    useEffect(() => {
        console.log(index);
        slider.current.scrollTo({
            left: slider.current.offsetWidth * index,
            behavior: 'smooth'
        });
    }, [index]);

    return (
        <Layout>
            <div className="action-group">
                <h4>Kontakt os</h4>
                <Actions />
            </div>
            <div className="subpage">
                <div className="left">
                    <h2 style={{ marginBottom: '1rem' }}>Inspiration</h2>
                    <button className="left-arrow" onClick={prevSlide}>
                        <FaArrowCircleLeft />
                    </button>
                    <div className="images" ref={slider}>
                        <div className="image-slider">
                            <Img
                                src="/hegn/komposithegn-1.jpg"
                                alt="Et komposithegn"
                            />
                            <Img
                                src="/hegn/komposithegn-2.jpg"
                                alt="Et komposithegn"
                            />
                            <Img
                                src="/hegn/komposithegn-3.jpg"
                                alt="Et komposithegn"
                            />
                            <Img
                                src="/hegn/komposithegn-4.jpg"
                                alt="Et komposithegn"
                            />
                            <Img
                                src="/hegn/komposithegn-5.jpg"
                                alt="Et komposithegn"
                            />
                        </div>
                    </div>
                    <button className="right-arrow" onClick={nextSlide}>
                        <FaArrowCircleRight />
                    </button>
                    <span style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
                        Tak til Jimahegn for lån af billeder
                    </span>
                </div>
                <div className="right">
                    <div className="info">
                        <h2>Komposithegn</h2>
                        <h4>Info</h4>
                        <p>
                            Komposit er en blanding af træ, plastik og
                            bindemiddel. Et komposithegn er både flot at se på,
                            men det er samtidigt også let at vedligeholde.
                            Derfor er denne Komposithegn også blandt de
                            allermest populære
                        </p>
                        <h4>Højder</h4>
                        <p>
                            60 cm / 80 cm / 100 cm / 120 cm / 140 cm / 150 cm /
                            180 cm / 210 cm
                        </p>
                        <p>Andre mål kan muligvis skaffes efter aftale</p>
                        <h4>Vejledende pris med montage</h4>
                        <p>
                            2.000 - 2.500 kr. inkl. moms pr. meter ved højde 180
                            cm
                        </p>
                        <h4>Stolper</h4>
                        <p>Fås i beton, aluminium, galvaniseret stål</p>
                        <h4>Farver</h4>
                        <p>Grå, sort, blå, brun, grøn...</p>
                        <p>
                            Andre farver kan bestilles. Nuancer kan sendes
                            sendes ved henvendelse. Prøver kan også ses.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Komposithegn;
