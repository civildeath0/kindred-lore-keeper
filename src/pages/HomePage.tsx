
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useTranslation } from '@/hooks/useTranslation';
import { BookOpen, Users, Droplet, ChevronRight, Bookmark, Flame, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-10 md:py-16 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-vampire-primary/5 to-transparent pointer-events-none"></div>
        <div className="vampire-container relative">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-gothic mb-6 text-vampire-primary tracking-widest leading-tight">
            {t('appTitle')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-vampire-text/90 leading-relaxed max-w-3xl mx-auto">
            {t('welcomeText')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="blood-btn text-base uppercase tracking-wider font-medium">
              <Link to="/rules" className="flex items-center gap-2">
                {t('getStarted')}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-10 vampire-container">
        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-gothic text-vampire-primary">{t('mainCategories')}</h2>
          <div className="h-0.5 bg-gradient-to-r from-vampire-primary/60 to-transparent flex-grow ml-4"></div>
        </div>
        
        <div className="ttg-grid">
          {/* Rules */}
          <div className="ttg-card">
            <div className="ttg-card-header">
              <h3 className="font-gothic text-2xl text-vampire-primary flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                {t('rules')}
              </h3>
            </div>
            <div className="ttg-card-body">
              <p className="text-vampire-text/80 mb-4">{t('rulesDescription')}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="ttg-tag">{t('basicRules')}</span>
                <span className="ttg-tag">{t('advancedRules')}</span>
                <span className="ttg-tag">{t('combatRules')}</span>
              </div>
            </div>
            <div className="ttg-card-footer">
              <Link 
                to="/rules" 
                className="inline-flex items-center text-vampire-pale hover:text-vampire-primary transition-colors group"
              >
                {t('exploreRules')}
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Clans */}
          <div className="ttg-card">
            <div className="ttg-card-header">
              <h3 className="font-gothic text-2xl text-vampire-primary flex items-center gap-2">
                <Users className="h-5 w-5" />
                {t('clans')}
              </h3>
            </div>
            <div className="ttg-card-body">
              <p className="text-vampire-text/80 mb-4">{t('clansDescription')}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="ttg-tag">Brujah</span>
                <span className="ttg-tag">Gangrel</span>
                <span className="ttg-tag">Nosferatu</span>
                <span className="ttg-tag">Toreador</span>
                <span className="ttg-tag">Ventrue</span>
              </div>
            </div>
            <div className="ttg-card-footer">
              <Link 
                to="/clans" 
                className="inline-flex items-center text-vampire-pale hover:text-vampire-primary transition-colors group"
              >
                {t('discoverClans')}
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Disciplines */}
          <div className="ttg-card">
            <div className="ttg-card-header">
              <h3 className="font-gothic text-2xl text-vampire-primary flex items-center gap-2">
                <Droplet className="h-5 w-5" />
                {t('disciplines')}
              </h3>
            </div>
            <div className="ttg-card-body">
              <p className="text-vampire-text/80 mb-4">{t('disciplinesDescription')}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="ttg-tag">Animalism</span>
                <span className="ttg-tag">Dominate</span>
                <span className="ttg-tag">Fortitude</span>
                <span className="ttg-tag">Potence</span>
                <span className="ttg-tag">Presence</span>
              </div>
            </div>
            <div className="ttg-card-footer">
              <Link 
                to="/disciplines" 
                className="inline-flex items-center text-vampire-pale hover:text-vampire-primary transition-colors group"
              >
                {t('learnDisciplines')}
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Features */}
      <section className="py-10 vampire-container">
        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-gothic text-vampire-primary">{t('featuredContent')}</h2>
          <div className="h-0.5 bg-gradient-to-r from-vampire-primary/60 to-transparent flex-grow ml-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="ttg-card">
            <div className="ttg-card-header">
              <h3 className="font-gothic text-xl text-vampire-primary flex items-center gap-2">
                <Star className="h-5 w-5" />
                {t('popularArticles')}
              </h3>
            </div>
            <div className="ttg-card-body space-y-3">
              <div className="flex items-start gap-2">
                <Bookmark className="h-4 w-4 text-vampire-primary mt-1 flex-shrink-0" />
                <span className="text-vampire-text/90">Character Creation Guide</span>
              </div>
              <div className="flex items-start gap-2">
                <Bookmark className="h-4 w-4 text-vampire-primary mt-1 flex-shrink-0" />
                <span className="text-vampire-text/90">Blood Magic System</span>
              </div>
              <div className="flex items-start gap-2">
                <Bookmark className="h-4 w-4 text-vampire-primary mt-1 flex-shrink-0" />
                <span className="text-vampire-text/90">Vampire Lineages</span>
              </div>
            </div>
          </div>
          
          <div className="ttg-card">
            <div className="ttg-card-header">
              <h3 className="font-gothic text-xl text-vampire-primary flex items-center gap-2">
                <Flame className="h-5 w-5" />
                {t('recentUpdates')}
              </h3>
            </div>
            <div className="ttg-card-body space-y-3">
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-vampire-primary mt-2 flex-shrink-0"></div>
                <span className="text-vampire-text/90">New Ventrue bloodline added</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-vampire-primary mt-2 flex-shrink-0"></div>
                <span className="text-vampire-text/90">Updated combat system rules</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-vampire-primary mt-2 flex-shrink-0"></div>
                <span className="text-vampire-text/90">New discipline mechanics</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
