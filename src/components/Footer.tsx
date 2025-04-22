import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div 
      ref={ref}
      className="w-full bg-white h-56 py-12 px-4 md:px-16 border-t border-gray-200"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8 md:mb-0"
          >
            <h3 className="font-serif text-2xl md:text-3xl mb-4">
              {t('footer.title')}
            </h3>
            <p className="font-serif text-lg text-gray-700 max-w-md">
              {t('footer.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex space-x-6 mb-6">
              {['whatsapp', 'email', 'instagram'].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                  className="text-gray-700 hover:text-black transition-colors"
                  whileHover={{ y: -3 }}
                >
                  {t(`contact.${item}`)}
                </motion.a>
              ))}
            </div>
            <p className="font-serif text-gray-600">
              © {new Date().getFullYear()} Marcus Prado. {t('footer.rights')}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}