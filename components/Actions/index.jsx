import Button from 'components/Button';

export default function Actions() {
    return (
        <div className="actions">
            <a
                href="tel:30288255"
                className="button"
                style={{ backgroundColor: '#3fbf81' }}
            >
                Ring
            </a>
            <Button href="/indhent-tilbud" value="Indhent Tilbud" />
        </div>
    );
}
