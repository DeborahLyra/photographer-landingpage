import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

export function ArtisticManifesto() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div 
      ref={ref}
      className="min-h-screen bg-[#f5f1e6] py-20 px-4 md:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-6xl mb-4">
          {t('artisticManifesto.title')}
        </h2>
        <div className="w-24 h-1 bg-black mx-auto"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-4xl mx-auto"
      >
        {t('artisticManifesto.text')
          .split('\n\n')
          .map((paragraph, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * idx }}
              className={`font-serif text-lg text-justify md:text-xl mb-6 tracking-wide ${
                paragraph.startsWith("NA FOTOGRAFIA") || 
                paragraph.startsWith("INSPIRO-ME") || 
                paragraph.startsWith("MINHA PAISAGEM") || 
                paragraph.startsWith("PROCURO DAR") || 
                paragraph.startsWith("FAÇO VALER") ? 
                "font-medium " : 
                "font-light"
              }`}
            >
              {paragraph}
            </motion.p>
          ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
        className="mt-20 text-center"
      >
        <div className="inline-block border-t border-black pt-4">
          <p className="font-serif italic">
            {t('artisticManifesto.signature', { defaultValue: "Marcus Prado" })}
          </p>
        </div>
      </motion.div>
    </div>
  );
}