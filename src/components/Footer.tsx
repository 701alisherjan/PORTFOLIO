import { FaInstagram, FaTelegram, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Marjona Fashion</h2>
          <p className="text-sm">
            “Parda Style” – zamonaviy va klassik pardalar, jalyuzlar va turli turdagi dekorlar.
            Sizning uyingizni yanada chiroyli qilish uchun sifatli mahsulotlar va xizmatlar.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Bog‘lanish</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Jizzax viloyati Zarbdor tumani
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +998 99 979 2906
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> Marjona_fashion@gmail.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Bizni kuzating</h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://instagram.com/Marjona_fashion"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
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
