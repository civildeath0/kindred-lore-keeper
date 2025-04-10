
import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, toggleLanguage, language } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-vampire-secondary/90 backdrop-blur-sm border-b border-vampire-primary/30 sticky top-0 z-50">
      <div className="vampire-container flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-vampire-primary flex items-center justify-center animate-blood-pulse">
              <span className="text-white font-gothic text-xl">V</span>
            </div>
            <span className="text-2xl font-gothic text-vampire-primary hidden md:inline">
              {t('appTitle')}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="nav-link">{t('home')}</Link>
          <Link to="/rules" className="nav-link">{t('rules')}</Link>
          <Link to="/clans" className="nav-link">{t('clans')}</Link>
          <Link to="/disciplines" className="nav-link">{t('disciplines')}</Link>
          <Link to="/admin" className="nav-link">{t('admin')}</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className="text-vampire-text hover:text-vampire-primary"
            onClick={toggleLanguage}
          >
            {language === 'ru' ? 'EN' : 'RU'}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <Button 
            variant="ghost" 
            onClick={toggleMenu} 
            className="text-vampire-text hover:text-vampire-primary"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-vampire-secondary/95 backdrop-blur-sm border-b border-vampire-primary/30 animate-fade-in">
          <div className="vampire-container py-4 space-y-3">
            <Link to="/" className="nav-link block" onClick={toggleMenu}>{t('home')}</Link>
            <Link to="/rules" className="nav-link block" onClick={toggleMenu}>{t('rules')}</Link>
            <Link to="/clans" className="nav-link block" onClick={toggleMenu}>{t('clans')}</Link>
            <Link to="/disciplines" className="nav-link block" onClick={toggleMenu}>{t('disciplines')}</Link>
            <Link to="/admin" className="nav-link block" onClick={toggleMenu}>{t('admin')}</Link>
            <Button 
              variant="ghost" 
              className="text-vampire-text hover:text-vampire-primary block"
              onClick={() => {
                toggleLanguage();
                toggleMenu();
              }}
            >
              {language === 'ru' ? 'EN' : 'RU'}
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
