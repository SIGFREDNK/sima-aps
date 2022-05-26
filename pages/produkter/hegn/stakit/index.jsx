import React, { useEffect, useState, useRef } from 'react';

import Img from 'components/img';

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import Layout from 'components/Layout';
import Actions from 'components/Actions';

const Stakit = () => {
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
                            <Img src="/hegn/stakit-1.jpg" alt="Et stakit" />
                            <Img src="/hegn/stakit-2.jpeg" alt="Et stakit" />
                            <Img src="/hegn/stakit-1.jpg" alt="Et stakit" />
                            <Img src="/hegn/stakit-2.jpeg" alt="Et stakit" />
                            <Img src="/hegn/stakit-1.jpg" alt="Et stakit" />
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
                        <h2>Stakit</h2>
                        <h4>Info</h4>
                        <p>
                            Stakit er en køn og klassisk hegntype, som passer
                            til ethvert hjem og enhver have
                        </p>
                        <h4>Højder</h4>
                        <p>80 cm / 90 cm</p>
                        <h4>Vejledende pris med montage</h4>
                        <p>
                            1.600 - 2.000 kr. inkl. moms pr. meter ved højde 180
                            cm
                        </p>
                        <h4>Stolper</h4>
                        <p>Træ</p>
                        <h4>Materiale</h4>
                        <p>Træ</p>
                        <h4>Farve</h4>
                        <p>Hvid</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Stakit;
