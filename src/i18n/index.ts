import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uz: {
    translation: {
      home: 'Bosh sahifa',
      cards: 'Kartalar',
      about: 'Biz haqimizda',
      favorites: 'Sevimlilar',
      
      heroTitle: 'Eng Ajoyib Pardalar',
      heroSubtitle: 'Uyingiz uchun mukammal pardalar topganing',
      viewAllCards: 'Barcha kartalarni ko\'rish',
      
      viewDetails: 'Batafsil ko\'rish',
      addToFavorites: 'Sevimlilarga qo\'shish',
      removeFromFavorites: 'Sevimlilardan olib tashlash',
      quality: 'Sifat',
      material: 'Material',
      price: 'Narx',
      
      aboutTitle: 'Biz Haqimizda',
      aboutDescription: 'Biz eng yaxshi sifatli pardalarni taqdim etamiz. 10 yildan ortiq tajribaga ega bo\'lgan jamoamiz har bir mijoz uchun mukammal yechim topadi.',
      
      darkMode: 'Tungi rejim',
      lightMode: 'Kunduz rejimi',
      
      uzbek: 'O\'zbekcha',
      russian: 'Русский',
      english: 'English',
      turkish: 'Türkçe',
    },
  },
  ru: {
    translation: {
      home: 'Главная',
      cards: 'Карточки',
      about: 'О нас',
      favorites: 'Избранное',
      
      heroTitle: 'Прекрасные Шторы',
      heroSubtitle: 'Найдите идеальные шторы для вашего дома',
      viewAllCards: 'Посмотреть все карточки',
      
      viewDetails: 'Подробнее',
      addToFavorites: 'Добавить в избранное',
      removeFromFavorites: 'Убрать из избранного',
      quality: 'Качество',
      material: 'Материал',
      price: 'Цена',
      
      aboutTitle: 'О Нас',
      aboutDescription: 'Мы предлагаем шторы высочайшего качества. Наша команда с опытом более 10 лет находит идеальное решение для каждого клиента.',
      
      darkMode: 'Темная тема',
      lightMode: 'Светлая тема',
      
      uzbek: 'O\'zbekcha',
      russian: 'Русский',
      english: 'English',
      turkish: 'Türkçe',
    },
  },
  en: {
    translation: {
      home: 'Home',
      cards: 'Cards',
      about: 'About',
      favorites: 'Favorites',
      
      heroTitle: 'Beautiful Curtains',
      heroSubtitle: 'Find the perfect curtains for your home',
      viewAllCards: 'View All Cards',
      
      viewDetails: 'View Details',
      addToFavorites: 'Add to Favorites',
      removeFromFavorites: 'Remove from Favorites',
      quality: 'Quality',
      material: 'Material',
      price: 'Price',
      
      aboutTitle: 'About Us',
      aboutDescription: 'We offer the highest quality curtains. Our team with over 10 years of experience finds the perfect solution for each client.',
      
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      
      uzbek: 'O\'zbekcha',
      russian: 'Русский',
      english: 'English',
      turkish: 'Türkçe',
    },
  },
  tr: {
    translation: {
      home: 'Ana Sayfa',
      cards: 'Kartlar',
      about: 'Hakkımızda',
      favorites: 'Favoriler',
      
      heroTitle: 'Güzel Perdeler',
      heroSubtitle: 'Eviniz için mükemmel perdeleri bulun',
      viewAllCards: 'Tüm Kartları Görüntüle',
      
      viewDetails: 'Detayları Görüntüle',
      addToFavorites: 'Favorilere Ekle',
      removeFromFavorites: 'Favorilerden Çıkar',
      quality: 'Kalite',
      material: 'Malzeme',
      price: 'Fiyat',
      
      aboutTitle: 'Hakkımızda',
      aboutDescription: 'En yüksek kalitede perdeler sunuyoruz. 10 yılı aşkın deneyime sahip ekibimiz her müşteri için mükemmel çözüm buluyor.',
      
      darkMode: 'Karanlık Mod',
      lightMode: 'Aydınlık Mod',
      
      uzbek: 'O\'zbekcha',
      russian: 'Русский',
      english: 'English',
      turkish: 'Türkçe',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uz',
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;