import Link from 'next/link';
import NavItem from './NavItem';
import SideNav from './SideNav';
import { AnimatePresence } from 'framer-motion';

import styles from './index.module.scss';

export default function Nav({ changeState, state }) {
    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <NavItem
                        path="/produkter/hegn"
                        value="Hegn"
                        anchorStyling={styles.anchor}
                    />
                    <NavItem
                        path="/produkter/stubfraesning"
                        value="Stubfræsning"
                        anchorStyling={styles.anchor}
                    />
                    <NavItem
                        path="/produkter/diamantboring"
                        value="Diamantboring"
                        anchorStyling={styles.anchor}
                    />
                    <NavItem
                        path="/produkter/traebeskaering"
                        value="Træbeskæring"
                        anchorStyling={styles.anchor}
                    />
                    <NavItem
                        path="/produkter/traeterrasser"
                        value="Træterrasser"
                        anchorStyling={styles.anchor}
                    />
                    <NavItem
                        path="/produkter/andet"
                        value="Andet"
                        anchorStyling={styles.anchor}
                    />
                </ul>
            </nav>
            <AnimatePresence exitBeforeEnter initial={true}>
                {state && <SideNav changeState={changeState} />}
            </AnimatePresence>
        </>
    );
}
