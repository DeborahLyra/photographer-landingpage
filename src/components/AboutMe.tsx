import { useTranslation } from 'react-i18next';
import image from '../../public/imgs/marcusPradoImage.jpeg';
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

export function AboutMe() {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div className="px-8 py-10 md:px-16" id='aboutMe' ref={ref}>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                className="font-bold mb-8 text-3xl md:text-5xl text-center"
            >
                {t('aboutMe.title')}
            </motion.h2>

            <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-justify text-base md:text-lg font-light max-w-xl"
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