import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';
import { getLanguage } from '../storage/StorageUtils.ts';
import en from './en.json';
import zh from './zh.json';
import zhTW from './zh-TW.json';
import ja from './ja.json';
import ko from './ko.json';
import fr from './fr.json';

const supportedLangs = ['en', 'zh', 'zh-TW', 'ja', 'ko', 'fr'];

const getDeviceLanguage = (): string => {
  const locale =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager?.settings?.AppleLocale ||
        NativeModules.SettingsManager?.settings?.AppleLanguages?.[0]
      : NativeModules.I18nManager?.localeIdentifier;
  if (locale) {
    const parts = locale.replace('_', '-').split('-');
    const lang = parts[0];
    const region = parts[1];
    if (lang === 'zh') {
      return region === 'TW' || region === 'HK' || region === 'MO'
        ? 'zh-TW'
        : 'zh';
    }
    if (supportedLangs.includes(lang)) {
      return lang;
    }
  }
  return 'en';
};

const savedLanguage = getLanguage();
const initialLanguage =
  savedLanguage && supportedLangs.includes(savedLanguage)
    ? savedLanguage
    : getDeviceLanguage();

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    zh: { translation: zh },
    'zh-TW': { translation: zhTW },
    ja: { translation: ja },
    ko: { translation: ko },
    fr: { translation: fr },
  },
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
