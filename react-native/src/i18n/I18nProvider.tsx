import React, { createContext, useContext, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { saveLanguage } from '../storage/StorageUtils.ts';
import './index.ts';

interface I18nContextType {
  t: (key: string, params?: Record<string, unknown>) => string;
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang);
      saveLanguage(lang);
    },
    [i18n],
  );

  const value: I18nContextType = {
    t: t as (key: string, params?: Record<string, unknown>) => string,
    currentLanguage: i18n.language,
    changeLanguage,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
