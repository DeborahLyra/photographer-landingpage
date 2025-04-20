import { useTranslation } from 'react-i18next';
import image from '../../public/imgs/marcusPradoImage.jpeg';

export function AboutMe() {
  const { t } = useTranslation();

  return (
    <div className="px-8 py-10 md:px-16">
      <h2 className="font-bold mb-8 text-3xl md:text-5xl text-center">{t('aboutMe.title')}</h2>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="text-justify text-base md:text-lg font-light max-w-xl">
          {t('aboutMe.text')
            .split('\n\n')
            .map((paragraph, idx) => (
              <p key={idx} className="mb-2">{paragraph}</p>
            ))}
        </div>
        <img
          src={image}
          alt="Marcus Prado"
          className="w-full m-2 max-w-lg h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
