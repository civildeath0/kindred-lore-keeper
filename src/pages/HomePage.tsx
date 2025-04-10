
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useTranslation } from '@/hooks/useTranslation';
import { BookOpen, Users, Droplet, ChevronRight, Bookmark, Flame, Star, Shield, ScrollText, PenTool, Eye, Clock, Skull } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-vampire-bright/5 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/bg-texture.png')] bg-repeat opacity-20 pointer-events-none"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-24 h-24 rounded-full bg-vampire-bright/5 animate-subtle-float" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-vampire-bright/5 animate-subtle-float" style={{ animationDelay: "1.2s" }}></div>
        
        <div className="vampire-container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-gothic mb-6 text-vampire-bright tracking-widest leading-tight animate-glow-pulse">
                {t('appTitle')}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-vampire-text/90 leading-relaxed max-w-xl">
                {t('welcomeText')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="blood-btn text-base uppercase tracking-wider font-medium">
                  <Link to="/rules" className="flex items-center gap-2">
                    {t('getStarted')}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="bg-vampire-secondary-dark/60 text-vampire-text hover:text-vampire-bright uppercase tracking-wider font-medium border-vampire-bright/30 hover:bg-vampire-bright/10 hover:border-vampire-bright/50"
                >
                  <Link to="/clans" className="flex items-center gap-2">
                    {t('exploreClans')}
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-br from-vampire-bright/20 to-vampire-blood/10 rounded-lg opacity-50 blur-2xl"></div>
              <div className="relative vampire-card p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="feature-icon-wrapper">
                      <Skull className="feature-icon" size={28} />
                    </div>
                    <h3 className="font-gothic text-xl text-vampire-bright">Nosferatu</h3>
                    <p className="text-sm text-vampire-text/80">Masters of secrets and shadows.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="feature-icon-wrapper">
                      <Eye className="feature-icon" size={28} />
                    </div>
                    <h3 className="font-gothic text-xl text-vampire-bright">Auspex</h3>
                    <p className="text-sm text-vampire-text/80">Enhanced senses and perception.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="feature-icon-wrapper">
                      <Shield className="feature-icon" size={28} />
                    </div>
                    <h3 className="font-gothic text-xl text-vampire-bright">Fortitude</h3>
                    <p className="text-sm text-vampire-text/80">Supernatural resilience and endurance.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="feature-icon-wrapper">
                      <Droplet className="feature-icon" size={28} />
                    </div>
                    <h3 className="font-gothic text-xl text-vampire-bright">Blood Magic</h3>
                    <p className="text-sm text-vampire-text/80">Master the power of vitae.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-16 vampire-container">
        <div className="flex items-center mb-10">
          <h2 className="text-3xl font-gothic text-vampire-bright">{t('mainCategories')}</h2>
          <div className="h-0.5 bg-gradient-to-r from-vampire-bright/60 to-transparent flex-grow ml-4"></div>
        </div>
        
        <div className="ttg-grid">
          {/* Rules */}
          <div className="ttg-card group">
            <div className="ttg-card-header">
              <h3 className="font-gothic text-2xl text-vampire-bright flex items-center gap-2">
                <ScrollText className="h-5 w-5" />
                {t('rules')}
              </h3>
            </div>
            <div className="ttg-card-body">
              <p className="text-vampire-text/80 mb-4">{t('rulesDescription')}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="blood-badge">{t('basicRules')}</span>
                <span className="blood-badge">{t('advancedRules')}</span>
                <span className="blood-badge">{t('combatRules')}</span>
              </div>
            </div>
            <div className="ttg-card-footer">
              <Link 
                to="/rules" 
                className="inline-flex items-center text-vampire-pale hover:text-vampire-bright transition-colors group"
              >
                {t('exploreRules')}
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Clans */}
          <div className="ttg-card group">
            <div className="ttg-card-header">
              <h3 className="font-gothic text-2xl text-vampire-bright flex items-center gap-2">
                <Users className="h-5 w-5" />
                {t('clans')}
              </h3>
            </div>
            <div className="ttg-card-body">
              <p className="text-vampire-text/80 mb-4">{t('clansDescription')}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="blood-badge">Brujah</span>
                <span className="blood-badge">Gangrel</span>
                <span className="blood-badge">Nosferatu</span>
                <span className="blood-badge">Toreador</span>
                <span className="blood-badge">Ventrue</span>
              </div>
            </div>
            <div className="ttg-card-footer">
              <Link 
                to="/clans" 
                className="inline-flex items-center text-vampire-pale hover:text-vampire-bright transition-colors group"
              >
                {t('discoverClans')}
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Disciplines */}
          <div className="ttg-card group">
            <div className="ttg-card-header">
              <h3 className="font-gothic text-2xl text-vampire-bright flex items-center gap-2">
                <Droplet className="h-5 w-5" />
                {t('disciplines')}
              </h3>
            </div>
            <div className="ttg-card-body">
              <p className="text-vampire-text/80 mb-4">{t('disciplinesDescription')}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="blood-badge">Animalism</span>
                <span className="blood-badge">Dominate</span>
                <span className="blood-badge">Fortitude</span>
                <span className="blood-badge">Potence</span>
                <span className="blood-badge">Presence</span>
              </div>
            </div>
            <div className="ttg-card-footer">
              <Link 
                to="/disciplines" 
                className="inline-flex items-center text-vampire-pale hover:text-vampire-bright transition-colors group"
              >
                {t('learnDisciplines')}
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Features */}
      <section className="py-16 vampire-container relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-vampire-dark-purple/30 pointer-events-none"></div>
        
        <div className="flex items-center mb-10 relative">
          <h2 className="text-3xl font-gothic text-vampire-bright">{t('featuredContent')}</h2>
          <div className="h-0.5 bg-gradient-to-r from-vampire-bright/60 to-transparent flex-grow ml-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          <div className="ttg-card backdrop-blur-sm hover:translate-y-[-5px] transition-all duration-300">
            <div className="ttg-card-header">
              <h3 className="font-gothic text-xl text-vampire-bright flex items-center gap-2">
                <Star className="h-5 w-5" />
                {t('popularArticles')}
              </h3>
            </div>
            <div className="ttg-card-body space-y-4">
              <div className="flex items-start gap-3 group p-2 hover:bg-vampire-bright/5 rounded-lg transition-colors">
                <PenTool className="h-5 w-5 text-vampire-bright/70 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-vampire-pale group-hover:text-vampire-bright transition-colors">Character Creation Guide</h4>
                  <p className="text-sm text-vampire-text/80 mt-1">Comprehensive guide to creating your first character.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group p-2 hover:bg-vampire-bright/5 rounded-lg transition-colors">
                <Droplet className="h-5 w-5 text-vampire-bright/70 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-vampire-pale group-hover:text-vampire-bright transition-colors">Blood Magic System</h4>
                  <p className="text-sm text-vampire-text/80 mt-1">Explore the arcane powers of blood rituals and sorcery.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group p-2 hover:bg-vampire-bright/5 rounded-lg transition-colors">
                <Users className="h-5 w-5 text-vampire-bright/70 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-vampire-pale group-hover:text-vampire-bright transition-colors">Vampire Lineages</h4>
                  <p className="text-sm text-vampire-text/80 mt-1">Discover the ancient bloodlines and their unique traits.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="ttg-card backdrop-blur-sm hover:translate-y-[-5px] transition-all duration-300">
            <div className="ttg-card-header">
              <h3 className="font-gothic text-xl text-vampire-bright flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {t('recentUpdates')}
              </h3>
            </div>
            <div className="ttg-card-body space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-vampire-bright mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-vampire-text/90">New Ventrue bloodline added</p>
                  <p className="text-xs text-vampire-text/60 mt-1">4 days ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-vampire-bright mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-vampire-text/90">Updated combat system rules</p>
                  <p className="text-xs text-vampire-text/60 mt-1">2 weeks ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-vampire-bright mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-vampire-text/90">New discipline mechanics</p>
                  <p className="text-xs text-vampire-text/60 mt-1">3 weeks ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-vampire-dark-purple to-vampire-dark relative">
        <div className="absolute inset-0 bg-[url('/bg-texture.png')] bg-repeat opacity-10"></div>
        <div className="vampire-container text-center relative">
          <h2 className="text-4xl font-gothic text-vampire-bright mb-6 drop-shadow-glow">Join the Night</h2>
          <p className="text-lg text-vampire-text/90 max-w-2xl mx-auto mb-8">
            Explore the darkness, master ancient powers, and navigate the complex politics of the undead society.
          </p>
          <Button asChild className="blood-btn text-base uppercase tracking-wider font-medium px-8 py-3">
            <Link to="/rules">
              Begin Your Journey
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
