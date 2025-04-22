import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { WhatsappLogo, Envelope, InstagramLogo } from 'phosphor-react';



export function Contact() {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const contacts = [
        {
            link: "https://api.whatsapp.com/send?phone=5581997800250&text=Ol%C3%A1,%20gostaria%20de%20informações%20sobre%20as%20imagens%20do%20site%20",
            icon: WhatsappLogo,
            text: t('contact.whatsapp'),
        },
        {
            link: "mailto:marcuspradoimprensa@gmail.com",
            icon: Envelope,
            text: t('contact.email'),
        },
        {
            link: "https://www.instagram.com/marcusprado.fotografia",
            icon: InstagramLogo,
            text: t('contact.instagram'),
        },
    ];
    return (
        <div 
            ref={ref}
            className="min-h-screen bg-[#f5f1e6] py-20 px-4 md:px-16"
            id="contact"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
                className="text-center mb-16"
            >
                <h2 className="font-serif text-4xl md:text-6xl mb-4">
                    {t('contact.title')}
                </h2>
                <div className="w-24 h-1 bg-black mx-auto"></div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="font-serif mt-8 text-lg md:text-xl max-w-2xl mx-auto"
                >
                    {t('contact.subtitle')}
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {contacts.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <motion.a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                                className="flex flex-col items-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                                whileHover={{ y: -5 }}
                            >
                                <IconComponent 
                                    size={48} 
                                    className="mb-6 text-gray-800" 
                                    weight="duotone" 
                                />
                                <p className="font-serif text-lg text-center text-gray-800">
                                    {item.text}
                                </p>
                            </motion.a>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}