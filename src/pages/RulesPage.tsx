
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { getPagesByCategory } from '@/services/pageService';
import { Page } from '@/types/page';
import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen } from 'lucide-react';

const RulesPage = () => {
  const { t } = useTranslation();
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const rulesPages = await getPagesByCategory('Rules');
        setPages(rulesPages);
      } catch (error) {
        console.error('Error fetching rules pages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="h-10 w-1 bg-gradient-to-b from-vampire-primary to-vampire-blood rounded-full mr-4"></div>
          <h1 className="page-title mb-0 pb-0 border-0">{t('rulesTitle')}</h1>
        </div>
        
        {loading ? (
          <div className="content-section flex items-center justify-center min-h-[30vh]">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full bg-vampire-primary/20 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center text-vampire-primary">Loading...</div>
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            {pages.map((page, index) => (
              <article 
                key={page.id} 
                className="content-section p-6 md:p-8 hover:shadow-blood transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="hidden md:flex h-12 w-12 rounded-full bg-gradient-to-br from-vampire-primary/20 to-vampire-blood/30 items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="text-vampire-primary" size={20} />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-3xl font-gothic mb-4 text-vampire-primary hover:text-vampire-primary/80 transition-colors duration-300">
                      <Link to={`/page/${page.id}`} className="hover:no-underline block">
                        {page.title}
                      </Link>
                    </h2>
                    
                    <div 
                      className="prose prose-invert max-w-none prose-headings:text-vampire-primary prose-a:text-vampire-pale text-base md:text-lg leading-relaxed line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: page.content.substring(0, 500) + '...' }} 
                    />
                    
                    <div className="mt-6">
                      <Link 
                        to={`/page/${page.id}`} 
                        className="inline-flex items-center text-vampire-pale hover:text-vampire-primary transition-colors duration-300 group"
                      >
                        {t('readMore')}
                        <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
            
            {pages.length === 0 && (
              <div className="content-section p-8">
                <p className="text-center text-vampire-text/80 text-lg">No rule pages found.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default RulesPage;
