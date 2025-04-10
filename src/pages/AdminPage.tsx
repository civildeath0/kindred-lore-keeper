
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useTranslation } from '@/hooks/useTranslation';
import { getAllPages, deletePage } from '@/services/pageService';
import { Page } from '@/types/page';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Clock } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const AdminPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const allPages = await getAllPages();
        setPages(allPages);
      } catch (error) {
        console.error('Error fetching pages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm(t('confirmDelete'))) {
      setDeletingId(id);
      try {
        await deletePage(id);
        setPages(pages.filter(page => page.id !== id));
        toast({
          title: t('successDelete'),
          variant: 'default',
        });
      } catch (error) {
        console.error('Error deleting page:', error);
      } finally {
        setDeletingId(null);
      }
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-gothic text-vampire-primary">{t('adminTitle')}</h1>
        <Button onClick={() => navigate('/admin/create')} className="blood-btn">
          <Plus className="mr-2" size={16} />
          {t('createPage')}
        </Button>
      </div>
      
      <p className="mb-8 text-vampire-text/80">
        {t('adminDescription')}
      </p>
      
      <div className="content-section">
        <h2 className="text-2xl font-gothic mb-4 text-vampire-primary">All Pages</h2>
        
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="text-vampire-primary">Loading...</div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-vampire-primary/30">
                  <th className="py-3 text-left text-vampire-text">Title</th>
                  <th className="py-3 text-left text-vampire-text">Category</th>
                  <th className="py-3 text-left text-vampire-text">Updated</th>
                  <th className="py-3 text-right text-vampire-text">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pages.map(page => (
                  <tr key={page.id} className="border-b border-vampire-primary/10 hover:bg-vampire-secondary/50">
                    <td className="py-3">
                      <Link to={`/page/${page.id}`} className="text-vampire-pale hover:text-vampire-primary">
                        {page.title}
                      </Link>
                    </td>
                    <td className="py-3">{page.category}</td>
                    <td className="py-3 flex items-center">
                      <Clock size={14} className="mr-1 text-vampire-text/60" />
                      <span className="text-vampire-text/60">{formatDate(page.updatedAt)}</span>
                    </td>
                    <td className="py-3 text-right">
                      <div className="flex justify-end space-x-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => navigate(`/admin/edit/${page.id}`)}
                          className="text-vampire-text hover:text-vampire-primary"
                        >
                          <Edit size={16} />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDelete(page.id)}
                          disabled={deletingId === page.id}
                          className="text-vampire-text hover:text-vampire-primary/80"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
                
                {pages.length === 0 && (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-vampire-text/60">
                      No pages found. Start by creating a new page.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AdminPage;
