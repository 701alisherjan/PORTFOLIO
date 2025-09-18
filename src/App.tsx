import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { store } from './store';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import ThemeProvider from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';
import CardDetails from './components/CardDetails';
import About from './components/About';
import Favorites from './components/Favorites';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import './i18n';

const AppContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { cards } = useSelector((state: RootState) => state.cards);
  const { selectedCard } = useSelector((state: RootState) => state.cards);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'cards', 'about', 'favorites'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveSection(sectionId);
  };

  const handleViewCards = () => {
    scrollToSection('cards');
  };

  return (
    <div className="relative">
      <Navbar activeSection={activeSection} setActiveSection={scrollToSection} />
      
      {/* Home Section */}
      <section id="home">
        <Hero onViewCards={handleViewCards} />
      </section>

      {/* Preview Cards Section (on Home) */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Featured Collection
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Discover our most popular curtain designs
            </p>
          </motion.div>

          <CardGrid cards={cards} showAll={false} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              onClick={handleViewCards}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
            >
              {t('viewAllCards')}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* All Cards Section */}
      <section id="cards" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t('cards')}
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our complete collection of 25 unique curtain designs
            </p>
          </motion.div>

          <CardGrid cards={cards} showAll />
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Favorites Section */}
      <section id="favorites">
        <Favorites />
      </section>

      {/* Card Details Modal */}
      <AnimatePresence>
        {selectedCard && <CardDetails />}
      </AnimatePresence>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Provider>
  );
}

export default App;