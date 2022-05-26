import React, { useEffect, useState, useRef } from 'react';

import Img from 'components/img';

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import Layout from 'components/Layout';
import Actions from 'components/Actions';

const Maskinflet = () => {
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
                                src="/hegn/maskinflet-1.jpeg"
                                alt="Et maskinflet"
                            />
                            <Img
                                src="/hegn/maskinflet-1.jpeg"
                                alt="Et maskinflet"
                            />
                            <Img
                                src="/hegn/maskinflet-1.jpeg"
                                alt="Et maskinflet"
                            />
                            <Img
                                src="/hegn/maskinflet-1.jpeg"
                                alt="Et maskinflet"
                            />
                            <Img
                                src="/hegn/maskinflet-1.jpeg"
                                alt="Et maskinflet"
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
                        <h2>Maskinflet</h2>
                        <h4>Info</h4>
                        <p>
                            Maskinflet er et meget udbredt hegn, når det kommer
                            til indhegning af industri. Det er det, fordi det er
                            forholdsvist billigt og det kan opsættes de fleste
                            steder.
                        </p>
                        <h4>Højder</h4>
                        <p>
                            60 cm / 80 cm / 100 cm / 120 cm / 140 cm / 150 cm /
                            160 cm 180 cm / 210 cm
                        </p>
                        <p>
                            Vi kan også lave andre mål, ovennævnte er dog de
                            mest gængse
                        </p>
                        <h4>Vejledende pris med montage</h4>
                        <p>300-400 kr. inkl. moms pr. meter ved højde 180 cm</p>
                        <h4>Stolper</h4>
                        <p>Fås i galvaniseret stål</p>
                        <h4>Farver</h4>
                        <p>Grå, grøn</p>
                        <p>Andre farver kan muligvis bestilles efter aftale</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Maskinflet;
