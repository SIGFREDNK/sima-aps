import React, { useEffect, useState, useRef } from 'react';

import Img from 'components/Img';

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import Layout from 'components/Layout';
import Actions from 'components/Actions';

const Panelhegn = () => {
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
                                src="/hegn/panelhegn-1.jpg"
                                alt="Et panelhegn"
                            />
                            <Img
                                src="/hegn/panelhegn-2.jpeg"
                                alt="Et panelhegn"
                            />
                            <Img
                                src="/hegn/panelhegn-3.jpeg"
                                alt="Et panelhegn"
                            />
                            <Img
                                src="/hegn/panelhegn-4.jpeg"
                                alt="Et panelhegn"
                            />
                            <Img
                                src="/hegn/panelhegn-5.jpeg"
                                alt="Et panelhegn"
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
                        <h2>Panelhegn</h2>
                        <h4>Info</h4>
                        <p>
                            Panelhegn er et stærkt hegn bestående af kraftige
                            stålfag. Det benyttes derfor ofte som sikringshegn
                            til virksomheder og erhvervsejendomme.
                        </p>
                        <h4>Højder</h4>
                        <p>
                            80 cm / 100 cm / 120 cm / 140 cm / 160 cm / 160 cm
                            183 cm / 203 cm
                        </p>
                        <p>
                            Vi kan også lave andre mål, ovennævnte er dog de
                            mest gængse
                        </p>
                        <h4>Vejledende pris med montage</h4>
                        <p>
                            1.400-1.500 kr. inkl. moms pr. meter ved højde 183
                            cm
                        </p>
                        <h4>Stolper</h4>
                        <p>Fås i galvaniseret stål</p>
                        <h4>Farver</h4>
                        <p>Grå, grøn, sort</p>
                        <p>Andre farver kan muligvis bestilles efter aftale</p>
                        <h4>Tykkelse</h4>
                        <p>Ø5, Ø8</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Panelhegn;
