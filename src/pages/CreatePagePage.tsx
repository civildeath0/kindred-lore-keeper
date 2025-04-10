
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import RichTextEditor from '@/components/editor/RichTextEditor';
import { createPage } from '@/services/pageService';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const CreatePagePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Rules');
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      toast({
        title: 'Error',
        description: 'Title and content are required',
        variant: 'destructive',
      });
      return;
    }
    
    setSaving(true);
    
    try {
      const newPage = await createPage({
        title,
        content,
        category,
      });
      
      toast({
        title: t('successCreate'),
        variant: 'default',
      });
      
      navigate(`/page/${newPage.id}`);
    } catch (error) {
      console.error('Error creating page:', error);
      toast({
        title: 'Error',
        description: 'Failed to create page',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

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
        
        <h1 className="text-3xl font-gothic text-vampire-primary">{t('createPage')}</h1>
        
        <Button 
          type="submit"
          form="create-page-form"
          className="blood-btn"
          disabled={saving}
        >
          <Save className="mr-2" size={16} />
          {t('save')}
        </Button>
      </div>
      
      <div className="content-section">
        <form id="create-page-form" onSubmit={handleSubmit} className="space-y-6">
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

export default CreatePagePage;
