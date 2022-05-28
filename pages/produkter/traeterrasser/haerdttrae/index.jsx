import Layout from 'components/Layout';
import SmallItem from 'components/SmallItem';
import Actions from 'components/Actions';

import styles from '../index.module.scss';

export default function HaerdtTraeTerrasser() {
    return (
        <Layout title="Træterrasser">
            <div className={styles.page}>
                <h2 className={styles.title}>Terrasser i hårdttræ</h2>
                <Actions />
                <span style={{ marginTop: '1.5rem', fontStyle: 'italic' }}>
                    Tak til Keflico for lån af billeder
                </span>
                <div className="small-grid">
                    <SmallItem
                        src="/traeterrasser/jatoba.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Jatoba"
                        path="/produkter/traeterrasser/haerdttrae/jatoba"
                    />
                    <SmallItem
                        src="/traeterrasser/ipe.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Ipé"
                        path="/produkter/traeterrasser/haerdttrae/ipe"
                    />
                    <SmallItem
                        src="/traeterrasser/eg.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Eg"
                        path="/produkter/traeterrasser/haerdttrae/eg"
                    />
                    <SmallItem
                        src="/traeterrasser/tatajuba.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Tatajuba"
                        path="/produkter/traeterrasser/haerdttrae/tatajuba"
                    />
                    <SmallItem
                        src="/traeterrasser/thermo-ask.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Thermo ask"
                        path="/produkter/traeterrasser/haerdttrae/thermo-ask"
                    />
                    <SmallItem
                        src="/traeterrasser/thermo-fyr.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Thermo fyr"
                        path="/produkter/traeterrasser/haerdttrae/thermo-fyr"
                    />
                    <SmallItem
                        src="/traeterrasser/guariuba.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Guariuba"
                        path="/produkter/traeterrasser/haerdttrae/guariuba"
                    />
                    <SmallItem
                        src="/traeterrasser/cumaru.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Cumaru"
                        path="/produkter/traeterrasser/haerdttrae/cumaru"
                    />
                    <SmallItem
                        src="/traeterrasser/madioquiera.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Madioquiera"
                        path="/produkter/traeterrasser/haerdttrae/madioquiera"
                    />
                    <SmallItem
                        src="/traeterrasser/louro-gamela.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Louro gamela"
                        path="/produkter/traeterrasser/haerdttrae/louro-gamela"
                    />
                    <SmallItem
                        src="/traeterrasser/basralocus.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Basralocus"
                        path="/produkter/traeterrasser/haerdttrae/basralocus"
                    />
                    <SmallItem
                        src="/traeterrasser/garapa.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Garapa"
                        path="/produkter/traeterrasser/haerdttrae/garapa"
                    />
                    <SmallItem
                        src="/traeterrasser/bambus.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Bambus"
                        path="/produkter/traeterrasser/haerdttrae/bambus"
                    />
                    <SmallItem
                        src="/traeterrasser/sucupira.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Sucupira"
                        path="/produkter/traeterrasser/haerdttrae/sucupira"
                    />
                    <SmallItem
                        src="/traeterrasser/bangkirai.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Bangkirai"
                        path="/produkter/traeterrasser/haerdttrae/bangkirai"
                    />
                    {/* <SmallItem
                        src="/traeterrasser/gul-cedar.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Gul ceder"
                        path="/produkter/traeterrasser/haerdttrae/gul-cedar"
                    /> */}
                    {/* <SmallItem
                        src="/traeterrasser/kirsebaer.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Kirsebær"
                        path="/produkter/traeterrasser/haerdttrae/kirsebaer"
                    /> */}
                    {/* <SmallItem
                        src="/traeterrasser/ask.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Ask"
                        path="/produkter/traeterrasser/haerdttrae/ask"
                    /> */}
                    {/* <SmallItem
                        src="/traeterrasser/ahorn.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Ahorn"
                        path="/produkter/traeterrasser/haerdttrae/ahorn"
                    />
                    <SmallItem
                        src="/traeterrasser/birk.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Birk"
                        path="/produkter/traeterrasser/haerdttrae/birk"
                    />
                    <SmallItem
                        src="/traeterrasser/ayous.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Ayous"
                        path="/produkter/traeterrasser/haerdttrae/ayous"
                    />
                    <SmallItem
                        src="/traeterrasser/abachi.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Abachi"
                        path="/produkter/traeterrasser/haerdttrae/abachi"
                    />
                    <SmallItem
                        src="/traeterrasser/accoya.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Accoya"
                        path="/produkter/traeterrasser/haerdttrae/accoya"
                    /> */}
                    {/* <SmallItem
                        src="/traeterrasser/azobe.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Azobe"
                        path="/produkter/traeterrasser/haerdttrae/azobe"
                    />
                    <SmallItem
                        src="/traeterrasser/boeg.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Bøg"
                        path="/produkter/traeterrasser/haerdttrae/boeg"
                    />
                    <SmallItem
                        src="/traeterrasser/cedar.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Ceder"
                        path="/produkter/traeterrasser/haerdttrae/cedar"
                    /> */}
                    {/* <SmallItem
                        src="/traeterrasser/elm.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Elm"
                        path="/produkter/traeterrasser/haerdttrae/elm"
                    />
                    <SmallItem
                        src="/traeterrasser/freijo.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Freijo"
                        path="/produkter/traeterrasser/haerdttrae/freijo"
                    /> */}
                    {/* <SmallItem
                        src="/traeterrasser/fyr.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Fyr"
                        path="/produkter/traeterrasser/haerdttrae/fyr"
                    /> */}
                    {/* <SmallItem
                        src="/traeterrasser/mahogni.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Mahogni"
                        path="/produkter/traeterrasser/haerdttrae/mahogni"
                    /> */}
                    {/* <SmallItem
                        src="/traeterrasser/merbau.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Merbau"
                        path="/produkter/traeterrasser/haerdttrae/merbau"
                    />
                    <SmallItem
                        src="/traeterrasser/oregon-pine.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Oregon pine"
                        path="/produkter/traeterrasser/haerdttrae/oregon-pine"
                    />
                    <SmallItem
                        src="/traeterrasser/pine.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Pine"
                        path="/produkter/traeterrasser/haerdttrae/pine"
                    />
                    <SmallItem
                        src="/traeterrasser/robinie.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Robinie"
                        path="/produkter/traeterrasser/haerdttrae/robinie"
                    />
                    <SmallItem
                        src="/traeterrasser/roeget-eg.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Røget eg"
                        path="/produkter/traeterrasser/haerdttrae/roeget-eg"
                    /> */}
                    {/* <SmallItem
                        src="/traeterrasser/valnoed.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Valnød"
                        path="/produkter/traeterrasser/haerdttrae/valnoed"
                    />
                    <SmallItem
                        src="/traeterrasser/wenge.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Wenge"
                        path="/produkter/traeterrasser/haerdttrae/wenge"
                    />
                    <SmallItem
                        src="/traeterrasser/zebrano.jpeg"
                        alt="Et billede af et terrassebræt"
                        title="Zebrano"
                        path="/produkter/traeterrasser/haerdttrae/zebrano"
                    /> */}
                </div>
            </div>
        </Layout>
    );
}
