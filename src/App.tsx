import { Navigate, Route, Routes } from 'react-router-dom';
import { PortfolioLayout } from './layout/Portfolio';
import { ContactPage } from './pages/Contact';
import { HomePage } from './pages/Home';
import { NotFoundPage } from './pages/NotFound';
import { ProjectsPage } from './pages/Projects';

const App = () => {
  return (
    <Routes>
      <Route element={<PortfolioLayout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
