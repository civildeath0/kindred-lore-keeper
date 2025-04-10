
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { getPagesByCategory } from '@/services/pageService';
import { Page } from '@/types/page';
import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Shield, Sparkles, Heart, Clock, Droplet, Skull, Crown } from 'lucide-react';

const ClansPage = () => {
  const { t } = useTranslation();
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const clansPages = await getPagesByCategory('Clans');
        setPages(clansPages);
      } catch (error) {
        console.error('Error fetching clans pages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, []);

  // Map clan names to appropriate icons
  const getClanIcon = (clanName: string) => {
    const name = clanName.toLowerCase();
    if (name.includes('ventrue')) return Crown;
    if (name.includes('nosferatu')) return Skull;
    if (name.includes('toreador')) return Heart;
    if (name.includes('brujah')) return Shield;
    if (name.includes('gangrel')) return Droplet;
    return Users;
  };

  return (
    <Layout>
      <div className="vampire-container relative">
        <div className="relative z-10 mb-12">
          <div className="flex items-center">
            <h1 className="page-title mb-0 pb-0 border-0 animate-glow-pulse">{t('clansTitle')}</h1>
          </div>
          <p className="text-lg text-vampire-text/90 mt-4 max-w-2xl">
            Explore the diverse bloodlines of the night, each with unique abilities, weaknesses, and social standings in vampire society.
          </p>
        </div>
        
        {loading ? (
          <div className="ttg-card p-12 flex items-center justify-center min-h-[50vh]">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-4 border-vampire-bright/20 border-t-vampire-bright animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center text-vampire-bright text-sm">Loading</div>
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            {pages.map((page, index) => {
              const ClanIcon = getClanIcon(page.title);
              
              return (
                <article 
                  key={page.id} 
                  className="ttg-card overflow-hidden hover:shadow-xl transition-all duration-500"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 bg-gradient-to-br from-vampire-secondary/90 to-vampire-secondary-dark/90 p-8 flex flex-col items-center justify-center border-b md:border-r md:border-b-0 border-vampire-bright/20">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-vampire-bright/20 to-vampire-blood/10 flex items-center justify-center mb-6 animate-subtle-float overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-vampire-bright/30 to-vampire-blood/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <ClanIcon className="text-vampire-bright z-10" size={48} />
                      </div>
                      
                      <h3 className="text-2xl font-gothic text-center text-vampire-bright mb-4">{page.title}</h3>
                      
                      <div className="w-12 h-1 bg-gradient-to-r from-vampire-bright/40 to-transparent rounded-full mb-4"></div>
                      
                      <div className="mt-4 flex flex-wrap justify-center gap-3">
                        <div className="blood-badge flex items-center space-x-1">
                          <Shield className="h-3 w-3 text-vampire-bright/90" />
                          <span>Fortitude</span>
                        </div>
                        <div className="blood-badge flex items-center space-x-1">
                          <Sparkles className="h-3 w-3 text-vampire-bright/90" />
                          <span>Presence</span>
                        </div>
                        <div className="blood-badge flex items-center space-x-1">
                          <Droplet className="h-3 w-3 text-vampire-bright/90" />
                          <span>Potence</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4 p-6 md:p-8">
                      <div 
                        className="prose prose-invert max-w-none prose-headings:text-vampire-bright prose-a:text-vampire-pale prose-h4:border-b prose-h4:border-vampire-bright/20 prose-h4:pb-2 text-base leading-relaxed line-clamp-4"
                        dangerouslySetInnerHTML={{ __html: page.content.substring(0, 400) + '...' }} 
                      />
                      
                      <div className="mt-8 flex justify-between items-center">
                        <Link 
                          to={`/page/${page.id}`} 
                          className="blood-btn inline-flex items-center text-white group"
                        >
                          {t('readMore')}
                          <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        
                        <div className="flex items-center text-vampire-text/60 text-sm">
                          <Clock className="h-4 w-4 mr-2 text-vampire-bright/50" />
                          <span>{new Date(page.updatedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
            
            {pages.length === 0 && (
              <div className="ttg-card p-12 text-center">
                <Skull className="w-16 h-16 text-vampire-bright/30 mx-auto mb-4" />
                <p className="text-center text-vampire-text/80 text-lg">No clan pages found.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ClansPage;
