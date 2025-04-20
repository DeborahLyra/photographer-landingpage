import { useTranslation } from 'react-i18next';
import image from '../../public/imgs/marcusPradoImage.jpeg';
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

export function AboutMe() {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div className="px-8 py-20 bg-white" id='aboutMe' ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                className="text-center mb-16"
            >
                <h2 className="font-serif text-4xl md:text-6xl mb-4">
                    {t('aboutMe.title')}
                </h2>
                <div className="w-24 h-1 bg-black mx-auto"></div>
            </motion.div>

            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-serif text-lg text-justify md:text-xl font-light max-w-2xl tracking-wide"
                >
                    {t('aboutMe.text')
                        .split('\n\n')
                        .map((paragraph, idx) => (
                            <p key={idx} className="mb-2">{paragraph}</p>
                        ))}
                </motion.div>

                <motion.img
                    src={image}
                    alt="Marcus Prado"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full m-2 max-w-lg h-auto rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
}