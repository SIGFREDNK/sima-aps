import Image from 'next/image';
import Link from 'next/link';

export default function Item({ alt, src, title, path, priority }) {
    return (
        <div className="item">
            <Link href={path} passHref>
                <div style={{ position: 'relative' }}>
                    <Image
                        src={src}
                        layout="fill"
                        alt={alt}
                        priority={priority}
                    />
                </div>
            </Link>
            <span
                className="title"
                style={{
                    pointerEvents: 'none'
                }}
            >
                {title}
            </span>
        </div>
    );
}

Item.defaultProps = {
    priority: false
};
