import { useEffect, useState } from 'react'
import { supabase } from '../../supabaseClient'
import { GaleryItem, ImageEvent } from '../types'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export function Galery() {
    const [items, setItems] = useState<GaleryItem[]>([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { t } = useTranslation()

    const titles = ['Arte', 'Mosaico', 'Paisagem', 'Urbano']

    const handleContextMenu = (e: ImageEvent) => {
        e.preventDefault()
    }

    useEffect(() => {
        const fetchGalery = async () => {
            const { data, error } = await supabase
                .from('galery')
                .select('*')
                .in('id', ['f64e8d61-32c2-4d00-9c74-c666576dafc3', 'b19298ae-e119-4ea7-a02a-9defb166e9d9', 'ec2b6243-9058-4b9c-8206-f53cbdce2deb', '76dc8526-3b1f-4dad-81e7-bcd301458992'])
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

    const handleClickByIndex = (photoType : string) => {

        return navigate(`/galeria`, { state: { photoType } })

    }

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <p>Carregando...</p>
        </div>
    )

    return (
        <div className="min-h-screen py-20 px-8 md:px-16" id='projects'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center mb-16"
            >
                <h2 className="font-serif text-4xl md:text-6xl mb-4 text-black">
                    {t('galery.title') || "Galeria"}
                </h2>
                <div className="w-24 h-1 bg-black mx-auto"></div>
                <p className="font-serif mt-8 text-lg">{t('galery.subtitle')}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-4 p-4">
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border rounded shadow-md p-3 hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => handleClickByIndex(item.description)}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover rounded"
                            onContextMenu={handleContextMenu}
                        />
                        <h2 className="text-xl font-bold mt-2">{titles[index]}</h2>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}