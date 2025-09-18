import { motion } from 'framer-motion';
import Card from './Card';

interface CardGridProps {
  cards: Array<{
    id: number;
    title: Record<string, string>;
    description: Record<string, string>;
    fullDescription: Record<string, string>;
    image: string;
    quality: string;
    material: Record<string, string>;
    price: string;
    category: string;
  }>;
  showAll?: boolean;
}

const CardGrid: React.FC<CardGridProps> = ({ cards, showAll = false }) => {
  const displayCards = showAll ? cards : cards.slice(0, 4);

  return (
    <div className={`grid gap-6 ${showAll ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
      {displayCards.map((card, index) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card card={card} />
        </motion.div>
      ))}
    </div>
  );
};

export default CardGrid;