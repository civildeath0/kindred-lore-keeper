
import React, { useState } from 'react';
import { Bold, Italic, Heading, List, Image, Link, Type } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

interface RichTextEditorProps {
  initialValue: string;
  onChange: (value: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ initialValue, onChange }) => {
  const { t } = useTranslation();
  const [content, setContent] = useState(initialValue);
  
  const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    const newContent = e.currentTarget.innerHTML;
    setContent(newContent);
    onChange(newContent);
  };
  
  const execCommand = (command: string, value: string = '') => {
    document.execCommand(command, false, value);
    const editor = document.getElementById('rich-text-editor');
    if (editor) {
      setContent(editor.innerHTML);
      onChange(editor.innerHTML);
    }
  };

  const insertHeading = (level: number) => {
    execCommand('formatBlock', `<h${level}>`);
  };

  const formatText = (command: string) => {
    execCommand(command);
  };

  const insertLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      execCommand('createLink', url);
    }
  };

  const insertImage = () => {
    const url = prompt('Enter image URL:');
    if (url) {
      execCommand('insertImage', url);
    }
  };

  return (
    <div className="border border-vampire-primary/30 rounded-md overflow-hidden bg-vampire-secondary/40">
      <div className="bg-vampire-secondary border-b border-vampire-primary/30 px-4 py-2 flex flex-wrap gap-2">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => formatText('bold')}
          title={t('bold')}
          className="text-vampire-text hover:text-vampire-primary hover:bg-vampire-secondary"
        >
          <Bold size={18} />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => formatText('italic')}
          title={t('italic')}
          className="text-vampire-text hover:text-vampire-primary hover:bg-vampire-secondary"
        >
          <Italic size={18} />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertHeading(2)}
          title={t('heading')}
          className="text-vampire-text hover:text-vampire-primary hover:bg-vampire-secondary"
        >
          <Heading size={18} />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand('formatBlock', '<p>')}
          title={t('paragraph')}
          className="text-vampire-text hover:text-vampire-primary hover:bg-vampire-secondary"
        >
          <Type size={18} />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand('insertUnorderedList')}
          title={t('list')}
          className="text-vampire-text hover:text-vampire-primary hover:bg-vampire-secondary"
        >
          <List size={18} />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={insertImage}
          title={t('image')}
          className="text-vampire-text hover:text-vampire-primary hover:bg-vampire-secondary"
        >
          <Image size={18} />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={insertLink}
          title={t('link')}
          className="text-vampire-text hover:text-vampire-primary hover:bg-vampire-secondary"
        >
          <Link size={18} />
        </Button>
      </div>
      <div
        id="rich-text-editor"
        contentEditable
        className="min-h-[300px] p-4 focus:outline-none text-vampire-text empty:before:content-[attr(data-placeholder)] empty:before:text-vampire-text/50"
        dangerouslySetInnerHTML={{ __html: content }}
        onInput={handleChange}
        data-placeholder={t('editorPlaceholder')}
      />
    </div>
  );
};

export default RichTextEditor;
