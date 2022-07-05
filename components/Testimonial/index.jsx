import React from 'react';

import { FaStar } from 'react-icons/fa';

import styles from './Testimonial.module.scss';

const Testimonial = ({ title, text, author }) => {
    return (
        <div className={styles.review}>
            <div className={styles.rating}>
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
                <FaStar className={styles.star} />
            </div>
            <h4>{title}</h4>
            <p>{text}</p>
            <i>{author}</i>
        </div>
    );
};

export default Testimonial;
