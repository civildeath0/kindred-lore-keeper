
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { getPageById } from '@/services/pageService';
import { Page } from '@/types/page';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Edit } from 'lucide-react';

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
        <div className="content-section flex items-center justify-center">
          <div className="text-vampire-primary">Loading...</div>
        </div>
      </Layout>
    );
  }

  if (!page) {
    return (
      <Layout>
        <div className="content-section">
          <h1 className="page-title text-center">{t('notFound')}</h1>
          <p className="text-center mb-6">{t('errorOccurred')}</p>
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
      <div className="mb-6 flex flex-wrap justify-between items-center">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="text-vampire-text hover:text-vampire-primary"
        >
          <ArrowLeft className="mr-2" size={16} />
          {t('goBack')}
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => navigate(`/admin/edit/${page.id}`)}
          className="text-vampire-text hover:text-vampire-primary"
        >
          <Edit className="mr-2" size={16} />
          {t('editPage')}
        </Button>
      </div>
      
      <article className="content-section">
        <h1 className="page-title">{page.title}</h1>
        
        <div className="flex items-center text-sm text-vampire-text/60 mb-6">
          <Calendar size={14} className="mr-1" />
          <span>
            {t('updated')}: {formatDate(page.updatedAt)}
          </span>
        </div>
        
        <div 
          className="prose prose-invert max-w-none prose-headings:text-vampire-primary prose-a:text-vampire-pale"
          dangerouslySetInnerHTML={{ __html: page.content }} 
        />
      </article>
    </Layout>
  );
};

export default PageDetailPage;
