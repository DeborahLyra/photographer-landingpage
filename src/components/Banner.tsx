import { motion } from "framer-motion";
import image from '../../public/imgs/bannerImg.jpeg'

export function Banner() {
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
            <div>
                <img src={image} 
                alt="cidade de olinda e idoso" 
                className="w-full h-[550px]"
                />
            </div>
        </>
    );
}
