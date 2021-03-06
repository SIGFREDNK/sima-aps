import React, { useEffect, useState, useRef } from 'react';

import Img from 'components/Img';

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import Layout from 'components/Layout';
import Actions from 'components/Actions';

const Raftehegn = () => {
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
        <Layout title="Raftehegn">
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
                                src="/hegn/raftehegn-1.jpeg"
                                alt="Et raftehegn"
                            />
                            <Img
                                src="/hegn/raftehegn-2.jpeg"
                                alt="Et raftehegn"
                            />
                            <Img
                                src="/hegn/raftehegn-3.jpeg"
                                alt="Et raftehegn"
                            />
                            <Img
                                src="/hegn/raftehegn-4.jpg"
                                alt="Et raftehegn"
                            />
                            <Img
                                src="/hegn/raftehegn-5.jpeg"
                                alt="Et raftehegn"
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
                        <h2>Raftehegn</h2>
                        <h4>Info</h4>
                        <p>
                            Raftehegn er et smukt og naturligt hegn til haven.
                            Rafterne f??es b??de med og uden bark.{' '}
                        </p>
                        <h4>H??jder</h4>
                        <p>
                            100 cm / 120 cm / 140 cm / 160 cm / 180 cm / 200 cm
                            / 220 cm
                        </p>
                        <p>Vi kan ogs?? tilpasse hegnet efter dit ??nske</p>
                        <h4>Vejledende pris med montage</h4>
                        <p>
                            2.000 - 2.500 kr. inkl. moms pr. meter ved h??jde 180
                            cm
                        </p>
                        <h4>Stolper</h4>
                        <p>Tr??, H??rdttr??</p>
                        <h4>Materiale</h4>
                        <p>Tr??, komposit</p>
                        <h4>Tykkelse</h4>
                        <p>??5, ??8</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Raftehegn;
