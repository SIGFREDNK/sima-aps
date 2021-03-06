import React, { useEffect, useState, useRef } from 'react';

import Img from 'components/Img';

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import Layout from 'components/Layout';
import Actions from 'components/Actions';

const Smedejernshegn = () => {
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
        <Layout title="Smedejernshegn">
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
                                src="/hegn/smedejernshegn-1.jpeg"
                                alt="Et smedejernshegn"
                            />
                            <Img
                                src="/hegn/smedejernshegn-2.png"
                                alt="Et smedejernshegn"
                            />
                            <Img
                                src="/hegn/smedejernshegn-3.webp"
                                alt="Et smedejernshegn"
                            />
                            <Img
                                src="/hegn/smedejernshegn-4.jpeg"
                                alt="Et smedejernshegn"
                            />
                            <Img
                                src="/hegn/smedejernshegn-5.jpeg"
                                alt="Et smedejernshegn"
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
                        <h2>Smedejernshegn</h2>
                        <h4>Info</h4>
                        <p>
                            Smedejernshegn er et smukt, st??rkt og eksklusivt
                            hegn med en utrolig lang levetid. Hegnet er blandt
                            de dyrere hegn p?? markedet, men uden tvivl alle
                            pengene v??rd
                        </p>
                        <h4>H??jder</h4>
                        <p>90 cm / 180 cm</p>
                        <p>Andre h??jder kan fremskaffes efter aftale</p>
                        <h4>Vejledende pris med montage</h4>
                        <p>
                            3.000 - 5.000 kr. inkl. moms pr. meter ved h??jde 180
                            cm
                        </p>
                        <h4>Stolper</h4>
                        <p>Tr??</p>
                        <h4>Materiale</h4>
                        <p>Tr??</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Smedejernshegn;
