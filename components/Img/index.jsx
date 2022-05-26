import React from 'react';

import Image from 'next/image';

// import styles from './Image-module.scss';

const Img = ({ src, alt }) => {
    return (
        <div className="image-wrapper">
            <Image src={src} layout="fill" alt={alt} />
        </div>
    );
};

export default Img;
