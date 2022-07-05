import Link from 'next/link';
import { motion } from 'framer-motion';

import styles from './index.module.scss';

export default function Button({ href, value, backgroundColor }) {
    return (
        <Link href={href} passHref>
            <motion.a
                whileHover={{ scale: 1.035 }}
                whileTap={{ scale: 0.9 }}
                className="button"
                transition={{ duration: 0.05 }}
                style={{ backgroundColor }}
            >
                {value}
            </motion.a>
        </Link>
    );
}
