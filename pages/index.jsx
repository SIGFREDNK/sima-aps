import Layout from 'components/Layout';
import Button from 'components/Button';
import Testimonial from 'components/Testimonial';
import Link from 'next/link';

import { FaStar } from 'react-icons/fa';

import styles from '../styles/Home.module.scss';
import Banner from 'components/Banner';
import Supplier from 'components/Supplier';
import { useState } from 'react';

export default function HomePage() {
    const [visible, setVisible] = useState(true);
    return (
        <Layout title="Forside">
            <section className={styles.section}>
                <h1 className={styles.title}>Vi hjælper dig hele vejen</h1>
                <p className={styles.subtitle}>
                    Vi er en midtjysk entreprenør virksomhed, der arbejder med
                    hegn, stubfræsning, diamantboring, træbeskæring,
                    træterrasser og andre tømreropgaver.
                    <br /> <br />
                    Tryk på knappen for at indhente et tilbud.
                    <br /> Det er helt gratis og uforpligtende.
                </p>
                <div>
                    <Button href="/indhent-tilbud" value="Indhent Tilbud" />
                    <Button
                        href="tel:30288255"
                        value="Ring"
                        backgroundColor="#3fbf81"
                    />
                </div>
            </section>

            <section className={styles.testimonials}>
                <h2>Anmeldelser</h2>
                <div className={styles.reviews}>
                    <Testimonial
                        title="5 store stjerner herfra"
                        text=" 5 store stjerner herfra. To friske og effektive
                            fyre. Kvaliteten er i top og jeg kan klart
                            anbefales."
                        author="Betina Riknie"
                    />
                    <Testimonial
                        title="Flot terrasse"
                        text="5 store stjerner herfra. To friske og effektive
                            fyre. Kvaliteten er i top og jeg kan klart
                            anbefales."
                        author="Peter Kolding Harvig"
                    />
                    <Testimonial
                        title="Godt håndværk"
                        text="Vi fik bygget et flot og solidt
                            redskabsskur med overdækning, som også kan bruges
                            til hyggen i skyggen. Alt i
                            top herfra :-)"
                        author="Jesper Blinoff"
                    />
                    <Testimonial
                        title="God service og pris"
                        text="God service og pris. Jeg er meget glad for deres
                            arbejde, og jeg vil helt sikkert benytte dem
                            fremover"
                        author="Helle Knudsen"
                    />
                </div>
            </section>
            <Banner duration={10} width={500}>
                <Supplier
                    src="/leverandoer/stark.png"
                    alt=""
                    href="https://www.stark.dk"
                />
                <Supplier
                    src="/leverandoer/bygma.png"
                    alt=""
                    href="https://www.bygma.dk"
                />
                <Supplier
                    src="/leverandoer/froeslev.png"
                    alt=""
                    href="https://www.froeslev.dk"
                />
                <Supplier
                    src="/leverandoer/jimahegn.webp"
                    alt=""
                    href="https://www.jimahegn.dk"
                />
                <Supplier
                    src="/leverandoer/keflico.jpg"
                    alt=""
                    href="https://www.keflico.dk"
                />
                <Supplier
                    src="/leverandoer/kirkedal.svg"
                    alt=""
                    href="https://www.kirkedal.dk"
                />
            </Banner>
            <div
                className={styles.cookieBanner}
                style={{ display: visible ? 'flex' : 'none' }}
            >
                <p>
                    Denne hjemmeside bruger cookies til at lagre information på
                    din computer. For mere information se vores{' '}
                    <a href="https://policies.google.com/privacy/google-partners">
                        cookie politik
                    </a>
                </p>
                <button onClick={() => setVisible(false)}>Accepter</button>
            </div>
        </Layout>
    );
}
