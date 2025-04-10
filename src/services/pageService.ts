
import { Page } from '@/types/page';

// Mock API for local storage
const LOCAL_STORAGE_KEY = 'vampire-masquerade-pages';

// Initialize with some default content
const initializePages = (): Page[] => {
  const existingPages = localStorage.getItem(LOCAL_STORAGE_KEY);
  
  if (existingPages) {
    return JSON.parse(existingPages);
  }
  
  // Default pages if none exist
  const defaultPages: Page[] = [
    {
      id: '1',
      title: 'Introduction to Vampire: The Masquerade',
      content: `
        <h2>Welcome to the World of Darkness</h2>
        <p>Vampire: The Masquerade is a tabletop role-playing game (RPG) created by Mark Rein-Hagen and released in 1991 by White Wolf Publishing as the first of several Storyteller System games for its World of Darkness setting line.</p>
        <p>In Vampire: The Masquerade, players take on the roles of vampires, who are referred to as "Kindred", and deal with their night-to-night struggles against their own bestial natures, vampire hunters and each other.</p>
        
        <h3>The Setting</h3>
        <p>The game uses the Gothic-Punk setting of the World of Darkness, where vampires, werewolves, mages, and other supernatural beings exist in a modern world where their existence is not well-known to humans.</p>
        
        <h3>The Masquerade</h3>
        <p>The Masquerade refers to the custom that vampires must maintain a façade of humanity and hide the existence of vampires from humans. Vampires who break the Masquerade are severely punished by other vampires, as the exposure of vampire society would likely lead to widespread vampire hunts.</p>
      `,
      category: 'Rules',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Vampire Clans',
      content: `
        <h2>The Clans of Kindred</h2>
        <p>Vampire society is divided into several clans, each with their own unique characteristics, disciplines (supernatural powers), and cultural practices.</p>
        
        <h3>Brujah</h3>
        <p>Once philosopher-kings of an ancient civilization, the Brujah are now rebels and agitators who challenge the status quo. They're known for their quick tempers and even quicker fists.</p>
        <p><strong>Disciplines:</strong> Celerity, Potence, Presence</p>
        
        <h3>Gangrel</h3>
        <p>The Gangrel are closely tied to their animalistic nature. They are often loners who prefer the wilderness to urban settings, and they can take on bestial features as they frenzy.</p>
        <p><strong>Disciplines:</strong> Animalism, Fortitude, Protean</p>
        
        <h3>Malkavian</h3>
        <p>Every Malkavian is afflicted with a mental derangement, but they also gain insight that other vampires lack. They often act as seers and oracles.</p>
        <p><strong>Disciplines:</strong> Auspex, Dominate, Obfuscate</p>
        
        <h3>Nosferatu</h3>
        <p>Hideously deformed by their Embrace, Nosferatu cannot pass for human and must dwell in the shadows. They are information brokers and spies.</p>
        <p><strong>Disciplines:</strong> Animalism, Obfuscate, Potence</p>
        
        <h3>Toreador</h3>
        <p>These vampires are captivated by beauty and art. Many were artists, musicians, or writers in life, and they maintain these interests in undeath.</p>
        <p><strong>Disciplines:</strong> Auspex, Celerity, Presence</p>
        
        <h3>Tremere</h3>
        <p>The Tremere are blood sorcerers who have converted their magical knowledge into a vampiric discipline. They are highly organized and secretive.</p>
        <p><strong>Disciplines:</strong> Auspex, Dominate, Thaumaturgy</p>
        
        <h3>Ventrue</h3>
        <p>The Ventrue are the aristocracy of vampire society. They concern themselves with leadership and maintaining the Masquerade.</p>
        <p><strong>Disciplines:</strong> Dominate, Fortitude, Presence</p>
      `,
      category: 'Clans',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '3',
      title: 'Disciplines',
      content: `
        <h2>Vampire Disciplines</h2>
        <p>Disciplines are supernatural powers that vampires possess. They are a manifestation of the vampire's Beast, the animalistic side of their nature that emerges during frenzy.</p>
        
        <h3>Animalism</h3>
        <p>The discipline of supernatural control and communion with animals. Vampires with this discipline can command animals, speak with them, and even call forth the Beast in others.</p>
        
        <h3>Auspex</h3>
        <p>Auspex enhances the vampire's senses to supernatural levels. It allows them to perceive auras, sense emotions, and even glimpse the future or past.</p>
        
        <h3>Celerity</h3>
        <p>Vampires with Celerity can move with incredible speed, faster than the human eye can follow. At higher levels, they can perform multiple actions in the time it takes others to perform one.</p>
        
        <h3>Dominate</h3>
        <p>Dominate is the power to control minds through eye contact. Vampires can implant suggestions, erase memories, or even take complete control of a victim.</p>
        
        <h3>Fortitude</h3>
        <p>This discipline grants supernatural resilience, allowing vampires to withstand injuries that would destroy others. At higher levels, it can even protect against sunlight and fire.</p>
        
        <h3>Obfuscate</h3>
        <p>Obfuscate is the power of invisibility and illusion. Vampires can hide their presence, create false images, or alter their appearance.</p>
        
        <h3>Potence</h3>
        <p>Potence grants supernatural strength, allowing vampires to perform feats of incredible power, from bending metal to leaping great distances.</p>
        
        <h3>Presence</h3>
        <p>Presence allows vampires to manipulate the emotions of others. They can inspire terror, love, or awe in those around them.</p>
        
        <h3>Protean</h3>
        <p>Protean is the power to change form. Vampires can grow claws, meld with the earth, or even transform into animals.</p>
        
        <h3>Thaumaturgy</h3>
        <p>Thaumaturgy is blood magic, the manipulation of vitae to create supernatural effects. It's highly versatile and can be used for a wide range of effects, from controlling blood to conjuring fire.</p>
      `,
      category: 'Disciplines',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '4',
      title: 'Basic Rules',
      content: `
        <h2>Core Mechanics</h2>
        <p>Vampire: The Masquerade uses a d10-based system. Players roll a number of ten-sided dice equal to their character's relevant Attribute + Ability, and each die that shows a result equal to or greater than the difficulty (usually 6) counts as a success.</p>
        
        <h3>Character Creation</h3>
        <p>Characters in Vampire are defined by:</p>
        <ul>
          <li><strong>Attributes:</strong> Physical, Social, and Mental traits that define basic capabilities.</li>
          <li><strong>Abilities:</strong> Skills, Talents, and Knowledges that represent learned capabilities.</li>
          <li><strong>Disciplines:</strong> Supernatural powers that vampires possess.</li>
          <li><strong>Backgrounds:</strong> Resources, contacts, and other external advantages.</li>
          <li><strong>Virtues:</strong> Traits that define a character's moral compass.</li>
          <li><strong>Humanity:</strong> A measure of how well a vampire resists their bestial nature.</li>
          <li><strong>Willpower:</strong> A character's mental fortitude and determination.</li>
          <li><strong>Blood Pool:</strong> The amount of vitae (blood) a vampire has consumed.</li>
        </ul>
        
        <h3>The Hunt</h3>
        <p>Vampires must consume blood to survive. The process of finding and feeding on humans is called the Hunt. It's a central activity in the game, and how a vampire hunts can reveal much about their character.</p>
        
        <h3>The Beast</h3>
        <p>All vampires struggle with the Beast, the animalistic side of their nature that emerges during frenzy. Resisting the Beast is a constant challenge, and succumbing to it can have dire consequences.</p>
        
        <h3>Frenzy</h3>
        <p>When a vampire is threatened, hungry, or angry, they may fall into a frenzy, a state where the Beast takes control. During a frenzy, the vampire becomes a savage creature, acting on instinct rather than reason.</p>
      `,
      category: 'Rules',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  ];
  
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultPages));
  return defaultPages;
};

// Get all pages
export const getAllPages = async (): Promise<Page[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pages = initializePages();
      resolve(pages);
    }, 300);
  });
};

// Get page by id
export const getPageById = async (id: string): Promise<Page | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pages = initializePages();
      const page = pages.find(p => p.id === id) || null;
      resolve(page);
    }, 300);
  });
};

// Get pages by category
export const getPagesByCategory = async (category: string): Promise<Page[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pages = initializePages();
      const filtered = pages.filter(p => p.category === category);
      resolve(filtered);
    }, 300);
  });
};

// Create a new page
export const createPage = async (page: Omit<Page, 'id' | 'createdAt' | 'updatedAt'>): Promise<Page> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pages = initializePages();
      const newPage: Page = {
        ...page,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      pages.push(newPage);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(pages));
      resolve(newPage);
    }, 300);
  });
};

// Update an existing page
export const updatePage = async (id: string, page: Partial<Omit<Page, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Page> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = initializePages();
      const index = pages.findIndex(p => p.id === id);
      
      if (index === -1) {
        reject(new Error('Page not found'));
        return;
      }
      
      const updatedPage: Page = {
        ...pages[index],
        ...page,
        updatedAt: new Date().toISOString()
      };
      
      pages[index] = updatedPage;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(pages));
      resolve(updatedPage);
    }, 300);
  });
};

// Delete a page
export const deletePage = async (id: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = initializePages();
      const index = pages.findIndex(p => p.id === id);
      
      if (index === -1) {
        reject(new Error('Page not found'));
        return;
      }
      
      pages.splice(index, 1);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(pages));
      resolve();
    }, 300);
  });
};

// Search pages
export const searchPages = async (query: string): Promise<Page[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pages = initializePages();
      const queryLower = query.toLowerCase();
      
      const results = pages.filter(
        page => 
          page.title.toLowerCase().includes(queryLower) || 
          page.content.toLowerCase().includes(queryLower)
      );
      
      resolve(results);
    }, 300);
  });
};
