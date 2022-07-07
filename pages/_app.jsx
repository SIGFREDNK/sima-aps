import { motion, AnimatePresence } from 'framer-motion';
import Script from 'next/script';
import '../styles/globals.scss';

function MyApp({ Component, pageProps, router }) {
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, type: 'linear' }}
                key={router.route}
            >
                <Script
                    strategy="lazyOnload"
                    src="https://www.googletagmanager.com/gtag/js?id=G-P75DQE390X"
                />
                <Script strategy="lazyOnload" id="analytics">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                    `}
                </Script>
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    );
}

export default MyApp;
