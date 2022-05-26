import Image from 'next/image';
import Link from 'next/link';

export default function Item({
    alt,
    src,
    title,
    path,
    priority,
    className,
    style
}) {
    return (
        <div className="small-item" style={{ ...style }}>
            <Link href={path} passHref>
                <div style={{ position: 'relative' }} className={className}>
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
