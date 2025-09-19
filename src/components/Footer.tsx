import { FaInstagram, FaTelegram, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Parda Style</h2>
          <p className="text-sm">
            “Parda Style” – zamonaviy va klassik pardalar, jalyuzlar va turli turdagi dekorlar.
            Sizning uyingizni yanada chiroyli qilish uchun sifatli mahsulotlar va xizmatlar.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Bog‘lanish</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Toshkent sh., Chilonzor 12-kv
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +998 90 123 45 67
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@pardastyle.uz
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Bizni kuzating</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://instagram.com/yourpage" target="_blank" rel="noreferrer" className="hover:text-pink-500">
              <FaInstagram size={28} />
            </a>
            <a href="https://t.me/yourchannel" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              <FaTelegram size={28} />
            </a>
          </div>
          <p className="text-sm">
            Telegram kanalimizga obuna bo‘ling, yangiliklar va chegirmalardan xabardor bo‘ling.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Parda Style. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}
