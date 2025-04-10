
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useTranslation } from '@/hooks/useTranslation';
import { BookOpen, Users, Droplet, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-gothic mb-8 text-vampire-primary animate-blood-pulse inline-block tracking-wide leading-tight">
            {t('appTitle')}
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-vampire-text/90 leading-relaxed max-w-2xl mx-auto">
            {t('welcomeText')}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild className="blood-btn text-base">
              <Link to="/rules" className="flex items-center gap-2">
                {t('getStarted')}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Rules */}
          <div className="content-section flex flex-col items-center text-center group hover:translate-y-[-4px] transition-all duration-300">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-vampire-primary/20 to-vampire-blood/30 flex items-center justify-center mb-6 group-hover:shadow-blood transition-all duration-300">
              <BookOpen className="text-vampire-primary" size={36} />
            </div>
            <h2 className="text-2xl font-gothic mb-4 tracking-wide">{t('rules')}</h2>
            <p className="mb-6 text-vampire-text/80 leading-relaxed">
              {t('basicRules')} • {t('advancedRules')} • {t('combatRules')}
            </p>
            <Button 
              asChild 
              variant="outline" 
              className="mt-auto border-vampire-primary/30 hover:border-vampire-primary/70 hover:bg-vampire-primary/10 text-vampire-pale"
            >
              <Link to="/rules" className="flex items-center gap-2">
                {t('exploreRules')}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Clans */}
          <div className="content-section flex flex-col items-center text-center group hover:translate-y-[-4px] transition-all duration-300">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-vampire-primary/20 to-vampire-blood/30 flex items-center justify-center mb-6 group-hover:shadow-blood transition-all duration-300">
              <Users className="text-vampire-primary" size={36} />
            </div>
            <h2 className="text-2xl font-gothic mb-4 tracking-wide">{t('clans')}</h2>
            <p className="mb-6 text-vampire-text/80 leading-relaxed">
              {t('clansDescription')}
            </p>
            <Button 
              asChild 
              variant="outline" 
              className="mt-auto border-vampire-primary/30 hover:border-vampire-primary/70 hover:bg-vampire-primary/10 text-vampire-pale"
            >
              <Link to="/clans" className="flex items-center gap-2">
                {t('discoverClans')}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Disciplines */}
          <div className="content-section flex flex-col items-center text-center group hover:translate-y-[-4px] transition-all duration-300">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-vampire-primary/20 to-vampire-blood/30 flex items-center justify-center mb-6 group-hover:shadow-blood transition-all duration-300">
              <Droplet className="text-vampire-primary" size={36} />
            </div>
            <h2 className="text-2xl font-gothic mb-4 tracking-wide">{t('disciplines')}</h2>
            <p className="mb-6 text-vampire-text/80 leading-relaxed">
              {t('disciplinesDescription')}
            </p>
            <Button 
              asChild 
              variant="outline" 
              className="mt-auto border-vampire-primary/30 hover:border-vampire-primary/70 hover:bg-vampire-primary/10 text-vampire-pale"
            >
              <Link to="/disciplines" className="flex items-center gap-2">
                {t('learnDisciplines')}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
