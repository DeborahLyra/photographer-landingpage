import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Footer } from '../components/Footer';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { ArrowLeft, X } from 'phosphor-react';
import { ImageEvent } from '../types';

export function GalleryPage() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [page, setPage] = useState(0);
    const itemsPerPage = 12;
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const allImages = Array.from({ length: 68 }, (_, i) => ({
        id: i + 1,
        image: `/assets/gallery/foto_${i + 1}.jpeg`,
        title: `foto_${i + 1}`
    }));

    const displayedImages = allImages.slice(0, (page + 1) * itemsPerPage);
    const hasMore = displayedImages.length < allImages.length;

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleContextMenu = (e: ImageEvent) => {
        e.preventDefault();
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-white text-gray-800">
            <Navbar />
            <ArrowLeft
                size={24}
                className="mt-4 ml-4 cursor-pointer hover:text-red-400"
                onClick={() => navigate('/')}
            />

            <main className="min-h-screen py-8 px-4 md:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-medium uppercase text-4xl md:text-6xl tracking-wide mb-4">
                        {t('gallery.title')}
                    </h2>
                    <div className="w-24 h-1 bg-black mx-auto"></div>
                    <p className="mt-8 text-lg">{t('gallery.message')}</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {displayedImages.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    onContextMenu={handleContextMenu}
                                    className="w-full h-80 object-cover rounded"
                                />
                                {activeIndex === index && (
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                        <h2 className="text-white text-xl font-medium">{item.title}</h2>
                                        <X
                                            size={24}
                                            color="white"
                                            className="absolute top-3 right-2 cursor-pointer"
                                            onClick={() => setActiveIndex(null)}
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {hasMore && (
                    <div className="text-center mt-10">
                        <button
                            onClick={() => setPage((prev) => prev + 1)}
                            className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                        >
                            {t('gallery.button') || 'Ver mais'}
                        </button>
                    </div>
                )}
            </main>

            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-16 z-50 rounded-full text-black p-3 shadow-lg bg-[#f5f1e6]"
                    aria-label="Voltar ao topo"
                >
                    <ChevronUpIcon className="w-6 h-6" />
                </button>
            )}

            <Footer />
        </div>
    );
}
