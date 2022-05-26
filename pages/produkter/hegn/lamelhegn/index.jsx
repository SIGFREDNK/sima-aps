import React, { useEffect, useState, useRef } from 'react';

import Img from 'components/Img';

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import Layout from 'components/Layout';
import Actions from 'components/Actions';

const Lamelhegn = () => {
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
                                src="/hegn/lamelhegn-1.jpeg"
                                alt="Et lamelhegn"
                            />
                            <Img
                                src="/hegn/lamelhegn-2.jpg"
                                alt="Et lamelhegn"
                            />
                            <Img
                                src="/hegn/lamelhegn-3.jpg"
                                alt="Et lamelhegn"
                            />
                            <Img
                                src="/hegn/lamelhegn-4.jpg"
                                alt="Et lamelhegn"
                            />
                            <Img
                                src="/hegn/lamelhegn-5.jpg"
                                alt="Et lamelhegn"
                            />
                        </div>
                    </div>
                    <button className="right-arrow" onClick={nextSlide}>
                        <FaArrowCircleRight />
                    </button>
                    <span style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
                        Tak til Jimahegn for lån af det første billede
                    </span>
                </div>
                <div className="right">
                    <div className="info">
                        <h2>Lamelhegn</h2>
                        <h4>Info</h4>
                        <p>
                            Lamelhegn er et smukt træhegn, som passer til alle
                            typer haver uden den store hældning. Lamelhegn fås
                            både i prisvenlige og mere eksklusive udgaver
                        </p>
                        <h4>Højder</h4>
                        <p>
                            90 cm / 120 cm / 140 cm / 160 cm / 180 cm / 200 cm
                        </p>
                        <h4>Vejledende pris med montage</h4>
                        <p>
                            1.400-1800 kr. inkl. moms pr. meter ved højde 180 cm
                        </p>
                        <h4>Stolper</h4>
                        <p>Træ</p>
                        <h4>Materiale</h4>
                        <p>Træ</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Lamelhegn;
