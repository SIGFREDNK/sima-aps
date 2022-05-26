import React, { useEffect, useState, useRef } from 'react';

import Img from 'components/img';

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import Layout from 'components/Layout';
import Actions from 'components/Actions';

const Plankevaerk = () => {
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
                                src="/hegn/plankevaerk-1.jpg"
                                alt="Et plankevaerk"
                            />
                            <Img
                                src="/hegn/plankevaerk-2.jpeg"
                                alt="Et plankevaerk"
                            />
                            <Img
                                src="/hegn/plankevaerk-3.jpeg"
                                alt="Et plankevaerk"
                            />
                            <Img
                                src="/hegn/plankevaerk-4.jpeg"
                                alt="Et plankevaerk"
                            />
                            <Img
                                src="/hegn/plankevaerk-5.jpeg"
                                alt="Et plankevaerk"
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
                        <h2>Plankeværk</h2>
                        <h4>Info</h4>
                        <p>
                            Plankeværk er en køn og klassisk hegntype, som giver
                            privatliv og falder i et med omgivelser
                        </p>
                        <h4>Højder</h4>
                        <p>
                            80 cm / 100 cm / 120 cm / 140 cm / 160 cm / 180 cm /
                            200 cm
                        </p>
                        <h4>Vejledende pris med montage</h4>
                        <p>
                            1.400 - 2.000 kr. inkl. moms pr. meter ved højde 180
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

export default Plankevaerk;
