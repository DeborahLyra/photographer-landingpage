import { motion } from "framer-motion";
import image from '../../public/imgs/bannerImg.jpeg'

interface ImageEvent extends React.MouseEvent<HTMLImageElement> {
    preventDefault: () => void;
}

export function Banner() {
    const handleContextMenu = (e: ImageEvent) => {
        e.preventDefault(); 
    };

    return (
        <>
            <div className="w-full flex justify-center items-center h-32 md:h-64">
                <motion.h1
                    className="font-medium text-4xl md:text-8xl text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    MARCUS PRADO
                </motion.h1>
            </div>

            <div className="w-full relative">
                <img 
                src={image} 
                alt="cidade de olinda e idoso" 
                className="w-full h-[550px]"
                onContextMenu={handleContextMenu} 
                 />

                <div className="absolute bottom-2 right-2 text-white text-sm opacity-50 pointer-events-none select-none">
                    © Marcus Prado
                </div>
            </div>
        </>
    );
}
