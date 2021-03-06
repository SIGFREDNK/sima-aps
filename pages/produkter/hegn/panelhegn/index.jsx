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
        <Layout title="Panelhegn">
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
                        Tak til Jimahegn for l??n af billeder
                    </span>
                </div>
                <div className="right">
                    <div className="info">
                        <h2>Panelhegn</h2>
                        <h4>Info</h4>
                        <p>
                            Panelhegn er et st??rkt hegn best??ende af kraftige
                            st??lfag. Det benyttes derfor ofte som sikringshegn
                            til virksomheder og erhvervsejendomme.
                        </p>
                        <h4>H??jder</h4>
                        <p>
                            80 cm / 100 cm / 120 cm / 140 cm / 160 cm / 160 cm
                            183 cm / 203 cm
                        </p>
                        <p>
                            Vi kan ogs?? lave andre m??l, ovenn??vnte er dog de
                            mest g??ngse
                        </p>
                        <h4>Vejledende pris med montage</h4>
                        <p>
                            1.400-1.500 kr. inkl. moms pr. meter ved h??jde 183
                            cm
                        </p>
                        <h4>Stolper</h4>
                        <p>F??s i galvaniseret st??l</p>
                        <h4>Farver</h4>
                        <p>Gr??, gr??n, sort</p>
                        <p>Andre farver kan muligvis bestilles efter aftale</p>
                        <h4>Tykkelse</h4>
                        <p>??5, ??8</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Panelhegn;
