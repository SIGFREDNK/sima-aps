import React, { useEffect, useState, useRef } from 'react';

import Img from 'components/img';

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import Layout from 'components/Layout';
import Actions from 'components/Actions';

const Klinkehegn = () => {
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
                                src="/hegn/klinkehegn-1.jpeg"
                                alt="Et klinkehegn"
                            />
                            <Img
                                src="/hegn/klinkehegn-2.jpeg"
                                alt="Et klinkehegn"
                            />
                            <Img
                                src="/hegn/klinkehegn-3.jpeg"
                                alt="Et klinkehegn"
                            />
                            <Img
                                src="/hegn/klinkehegn-4.jpeg"
                                alt="Et klinkehegn"
                            />
                            <Img
                                src="/hegn/klinkehegn-5.jpeg"
                                alt="Et klinkehegn"
                            />
                        </div>
                    </div>
                    <button className="right-arrow" onClick={nextSlide}>
                        <FaArrowCircleRight />
                    </button>
                    <span style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
                        Tak til Jimahegn og Frøslev for lån af billeder
                    </span>
                </div>
                <div className="right">
                    <div className="info">
                        <h2>Klinkehegn</h2>
                        <h4>Info</h4>
                        <p>
                            Klinkehegn er en køn og klassisk hegntype, som giver
                            privatliv og falder i et med omgivelser
                        </p>
                        <h4>Højder</h4>
                        <p>120 cm / 140 cm / 160 cm / 180 cm / 200 cm</p>
                        <p>Andre mål kan laves efter aftale</p>
                        <h4>Vejledende pris med montage</h4>
                        <p>
                            1.900 - 2.400 kr. inkl. moms pr. meter ved højde 180
                            cm
                        </p>
                        <h4>Stolper</h4>
                        <p>Træ</p>
                        <h4>Materiale</h4>
                        <p>Træ</p>
                        <h4>Farve</h4>
                        <p>Træfarvet, Sort</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Klinkehegn;
