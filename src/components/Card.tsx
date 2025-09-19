import { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Heart, Eye } from 'lucide-react';
import { RootState } from '../store';
import { toggleFavorite } from '../store/slices/favoritesSlice';
import { setSelectedCard } from '../store/slices/cardsSlice';
import { Button } from '@/components/ui/button';

interface CardProps {
  card: {
    id: number;
    title: Record<string, string>;
    description: Record<string, string>;
    fullDescription: Record<string, string>;
    image: string;
    quality: string;
    material: Record<string, string>;
    price: string;
    category: string;
  };
}

const Card: React.FC<CardProps> = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const dispatch = useDispatch();
  const { currentLanguage } = useSelector((state: RootState) => state.language);
  const { favoriteIds } = useSelector((state: RootState) => state.favorites);
  const { t } = useTranslation();

  const isFavorite = favoriteIds.includes(card.id);

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleFavorite(card.id));
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(setSelectedCard(card));
  };

  return (
    <motion.div
      className="relative h-80 w-full perspective-1000"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      whileHover={{ scale: 1.02 }}
      layout
    >
      <motion.div
        className="relative w-full h-full preserve-3d transition-transform duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="flex h-full">
            <div className="w-1/2 relative">
              <img
                src={card.image}
                alt={card.title[currentLanguage]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
            </div>
            
            <div className="w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {card.title[currentLanguage]}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                  {card.description[currentLanguage]}
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {card.price}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleFavoriteToggle}
                    className="p-2"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isFavorite 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-400 hover:text-red-500'
                      }`}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 shadow-lg rotate-y-180">
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {card.title[currentLanguage]}
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    {t('quality')}:
                  </span>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    {card.quality}
                  </span>
                </div>
                
                <div>
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    {t('material')}:
                  </span>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    {card.material[currentLanguage]}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-xs line-clamp-4 mt-4">
                  {card.fullDescription[currentLanguage]}
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
                {card.price}
              </span>
              <Button
                onClick={handleViewDetails}
                size="sm"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                <Eye className="w-4 h-4 mr-2" />
                {t('viewDetails')}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card; 