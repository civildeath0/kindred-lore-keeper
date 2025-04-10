
import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-vampire-secondary border-t border-vampire-primary/30 py-8">
      <div className="vampire-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-gothic text-vampire-primary mb-4 pb-2 border-b border-vampire-primary/20">{t('aboutTitle')}</h3>
            <p className="text-sm text-vampire-text/80 leading-relaxed">
              {t('aboutText')}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-gothic text-vampire-primary mb-4 pb-2 border-b border-vampire-primary/20">{t('linksTitle')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.worldofdarkness.com/" className="inline-flex items-center text-sm text-vampire-text/80 hover:text-vampire-pale transition-colors">
                  <ExternalLink className="h-3.5 w-3.5 mr-2 text-vampire-primary/70" />
                  {t('officialSite')}
                </a>
              </li>
              <li>
                <a href="https://t3.livingrules.io/" className="inline-flex items-center text-sm text-vampire-text/80 hover:text-vampire-pale transition-colors">
                  <ExternalLink className="h-3.5 w-3.5 mr-2 text-vampire-primary/70" />
                  {t('livingRules')}
                </a>
              </li>
              <li>
                <a href="https://ttg.club/" className="inline-flex items-center text-sm text-vampire-text/80 hover:text-vampire-pale transition-colors">
                  <ExternalLink className="h-3.5 w-3.5 mr-2 text-vampire-primary/70" />
                  {t('ttgClub')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-gothic text-vampire-primary mb-4 pb-2 border-b border-vampire-primary/20">{t('disclaimerTitle')}</h3>
            <p className="text-sm text-vampire-text/80 leading-relaxed">
              {t('disclaimerText')}
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-vampire-primary/20 text-center">
          <p className="text-xs text-vampire-text/60 flex items-center justify-center">
            © 2025 {t('vampireMasqueradeRulebook')}. {t('allRightsReserved')}
            <Heart className="h-3 w-3 mx-1 text-vampire-primary animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
