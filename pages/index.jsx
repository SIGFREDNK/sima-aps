import Layout from 'components/Layout';
import Button from 'components/Button';

import styles from '../styles/Home.module.scss';

export default function HomePage() {
    return (
        <Layout title="Forside">
            <section className={styles.section}>
                <h1 className={styles.title}>Vi hjælper dig hele vejen</h1>
                <p className={styles.subtitle}>
                    Tryk på knappen for at indhente et tilbud.
                    <br /> Det er helt gratis og uforpligtende.
                </p>
                <Button href="/indhent-tilbud" value="Indhent Tilbud" />
            </section>
        </Layout>
    );
}
