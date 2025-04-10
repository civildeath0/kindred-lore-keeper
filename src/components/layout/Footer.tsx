
import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { ExternalLink, Heart, Github, Twitter, BookOpen, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="relative bg-gradient-to-t from-vampire-dark-purple to-vampire-dark border-t border-vampire-bright/20 py-12">
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-vampire-dark-purple opacity-50"></div>
      
      <div className="vampire-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-gothic text-vampire-bright mb-4 pb-2 border-b border-vampire-bright/20 relative vampire-accent-border">
              {t('aboutTitle')}
            </h3>
            <p className="text-sm text-vampire-text/90 leading-relaxed">
              {t('aboutText')}
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-vampire-secondary-dark border border-vampire-bright/20 text-vampire-text hover:text-vampire-bright hover:border-vampire-bright/40 transition-colors duration-300">
                <Github size={16} />
              </a>
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-vampire-secondary-dark border border-vampire-bright/20 text-vampire-text hover:text-vampire-bright hover:border-vampire-bright/40 transition-colors duration-300">
                <Twitter size={16} />
              </a>
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-vampire-secondary-dark border border-vampire-bright/20 text-vampire-text hover:text-vampire-bright hover:border-vampire-bright/40 transition-colors duration-300">
                <Mail size={16} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-gothic text-vampire-bright mb-4 pb-2 border-b border-vampire-bright/20 relative vampire-accent-border">
              {t('linksTitle')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.worldofdarkness.com/" className="inline-flex items-center text-sm text-vampire-text/90 hover:text-vampire-pale transition-colors group">
                  <ExternalLink className="h-3.5 w-3.5 mr-2 text-vampire-bright/70 group-hover:text-vampire-bright/90 transition-colors" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{t('officialSite')}</span>
                </a>
              </li>
              <li>
                <a href="https://t3.livingrules.io/" className="inline-flex items-center text-sm text-vampire-text/90 hover:text-vampire-pale transition-colors group">
                  <BookOpen className="h-3.5 w-3.5 mr-2 text-vampire-bright/70 group-hover:text-vampire-bright/90 transition-colors" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{t('livingRules')}</span>
                </a>
              </li>
              <li>
                <a href="https://ttg.club/" className="inline-flex items-center text-sm text-vampire-text/90 hover:text-vampire-pale transition-colors group">
                  <ExternalLink className="h-3.5 w-3.5 mr-2 text-vampire-bright/70 group-hover:text-vampire-bright/90 transition-colors" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{t('ttgClub')}</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-gothic text-vampire-bright mb-4 pb-2 border-b border-vampire-bright/20 relative vampire-accent-border">
              {t('disclaimerTitle')}
            </h3>
            <p className="text-sm text-vampire-text/90 leading-relaxed">
              {t('disclaimerText')}
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-vampire-bright/20 text-center">
          <p className="text-xs text-vampire-text/70 flex items-center justify-center">
            © 2025 {t('vampireMasqueradeRulebook')}. {t('allRightsReserved')}
            <Heart className="h-3 w-3 mx-1 text-vampire-bright animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
