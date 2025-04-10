
import React from 'react';
import { Menu, X, Search, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, toggleLanguage, language } = useTranslation();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if route is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-vampire-dark/90 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="vampire-container flex justify-between items-center py-4">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-vampire-bright to-vampire-blood flex items-center justify-center animate-blood-pulse group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-gothic text-2xl drop-shadow-sm">V</span>
            </div>
            <span className="text-2xl font-gothic text-vampire-bright hidden md:inline tracking-wider group-hover:text-vampire-pale transition-colors duration-300 animate-glow-pulse">
              {t('appTitle')}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <Link to="/" className={`nav-link font-medium uppercase text-sm tracking-wider ${isActive('/') ? 'active' : ''}`}>
            {t('home')}
          </Link>
          <Link to="/rules" className={`nav-link font-medium uppercase text-sm tracking-wider ${isActive('/rules') ? 'active' : ''}`}>
            {t('rules')}
          </Link>
          <Link to="/clans" className={`nav-link font-medium uppercase text-sm tracking-wider ${isActive('/clans') ? 'active' : ''}`}>
            {t('clans')}
          </Link>
          <Link to="/disciplines" className={`nav-link font-medium uppercase text-sm tracking-wider ${isActive('/disciplines') ? 'active' : ''}`}>
            {t('disciplines')}
          </Link>
          <Link to="/admin" className={`nav-link font-medium uppercase text-sm tracking-wider ${isActive('/admin') ? 'active' : ''}`}>
            {t('admin')}
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline" 
            size="sm"
            className="bg-vampire-secondary-dark/60 text-vampire-text hover:text-vampire-bright font-medium uppercase text-xs tracking-wider border border-vampire-bright/30 hover:bg-vampire-bright/10 hover:border-vampire-bright/50"
            onClick={toggleLanguage}
          >
            {language === 'ru' ? 'EN' : 'RU'}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-vampire-text hover:text-vampire-bright rounded-full w-9 h-9 p-0 flex items-center justify-center"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <Button 
            variant="ghost" 
            onClick={toggleMenu} 
            className="text-vampire-text hover:text-vampire-bright"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gradient-to-b from-vampire-dark/95 to-vampire-secondary/95 backdrop-blur-md border-b border-vampire-bright/20 animate-fade-in">
          <div className="vampire-container py-5 space-y-4">
            <Link 
              to="/" 
              className={`nav-link block uppercase text-sm font-medium ${isActive('/') ? 'active' : ''}`} 
              onClick={toggleMenu}
            >
              {t('home')}
            </Link>
            <Link 
              to="/rules" 
              className={`nav-link block uppercase text-sm font-medium ${isActive('/rules') ? 'active' : ''}`} 
              onClick={toggleMenu}
            >
              {t('rules')}
            </Link>
            <Link 
              to="/clans" 
              className={`nav-link block uppercase text-sm font-medium ${isActive('/clans') ? 'active' : ''}`} 
              onClick={toggleMenu}
            >
              {t('clans')}
            </Link>
            <Link 
              to="/disciplines" 
              className={`nav-link block uppercase text-sm font-medium ${isActive('/disciplines') ? 'active' : ''}`} 
              onClick={toggleMenu}
            >
              {t('disciplines')}
            </Link>
            <Link 
              to="/admin" 
              className={`nav-link block uppercase text-sm font-medium ${isActive('/admin') ? 'active' : ''}`} 
              onClick={toggleMenu}
            >
              {t('admin')}
            </Link>
            
            <div className="flex items-center justify-between pt-4 border-t border-vampire-bright/20">
              <Button 
                variant="outline" 
                size="sm"
                className="bg-vampire-secondary-dark/60 text-vampire-text hover:text-vampire-bright font-medium uppercase text-xs tracking-wider border border-vampire-bright/30 hover:bg-vampire-bright/10 hover:border-vampire-bright/50"
                onClick={() => {
                  toggleLanguage();
                  toggleMenu();
                }}
              >
                {language === 'ru' ? 'EN' : 'RU'}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="text-vampire-text hover:text-vampire-bright rounded-full w-9 h-9 p-0 flex items-center justify-center"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
