import { createContext, useContext, useState, useEffect } from 'react';
import enTranslations from './locales/en.json';
import swTranslations from './locales/sw.json';
import frTranslations from './locales/fr.json';
import zhTranslations from './locales/zh.json';
import arTranslations from './locales/ar.json';

const LanguageContext = createContext();

const translations = {
    en: enTranslations,
    sw: swTranslations,
    fr: frTranslations,
    zh: zhTranslations,
    ar: arTranslations,
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [t, setT] = useState(translations.en);

    useEffect(() => {
        // Load language preference from localStorage
        const savedLanguage = localStorage.getItem('language') || 'en';
        setLanguage(savedLanguage);
        setT(translations[savedLanguage]);
    }, []);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        setT(translations[lang]);
        localStorage.setItem('language', lang);
    };

    const getAvailableLanguages = () => {
        return Object.values(translations).map(t => t.language);
    };

    return (
        <LanguageContext.Provider value={{
            language,
            changeLanguage,
            t,
            availableLanguages: getAvailableLanguages()
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);