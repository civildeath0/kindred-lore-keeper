
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { getPagesByCategory } from '@/services/pageService';
import { Page } from '@/types/page';
import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Shield, Sparkles } from 'lucide-react';

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

  return (
    <Layout>
      <div className="vampire-container">
        <div className="mb-8">
          <h1 className="page-title">{t('clansTitle')}</h1>
        </div>
        
        {loading ? (
          <div className="ttg-card p-12 flex items-center justify-center">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-4 border-vampire-primary/20 border-t-vampire-primary animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center text-vampire-primary text-sm">Loading</div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {pages.map((page, index) => (
              <article 
                key={page.id} 
                className="ttg-card overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-gradient-to-br from-vampire-primary/10 to-vampire-blood/5 p-6 flex flex-col items-center justify-center border-b md:border-r md:border-b-0 border-vampire-primary/20">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-vampire-primary/20 to-vampire-blood/10 flex items-center justify-center mb-4">
                      <Users className="text-vampire-primary" size={32} />
                    </div>
                    <h3 className="text-2xl font-gothic text-center text-vampire-primary">{page.title}</h3>
                    
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      <div className="flex items-center text-xs text-vampire-text/70">
                        <Shield className="h-3.5 w-3.5 mr-1 text-vampire-primary/70" />
                        <span>Fortitude</span>
                      </div>
                      <div className="flex items-center text-xs text-vampire-text/70">
                        <Sparkles className="h-3.5 w-3.5 mr-1 text-vampire-primary/70" />
                        <span>Presence</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4 p-6">
                    <div 
                      className="prose prose-invert max-w-none prose-headings:text-vampire-primary prose-a:text-vampire-pale text-base leading-relaxed line-clamp-4"
                      dangerouslySetInnerHTML={{ __html: page.content.substring(0, 400) + '...' }} 
                    />
                    
                    <div className="mt-6 flex justify-between items-center">
                      <Link 
                        to={`/page/${page.id}`} 
                        className="inline-flex items-center text-vampire-pale hover:text-vampire-primary transition-colors group font-medium"
                      >
                        {t('readMore')}
                        <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      
                      <span className="text-xs text-vampire-text/50 italic">
                        {t('updated')}: {new Date(page.updatedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
            
            {pages.length === 0 && (
              <div className="ttg-card p-8">
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
