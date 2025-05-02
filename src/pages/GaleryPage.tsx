import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import { GaleryItem, ImageEvent } from '../types';
import { Navbar } from '../components/Navbar';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Footer } from '../components/Footer';
import {
    ChevronUpIcon
  } from '@heroicons/react/24/outline';

export function GaleryPage() {
    const location = useLocation();
    const { photoType } = location.state || {};
    const [items, setItems] = useState<GaleryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();
    const [showScrollTop, setShowScrollTop] = useState(false);

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

    useEffect(() => {
        const fetchGalery = async () => {
            const { data, error } = await supabase
                .from('galery')
                .select('*')
                .eq('description', photoType)
                .order('description', { ascending: true });

            if (error) {
                console.error('Erro ao buscar galeria:', error.message);
            } else {
                setItems(data as GaleryItem[]);
            }
            setLoading(false);
        };

        fetchGalery();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="animate-pulse text-xl text-gray-500">Carregando galeria...</div>
            </div>
        );
    }

    return (
        <div className="bg-white text-gray-800">
            <Navbar />

            <main className="min-h-screen py-20 px-4 md:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif uppercase text-4xl md:text-6xl tracking-wide mb-4">
                        {t(`gallery.${photoType}`)}
                    </h2>
                    <div className="w-24 h-1 bg-black mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    onContextMenu={handleContextMenu}
                                    className="w-full h-96 object-cover"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
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
