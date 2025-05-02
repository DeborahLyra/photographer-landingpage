import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import { GaleryItem, ImageEvent } from '../types';
import { Navbar } from '../components/Navbar';
import { motion } from 'framer-motion';;
import { useTranslation } from 'react-i18next';


export function GaleryPage() {

    const location = useLocation();
    const { photoType } = location.state || {};
    const [items, setItems] = useState<GaleryItem[]>([])
    const [loading, setLoading] = useState(true)
    const { t } = useTranslation()

    const handleContextMenu = (e: ImageEvent) => {
        e.preventDefault()
    }


    useEffect(() => {
        const fetchGalery = async () => {
            const { data, error } = await supabase
                .from('galery')
                .select('*')
                .eq('description', photoType)
                .order('description', { ascending: true })

            if (error) {
                console.error('Erro ao buscar galeria:', error.message)
            } else {
                setItems(data as GaleryItem[])
            }
            setLoading(false)
        }

        fetchGalery()
    }, [])

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <p>Carregando...</p>
        </div>
    )
    return (
        <div>
            <Navbar />
            <main className="min-h-screen py-20 px-4 md:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif uppercase text-4xl md:text-6xl mb-4">
                        {t(`gallery.${photoType}`)}
                    </h2>
                    <div className="w-24 h-1 bg-black mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3  gap-4 p-4">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="border rounded shadow-md p-3 hover:shadow-lg transition-shadow"

                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-56 object-cover rounded"
                                onContextMenu={handleContextMenu}
                            />

                        </motion.div>
                    ))}
                </div>

            </main>


        </div>
    )
}
