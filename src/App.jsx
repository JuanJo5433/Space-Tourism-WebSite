// App.tsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import PageTransition from './components/PageTransition';
import CrewPage from './pages/CrewPage';
import TechnologyPage from './pages/TechnologyPage';

function App() {
  const location = useLocation();

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden bg-[#0B0D17]">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="/destination"
            element={
              <PageTransition>
                <DestinationPage />
              </PageTransition>
            }
          />
          <Route
            path="/crew"
            element={
              <PageTransition>
                <CrewPage />
              </PageTransition>
            }
          />
          <Route
            path="/technology"
            element={
              <PageTransition>
                <TechnologyPage />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
