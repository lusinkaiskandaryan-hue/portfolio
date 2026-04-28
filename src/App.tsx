import { Navigate, Route, Routes } from 'react-router-dom';
import { PortfolioLayout } from './layout/Portfolio';
import { ContactPage } from './pages/Contact';
import { HomePage } from './pages/Home';
import { GeminiPage } from './pages/Gemini';
import { NotFoundPage } from './pages/NotFound';
import { ExperiencePage } from './pages/Experience';

const App = () => {
  return (
    <Routes>
      <Route element={<PortfolioLayout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/gemini" element={<GeminiPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
