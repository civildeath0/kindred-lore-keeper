
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { getPageById } from '@/services/pageService';
import { Page } from '@/types/page';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Edit, Clock } from 'lucide-react';

const PageDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [page, setPage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      if (!id) return;
      
      try {
        const fetchedPage = await getPageById(id);
        setPage(fetchedPage);
      } catch (error) {
        console.error('Error fetching page:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <Layout>
        <div className="content-section flex items-center justify-center min-h-[30vh]">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full bg-vampire-primary/20 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center text-vampire-primary">Loading...</div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!page) {
    return (
      <Layout>
        <div className="content-section">
          <h1 className="page-title text-center">{t('notFound')}</h1>
          <p className="text-center mb-6 text-lg">{t('errorOccurred')}</p>
          <div className="flex justify-center">
            <Button onClick={() => navigate(-1)} className="blood-btn">
              <ArrowLeft className="mr-2" size={16} />
              {t('goBack')}
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mb-8 flex flex-wrap justify-between items-center">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="text-vampire-text hover:text-vampire-primary group"
        >
          <ArrowLeft className="mr-2 group-hover:translate-x-[-2px] transition-transform duration-300" size={18} />
          {t('goBack')}
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => navigate(`/admin/edit/${page.id}`)}
          className="text-vampire-text hover:text-vampire-primary border-vampire-primary/30 hover:border-vampire-primary/70 hover:bg-vampire-primary/10"
        >
          <Edit className="mr-2" size={16} />
          {t('editPage')}
        </Button>
      </div>
      
      <article className="content-section p-8 shadow-xl">
        <h1 className="page-title tracking-wide leading-tight">{page.title}</h1>
        
        <div className="flex items-center text-sm text-vampire-text/60 mb-8 border-b border-vampire-primary/10 pb-4">
          <Clock size={16} className="mr-2 text-vampire-primary/70" />
          <span>
            {t('updated')}: {formatDate(page.updatedAt)}
          </span>
        </div>
        
        <div 
          className="prose prose-invert max-w-none prose-headings:text-vampire-primary prose-headings:font-gothic prose-a:text-vampire-pale prose-a:transition-colors prose-a:duration-300 prose-img:rounded-md prose-img:shadow-lg prose-strong:text-vampire-pale/90 prose-li:marker:text-vampire-primary/70 prose-hr:border-vampire-primary/30 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: page.content }} 
        />
      </article>
    </Layout>
  );
};

export default PageDetailPage;
