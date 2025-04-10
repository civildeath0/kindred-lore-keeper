
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/hooks/use-toast";

import { TranslationProvider } from "@/hooks/useTranslation";
import HomePage from "@/pages/HomePage";
import RulesPage from "@/pages/RulesPage";
import ClansPage from "@/pages/ClansPage";
import DisciplinesPage from "@/pages/DisciplinesPage";
import PageDetailPage from "@/pages/PageDetailPage";
import AdminPage from "@/pages/AdminPage";
import CreatePagePage from "@/pages/CreatePagePage";
import EditPagePage from "@/pages/EditPagePage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TranslationProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/clans" element={<ClansPage />} />
          <Route path="/disciplines" element={<DisciplinesPage />} />
          <Route path="/page/:id" element={<PageDetailPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/create" element={<CreatePagePage />} />
          <Route path="/admin/edit/:id" element={<EditPagePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TranslationProvider>
  </QueryClientProvider>
);

export default App;
