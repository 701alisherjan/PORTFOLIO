import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { isDark } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return <div className="min-h-screen transition-colors duration-300">{children}</div>;
};

export default ThemeProvider;