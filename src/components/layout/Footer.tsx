
import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-vampire-secondary/70 backdrop-blur-lg border-t border-vampire-primary/20 py-8 mt-16">
      <div className="vampire-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="text-vampire-primary text-xl font-gothic mb-4 border-b border-vampire-primary/20 pb-2">{t('aboutTitle')}</h3>
            <p className="text-sm text-vampire-text/80 leading-relaxed">
              {t('aboutText')}
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-vampire-primary text-xl font-gothic mb-4 border-b border-vampire-primary/20 pb-2">{t('linksTitle')}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://www.worldofdarkness.com/" className="inline-flex items-center hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1 h-1 bg-vampire-primary rounded-full mr-2"></span>
                  {t('officialSite')}
                </a>
              </li>
              <li>
                <a href="https://t3.livingrules.io/" className="inline-flex items-center hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1 h-1 bg-vampire-primary rounded-full mr-2"></span>
                  {t('livingRules')}
                </a>
              </li>
              <li>
                <a href="https://ttg.club/" className="inline-flex items-center hover:translate-x-1 transition-transform duration-300">
                  <span className="w-1 h-1 bg-vampire-primary rounded-full mr-2"></span>
                  {t('ttgClub')}
                </a>
              </li>
            </ul>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h3 className="text-vampire-primary text-xl font-gothic mb-4 border-b border-vampire-primary/20 pb-2">{t('disclaimerTitle')}</h3>
            <p className="text-sm text-vampire-text/80 leading-relaxed">
              {t('disclaimerText')}
            </p>
          </div>
        </div>
        <div className="mt-10 pt-4 border-t border-vampire-primary/20 text-center text-sm text-vampire-text/60">
          <p>© 2025 {t('vampireMasqueradeRulebook')}. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
