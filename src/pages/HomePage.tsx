
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useTranslation } from '@/hooks/useTranslation';
import { BookOpen, Users, Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-gothic mb-6 text-vampire-primary animate-blood-pulse inline-block">
            {t('appTitle')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-vampire-text">
            {t('welcomeText')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="blood-btn">
              <Link to="/rules">{t('getStarted')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Rules */}
          <div className="content-section flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-vampire-primary/20 flex items-center justify-center mb-4">
              <BookOpen className="text-vampire-primary" size={32} />
            </div>
            <h2 className="text-2xl font-gothic mb-4">{t('rules')}</h2>
            <p className="mb-6 text-vampire-text/80">
              {t('basicRules')} • {t('advancedRules')} • {t('combatRules')}
            </p>
            <Button asChild variant="outline" className="mt-auto">
              <Link to="/rules">{t('exploreRules')}</Link>
            </Button>
          </div>

          {/* Clans */}
          <div className="content-section flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-vampire-primary/20 flex items-center justify-center mb-4">
              <Users className="text-vampire-primary" size={32} />
            </div>
            <h2 className="text-2xl font-gothic mb-4">{t('clans')}</h2>
            <p className="mb-6 text-vampire-text/80">
              {t('clansDescription')}
            </p>
            <Button asChild variant="outline" className="mt-auto">
              <Link to="/clans">{t('discoverClans')}</Link>
            </Button>
          </div>

          {/* Disciplines */}
          <div className="content-section flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-vampire-primary/20 flex items-center justify-center mb-4">
              <Droplet className="text-vampire-primary" size={32} />
            </div>
            <h2 className="text-2xl font-gothic mb-4">{t('disciplines')}</h2>
            <p className="mb-6 text-vampire-text/80">
              {t('disciplinesDescription')}
            </p>
            <Button asChild variant="outline" className="mt-auto">
              <Link to="/disciplines">{t('learnDisciplines')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
