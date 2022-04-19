import NavItem from '../NavItem';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

import styles from './index.module.scss';

export default function SideNav({ changeState }) {
    return (
        <motion.div
            key="sidemenu"
            className={styles.sidenav}
            initial={{ opacity: 0, x: -100 }}
            animate={{
                opacity: 1,
                x: 0
            }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
                duration: 0.5,
                type: 'spring',
                damping: 25,
                stiffness: 500
            }}
        >
            <IoMdClose
                className={styles.close}
                onClick={() => changeState(false)}
            />
            <ul className={styles.ul}>
                <NavItem
                    value="Hegn"
                    path="/produkter/hegn"
                    anchorStyling={styles.anchor}
                    liStyling={styles.li}
                />
                <NavItem
                    value="Stubfræsning"
                    path="/produkter/stubfraesning"
                    anchorStyling={styles.anchor}
                    liStyling={styles.li}
                />
                <NavItem
                    value="Diamantboring"
                    path="/produkter/diamantboring"
                    anchorStyling={styles.anchor}
                    liStyling={styles.li}
                />
                <NavItem
                    value="Træbeskæring"
                    path="/produkter/traebeskaering"
                    anchorStyling={styles.anchor}
                    liStyling={styles.li}
                />
                <NavItem
                    value="Træterrasser"
                    path="/produkter/traeterrasser"
                    anchorStyling={styles.anchor}
                    liStyling={styles.li}
                />
                <NavItem
                    value="Andet"
                    path="/produkter/andet"
                    anchorStyling={styles.anchor}
                    liStyling={styles.li}
                />
            </ul>
        </motion.div>
    );
}
