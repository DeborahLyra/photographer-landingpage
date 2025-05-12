import { motion } from "framer-motion";
import image from '../../public/imgs/bannerImg.jpeg'
import { ImageEvent } from "../types";

export function Banner() {
    const handleContextMenu = (e: ImageEvent) => {
        e.preventDefault(); 
    };

    return (
        <>
            <div className="w-full flex justify-center items-center h-32 md:h-64">
                <motion.h1
                    className="font-serif font-medium text-4xl md:text-8xl text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    MARCUS PRADO
                </motion.h1>
            </div>

            <div className="w-full">
                <img 
                src={image} 
                alt="cidade de olinda e idoso" 
                className="w-full h-[350px] md:h-[550px]"
                onContextMenu={handleContextMenu} 
                 />
            </div>
        </>
    );
}
