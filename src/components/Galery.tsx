import { useEffect, useState } from 'react'
import { supabase } from '../../supabaseClient'
import { ImageEvent } from '../types'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

interface GaleryItem {
    id: number
    title: string
    description: string
    image: string
    created_at: string
}

export function Galery() {
    const [items, setItems] = useState<GaleryItem[]>([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { t } = useTranslation()

    const titles = ['Paisagens', 'Arte', 'Mosaico']

    const handleContextMenu = (e: ImageEvent) => {
        e.preventDefault()
    }

    useEffect(() => {
        const fetchGalery = async () => {
            const { data, error } = await supabase
                .from('galery')
                .select('*')
                .in('id', ['88bf2d81-2706-4772-b048-52b27df3f5e5', '148f994a-511f-4b96-858c-790c8b2c10bc', '68dbc7e8-e2ea-4547-8f89-9e57bf08286f'])
                .order('id', { ascending: false })

            if (error) {
                console.error('Erro ao buscar galeria:', error.message)
            } else {
                setItems(data as GaleryItem[])
            }
            setLoading(false)
        }

        fetchGalery()
    }, [])

    const handleClickByIndex = (index: number) => {
        const paths = ['paisagens', 'arte', 'mosaicos']
        const selectedPath = paths[index]
        if (selectedPath) {
            navigate(`/galery/${selectedPath}`)
        }
    }

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <p>Carregando...</p>
        </div>
    )

    return (
        <div className="min-h-screen py-20 px-8 md:px-16">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {items.map((item, index) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border rounded shadow-md p-3 hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => handleClickByIndex(index)}
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