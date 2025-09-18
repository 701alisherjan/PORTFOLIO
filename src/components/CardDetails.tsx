import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { X, Heart, Star } from 'lucide-react';
import { RootState } from '../store';
import { clearSelectedCard } from '../store/slices/cardsSlice';
import { toggleFavorite } from '../store/slices/favoritesSlice';
import { Button } from '@/components/ui/button';

const CardDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedCard } = useSelector((state: RootState) => state.cards);
  const { currentLanguage } = useSelector((state: RootState) => state.language);
  const { favoriteIds } = useSelector((state: RootState) => state.favorites);
  const { t } = useTranslation();

  if (!selectedCard) return null;

  const isFavorite = favoriteIds.includes(selectedCard.id);

  const handleClose = () => {
    dispatch(clearSelectedCard());
  };

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(selectedCard.id));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* Image Section */}
          <div className="md:w-1/2 relative">
            <img
              src={selectedCard.image}
              alt={selectedCard.title[currentLanguage]}
              className="w-full h-64 md:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedCard.title[currentLanguage]}
                </h2>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">(4.9)</span>
                </div>
              </div>

              {/* Price */}
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {selectedCard.price}
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-1">
                      {t('quality')}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {selectedCard.quality}
                    </p>
                  </div>
                  
                  <div className="bg-pink-50 dark:bg-pink-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-pink-600 dark:text-pink-400 mb-1">
                      {t('material')}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {selectedCard.material[currentLanguage]}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Description
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedCard.fullDescription[currentLanguage]}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-6">
                  <Button
                    onClick={handleFavoriteToggle}
                    variant={isFavorite ? "default" : "outline"}
                    className={`flex-1 ${
                      isFavorite 
                        ? 'bg-red-500 hover:bg-red-600 text-white' 
                        : 'border-red-500 text-red-500 hover:bg-red-50'
                    }`}
                  >
                    <Heart className={`w-4 h-4 mr-2 ${isFavorite ? 'fill-current' : ''}`} />
                    {isFavorite ? t('removeFromFavorites') : t('addToFavorites')}
                  </Button>
                  
                  <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CardDetails;