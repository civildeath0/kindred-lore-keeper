
import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-vampire-secondary/90 backdrop-blur-sm border-t border-vampire-primary/30 py-6 mt-12">
      <div className="vampire-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-vampire-primary text-xl font-gothic mb-4">{t('aboutTitle')}</h3>
            <p className="text-sm text-vampire-text/80">
              {t('aboutText')}
            </p>
          </div>
          <div>
            <h3 className="text-vampire-primary text-xl font-gothic mb-4">{t('linksTitle')}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.worldofdarkness.com/">{t('officialSite')}</a></li>
              <li><a href="https://t3.livingrules.io/">{t('livingRules')}</a></li>
              <li><a href="https://ttg.club/">{t('ttgClub')}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-vampire-primary text-xl font-gothic mb-4">{t('disclaimerTitle')}</h3>
            <p className="text-sm text-vampire-text/80">
              {t('disclaimerText')}
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-vampire-primary/20 text-center text-sm text-vampire-text/60">
          <p>© 2025 {t('vampireMasqueradeRulebook')}. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
