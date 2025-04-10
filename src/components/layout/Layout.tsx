
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
      <main className="flex-grow pb-12 pt-6">
        {children}
      </main>
      <Footer />
      <Toaster 
        position="top-right"
        toastOptions={{
          className: "bg-vampire-secondary border border-vampire-primary/30 text-vampire-text",
          style: {
            backdropFilter: "blur(10px)",
            background: "rgba(26, 31, 44, 0.85)",
          }
        }}
      />
    </div>
  );
};

export default Layout;
