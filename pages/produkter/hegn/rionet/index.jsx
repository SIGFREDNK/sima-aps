import React, { useEffect, useState, useRef } from 'react';

import Img from 'components/Img';

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import Layout from 'components/Layout';
import Actions from 'components/Actions';

const Rionet = () => {
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
        <Layout title="Rionet">
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
                                src="/hegn/rionet-1.jpeg"
                                alt="Et rionethegn"
                            />
                            <Img
                                src="/hegn/rionet-2.jpeg"
                                alt="Et rionethegn"
                            />
                            <Img
                                src="/hegn/rionet-3.jpeg"
                                alt="Et rionethegn"
                            />
                            <Img
                                src="/hegn/rionet-4.jpeg"
                                alt="Et rionethegn"
                            />
                            <Img
                                src="/hegn/rionet-5.jpeg"
                                alt="Et rionethegn"
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
                        <h2>Rionet</h2>
                        <h4>Info</h4>
                        <p>
                            Rionet er en k??n og enkel mulighed til haven. Hegnet
                            er velegnet til at have diverse slyngplanter groende
                            p?? det
                        </p>
                        <h4>H??jder</h4>
                        <p>
                            90 cm / 100 cm / 120 cm / 150 cm / 180 cm / 200 cm
                        </p>
                        <p>Vi kan ogs?? tilpasse hegnet efter dit ??nske</p>
                        <h4>Vejledende pris med montage</h4>
                        <p>
                            1.600 - 1.800 kr. inkl. moms pr. meter ved h??jde 180
                            cm
                        </p>
                        <h4>Stolper</h4>
                        <p>Tr??, komposit, galvaniseret st??l</p>
                        <h4>Farver</h4>
                        <p>Sort, galvaniseret, rustent</p>
                        <h4>Maskest??rrelse</h4>
                        <p>5 cm, 10 cm, 15 cm</p>
                        <h4>Tykkelse</h4>
                        <p>??5, ??8</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Rionet;
