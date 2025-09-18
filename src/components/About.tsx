import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the finest materials and craftsmanship',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '10+ years of interior design experience',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping worldwide',
    },
    {
      icon: Heart,
      title: 'Customer Love',
      description: '1000+ satisfied customers globally',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('aboutTitle')}
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('aboutDescription')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100 dark:border-purple-800"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-200 dark:border-purple-700"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2"
              >
                1000+
              </motion.div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                Happy Customers
              </p>
            </div>
            
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-pink-600 dark:text-pink-400 mb-2"
              >
                25+
              </motion.div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                Curtain Designs
              </p>
            </div>
            
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2"
              >
                10+
              </motion.div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                Years Experience
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;