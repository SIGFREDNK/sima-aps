import Link from 'next/link';

import styles from './index.module.scss';

export default function NavItem({ path, value, anchorStyling, liStyling }) {
    return (
        <li className={liStyling}>
            <Link href={path}>
                <a className={anchorStyling}>{value}</a>
            </Link>
        </li>
    );
}
