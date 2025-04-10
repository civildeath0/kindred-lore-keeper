
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Toaster } from '@/components/ui/sonner';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pb-12 pt-24">
        {children}
      </main>
      <Footer />
      <Toaster 
        position="top-right"
        toastOptions={{
          className: "bg-vampire-secondary-dark/90 border border-vampire-bright/30 text-vampire-text",
          style: {
            backdropFilter: "blur(10px)",
          }
        }}
      />
    </div>
  );
};

export default Layout;
