
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import RichTextEditor from '@/components/editor/RichTextEditor';
import { getPageById, updatePage } from '@/services/pageService';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const EditPagePage = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchPage = async () => {
      if (!id) return;
      
      try {
        const page = await getPageById(id);
        if (page) {
          setTitle(page.title);
          setContent(page.content);
          setCategory(page.category);
        }
      } catch (error) {
        console.error('Error fetching page:', error);
        toast({
          title: 'Error',
          description: 'Failed to load page',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!id || !title.trim() || !content.trim()) {
      toast({
        title: 'Error',
        description: 'Title and content are required',
        variant: 'destructive',
      });
      return;
    }
    
    setSaving(true);
    
    try {
      const updatedPage = await updatePage(id, {
        title,
        content,
        category,
      });
      
      toast({
        title: t('successEdit'),
        variant: 'default',
      });
      
      navigate(`/page/${updatedPage.id}`);
    } catch (error) {
      console.error('Error updating page:', error);
      toast({
        title: 'Error',
        description: 'Failed to update page',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
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

  return (
    <Layout>
      <div className="mb-6 flex justify-between items-center">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/admin')}
          className="text-vampire-text hover:text-vampire-primary"
        >
          <ArrowLeft className="mr-2" size={16} />
          {t('cancel')}
        </Button>
        
        <h1 className="text-3xl font-gothic text-vampire-primary">{t('editPage')}</h1>
        
        <Button 
          type="submit"
          form="edit-page-form"
          className="blood-btn"
          disabled={saving}
        >
          <Save className="mr-2" size={16} />
          {t('save')}
        </Button>
      </div>
      
      <div className="content-section">
        <form id="edit-page-form" onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block mb-2 text-vampire-text">
              {t('pageTitle')}
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 bg-vampire-secondary/40 border border-vampire-primary/30 rounded-md text-vampire-text focus:outline-none focus:ring-1 focus:ring-vampire-primary/50"
              placeholder="Enter page title"
              required
            />
          </div>
          
          <div>
            <label htmlFor="category" className="block mb-2 text-vampire-text">
              {t('pageCategory')}
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 bg-vampire-secondary/40 border border-vampire-primary/30 rounded-md text-vampire-text focus:outline-none focus:ring-1 focus:ring-vampire-primary/50"
            >
              <option value="Rules">{t('categoryRules')}</option>
              <option value="Clans">{t('categoryClans')}</option>
              <option value="Disciplines">{t('categoryDisciplines')}</option>
              <option value="Other">{t('categoryOther')}</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="content" className="block mb-2 text-vampire-text">
              {t('pageContent')}
            </label>
            <RichTextEditor
              initialValue={content}
              onChange={setContent}
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EditPagePage;
