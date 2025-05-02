'use client'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import logo from "../../public/imgs/logoMarcus.png";
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigate = (section: string) => {
    setMobileMenuOpen(false);
    navigate('/', { state: { scrollTo: section } });
  };

  return (
    <header className="bg-[#f5f1e6] border-b-2 border-black">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a onClick={() => handleNavigate('')} className="-m-1.5 p-1.5 cursor-pointer">
            <span className="sr-only">Marcus</span>
            <img
              src={logo}
              alt="Marcus Prado Logo"
              className='h-24'
            />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Abrir menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a onClick={() => handleNavigate('aboutMe')} className="cursor-pointer text-md font-light text-gray-900 hover:text-gray-500 transition-colors">
            {t('navbar.about')}
          </a>
          <a onClick={() => handleNavigate('manifesto')} className="cursor-pointer text-md font-light text-gray-900 hover:text-gray-500 transition-colors">
            {t('navbar.exp')}
          </a>
          <a onClick={() => handleNavigate('projects')} className="cursor-pointer text-md font-light text-gray-900 hover:text-gray-500 transition-colors">
            {t('navbar.proj')}
          </a>
          <a onClick={() => handleNavigate('contact')} className="cursor-pointer text-md font-light text-gray-900 hover:text-gray-500 transition-colors">
            {t('navbar.con')}
          </a>

          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={() => i18n.changeLanguage('pt')}
              className={`text-sm px-3 py-1 rounded-full transition-all border-2 shadow-md ${i18n.language === 'pt'
                ? 'bg-black text-white'
                : 'bg-white/10 text-black border-black'
                }`}
            >
              Português
            </button>
            <button
              onClick={() => i18n.changeLanguage('en')}
              className={`text-sm px-3 py-1 rounded-full transition-all border-2 shadow-md ${i18n.language === 'en'
                ? 'bg-black text-white'
                : 'bg-white/10 text-black border-black'
                }`}
            >
              English
            </button>
          </div>
        </PopoverGroup>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Fechar menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  onClick={() => handleNavigate('aboutMe')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-light text-gray-900 hover:bg-white/20 hover:text-gray-500 cursor-pointer"
                >
                  {t('navbar.about')}
                </a>
                <a
                  onClick={() => handleNavigate('manifesto')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-light text-gray-900 hover:bg-white/20 hover:text-gray-500 cursor-pointer"
                >
                  {t('navbar.exp')}
                </a>
                <a
                  onClick={() => handleNavigate('projects')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-light text-gray-900 hover:bg-white/20 hover:text-gray-500 cursor-pointer"
                >
                  {t('navbar.proj')}
                </a>
                <a
                  onClick={() => handleNavigate('contact')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-light text-gray-900 hover:bg-white/20 hover:text-gray-500 cursor-pointer"
                >
                  {t('navbar.con')}
                </a>

                <div className="flex gap-2 pt-4">
                  <button
                    onClick={() => {
                      i18n.changeLanguage('pt');
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-center px-3 py-2 rounded-lg ${i18n.language === 'pt' ? 'bg-black text-white' : 'text-gray-900 hover:bg-white/20 hover:text-white'}`}
                  >
                    Português
                  </button>
                  <button
                    onClick={() => {
                      i18n.changeLanguage('en');
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-center px-3 py-2 rounded-lg ${i18n.language === 'en' ? 'bg-black text-white' : 'text-gray-900 hover:bg-white/20 hover:text-white'}`}
                  >
                    English
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
