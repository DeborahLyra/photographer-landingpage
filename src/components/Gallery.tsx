import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ImageEvent } from '../types'

export function Gallery() {
    const navigate = useNavigate()
    const { t } = useTranslation()

    const handleContextMenu = (e: ImageEvent) => {
        e.preventDefault()
    }

    const handleClick = (image: string) => {
        return navigate(`/galeria`, { state: { image } })
    }

    const imageFilenames = [
        
        'foto_2.jpeg',
        'foto_23.jpeg',
        'foto_49.jpeg',
        'foto_52.jpeg',
    ]

    return (
        <div className="min-h-screen py-20 px-8 md:px-16" id='projects'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center mb-16"
            >
                <h2 className="font-medium text-4xl md:text-6xl mb-4 text-black">
                    {t('galery.title') || "Galeria"}
                </h2>
                <div className="w-24 h-1 bg-black mx-auto"></div>
                <p className=" mt-8 text-lg">{t('galery.subtitle')}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                {imageFilenames.map((filename, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border rounded shadow-md p-3 hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => handleClick(filename)}
                    >
                        <img
                            src={`/assets/gallery/${filename}`}
                            alt={`Imagem ${index + 1}`}
                            className="w-full h-80 object-cover rounded"
                            onContextMenu={handleContextMenu}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
