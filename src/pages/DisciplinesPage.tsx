
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { getPagesByCategory } from '@/services/pageService';
import { Page } from '@/types/page';
import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'react-router-dom';

const DisciplinesPage = () => {
  const { t } = useTranslation();
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const disciplinesPages = await getPagesByCategory('Disciplines');
        setPages(disciplinesPages);
      } catch (error) {
        console.error('Error fetching disciplines pages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, []);

  return (
    <Layout>
      <h1 className="page-title">{t('disciplinesTitle')}</h1>
      
      {loading ? (
        <div className="content-section flex items-center justify-center">
          <div className="text-vampire-primary">Loading...</div>
        </div>
      ) : (
        <div className="space-y-8">
          {pages.map((page) => (
            <article key={page.id} className="content-section">
              <h2 className="text-3xl font-gothic mb-4 text-vampire-primary">
                <Link to={`/page/${page.id}`} className="hover:underline">
                  {page.title}
                </Link>
              </h2>
              <div 
                className="prose prose-invert max-w-none prose-headings:text-vampire-primary prose-a:text-vampire-pale"
                dangerouslySetInnerHTML={{ __html: page.content.substring(0, 500) + '...' }} 
              />
              <div className="mt-4">
                <Link 
                  to={`/page/${page.id}`} 
                  className="text-vampire-pale hover:text-vampire-primary"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
          
          {pages.length === 0 && (
            <div className="content-section">
              <p className="text-center text-vampire-text/80">No discipline pages found.</p>
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

export default DisciplinesPage;
