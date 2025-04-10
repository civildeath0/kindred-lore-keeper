import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the translations
const translations = {
  en: {
    // App
    appTitle: 'Vampire: The Masquerade',
    vampireMasqueradeRulebook: 'Vampire: The Masquerade Rulebook',
    allRightsReserved: 'All Rights Reserved',
    
    // Navigation
    home: 'Home',
    rules: 'Rules',
    clans: 'Clans',
    disciplines: 'Disciplines',
    admin: 'Admin',
    
    // Home page
    welcomeTitle: 'Welcome to the World of Darkness',
    welcomeText: 'An interactive rulebook for Vampire: The Masquerade tabletop role-playing game.',
    getStarted: 'Get Started',
    exploreRules: 'Explore Rules',
    discoverClans: 'Discover Clans',
    learnDisciplines: 'Learn Disciplines',
    
    // Footer
    aboutTitle: 'About',
    aboutText: 'This interactive rulebook provides comprehensive information about Vampire: The Masquerade tabletop role-playing game, including rules, clans, disciplines, and more.',
    linksTitle: 'Useful Links',
    officialSite: 'Official World of Darkness',
    livingRules: 'Living Rules',
    ttgClub: 'TTG Club',
    disclaimerTitle: 'Disclaimer',
    disclaimerText: 'This is an unofficial fan project. All content related to Vampire: The Masquerade is owned by Paradox Interactive.',
    
    // Rules page
    rulesTitle: 'Game Rules',
    basicRules: 'Basic Rules',
    advancedRules: 'Advanced Rules',
    combatRules: 'Combat Rules',
    
    // Clans page
    clansTitle: 'Vampire Clans',
    clansDescription: 'Explore the various bloodlines that form the foundation of vampire society.',
    
    // Disciplines page
    disciplinesTitle: 'Disciplines',
    disciplinesDescription: 'Discover the supernatural powers that vampires can master.',
    
    // Admin
    adminTitle: 'Content Administration',
    adminDescription: 'Add, edit, or delete pages in the rulebook.',
    createPage: 'Create New Page',
    editPage: 'Edit Page',
    deletePage: 'Delete Page',
    pageTitle: 'Page Title',
    pageContent: 'Page Content',
    pageCategory: 'Category',
    save: 'Save',
    cancel: 'Cancel',
    confirmDelete: 'Are you sure you want to delete this page?',
    yes: 'Yes',
    no: 'No',
    successCreate: 'Page created successfully',
    successEdit: 'Page updated successfully',
    successDelete: 'Page deleted successfully',
    
    // Editor
    bold: 'Bold',
    italic: 'Italic',
    heading: 'Heading',
    paragraph: 'Paragraph',
    list: 'List',
    image: 'Image',
    link: 'Link',
    editorPlaceholder: 'Enter content here...',
    
    // Categories
    categoryRules: 'Rules',
    categoryClans: 'Clans',
    categoryDisciplines: 'Disciplines',
    categoryOther: 'Other',
    
    // Search
    search: 'Search',
    searchPlaceholder: 'Search rulebook...',
    noResults: 'No results found',
    
    // Error pages
    notFound: 'Page Not Found',
    goBack: 'Go Back Home',
    errorOccurred: 'An error occurred',
    
    // Page detail
    updated: 'Updated',
    readMore: 'Read More',
  },
  ru: {
    // App
    appTitle: 'Вампир: Маскарад',
    vampireMasqueradeRulebook: 'Книга правил Вампир: Маскарад',
    allRightsReserved: 'Все права защищены',
    
    // Navigation
    home: 'Главная',
    rules: 'Правила',
    clans: 'Кланы',
    disciplines: 'Дисциплины',
    admin: 'Администрирование',
    
    // Home page
    welcomeTitle: 'Добро пожаловать в Мир Тьмы',
    welcomeText: 'Интерактивная книга правил для настольной ролевой игры Вампир: Маскарад.',
    getStarted: 'Начать',
    exploreRules: 'Изучить правила',
    discoverClans: 'Узнать о кланах',
    learnDisciplines: 'Изучить дисциплины',
    
    // Footer
    aboutTitle: 'О проекте',
    aboutText: 'Эта интерактивная книга правил предоставляет исчерпывающую информацию о настольной ролевой игре Вампир: Маскарад, включая правила, кланы, дисциплины и многое другое.',
    linksTitle: 'Полезные ссылки',
    officialSite: 'Официальный сайт Мира Тьмы',
    livingRules: 'Живые правила',
    ttgClub: 'TTG Club',
    disclaimerTitle: 'Отказ от ответственности',
    disclaimerText: 'Это неофициальный фанатский проект. Весь контент, связанный с Вампир: Маскарад, принадлежит Paradox Interactive.',
    
    // Rules page
    rulesTitle: 'Правила игры',
    basicRules: 'Основные правила',
    advancedRules: 'Продвинутые правила',
    combatRules: 'Правила боя',
    
    // Clans page
    clansTitle: 'Вампирские кланы',
    clansDescription: 'Изучите различные родословные, которые формируют основу вампирского общества.',
    
    // Disciplines page
    disciplinesTitle: 'Дисциплины',
    disciplinesDescription: 'Откройте для себя сверхъестественные силы, которыми могут овладеть вампиры.',
    
    // Admin
    adminTitle: 'Управление контентом',
    adminDescription: 'Добавляйте, редактируйте или удаляйте страницы в книге правил.',
    createPage: 'Создать новую страницу',
    editPage: 'Редактировать страницу',
    deletePage: 'Удалить страницу',
    pageTitle: 'Заголовок страницы',
    pageContent: 'Содержание страницы',
    pageCategory: 'Категория',
    save: 'Сохранить',
    cancel: 'Отмена',
    confirmDelete: 'Вы уверены, что хотите удалить эту страницу?',
    yes: 'Да',
    no: 'Нет',
    successCreate: 'Страница успешно создана',
    successEdit: 'Страница успешно обновлена',
    successDelete: 'Страница успешно удалена',
    
    // Editor
    bold: 'Жирный',
    italic: 'Курсив',
    heading: 'Заголовок',
    paragraph: 'Параграф',
    list: 'Список',
    image: 'Изображение',
    link: 'Ссылка',
    editorPlaceholder: 'Введите содержание здесь...',
    
    // Categories
    categoryRules: 'Правила',
    categoryClans: 'Кланы',
    categoryDisciplines: 'Дисциплины',
    categoryOther: 'Другое',
    
    // Search
    search: 'Поиск',
    searchPlaceholder: 'Поиск по книге правил...',
    noResults: 'Результаты не найдены',
    
    // Error pages
    notFound: 'Страница не найдена',
    goBack: 'Вернуться на главную',
    errorOccurred: 'Произошла ошибка',
    
    // Page detail
    updated: 'Обновлено',
    readMore: 'Читать далее',
  }
};

type Language = 'en' | 'ru';
type TranslationKey = keyof typeof translations.en;

interface TranslationContextType {
  t: (key: TranslationKey) => string;
  toggleLanguage: () => void;
  language: Language;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem('language') as Language) || 'ru'
  );

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ru' : 'en');
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <TranslationContext.Provider value={{ t, toggleLanguage, language }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
