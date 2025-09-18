import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';
import { RootState } from '../store';
import CardGrid from './CardGrid';

const Favorites: React.FC = () => {
  const { cards } = useSelector((state: RootState) => state.cards);
  const { favoriteIds } = useSelector((state: RootState) => state.favorites);
  const { t } = useTranslation();

  const favoriteCards = cards.filter(card => favoriteIds.includes(card.id));

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-red-900/10 dark:to-purple-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center space-x-3">
            <Heart className="w-12 h-12 text-red-500 fill-current" />
            <span className="bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
              {t('favorites')}
            </span>
          </h2>
          
          {favoriteCards.length > 0 ? (
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              You have {favoriteCards.length} favorite curtain{favoriteCards.length !== 1 ? 's' : ''}
            </p>
          ) : (
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              No favorites yet. Start exploring our collection!
            </p>
          )}
        </motion.div>

        {favoriteCards.length > 0 ? (
          <CardGrid cards={favoriteCards} showAll />
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full mb-8">
              <Heart className="w-12 h-12 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              No Favorites Yet
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Browse our collection and add curtains you love to your favorites!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Favorites;