import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme, ColorScheme } from '../theme';
import { useI18n } from '../i18n/I18nProvider.tsx';

const languages = [
  { code: 'en', labelKey: 'settings.english' as const },
  { code: 'zh', labelKey: 'settings.simplifiedChinese' as const },
  { code: 'zh-TW', labelKey: 'settings.traditionalChinese' as const },
  { code: 'ja', labelKey: 'settings.japanese' as const },
  { code: 'ko', labelKey: 'settings.korean' as const },
  { code: 'fr', labelKey: 'settings.french' as const },
];

const LanguageSelector: React.FC = () => {
  const { colors } = useTheme();
  const { t, currentLanguage, changeLanguage } = useI18n();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      {languages.map(lang => {
        const isActive = currentLanguage === lang.code;
        return (
          <TouchableOpacity
            key={lang.code}
            style={[styles.option, isActive && styles.optionActive]}
            onPress={() => changeLanguage(lang.code)}
            activeOpacity={0.7}>
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {t(lang.labelKey)}
            </Text>
            {isActive && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const createStyles = (colors: ColorScheme) =>
  StyleSheet.create({
    container: {
      marginVertical: 4,
    },
    option: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 14,
      paddingHorizontal: 12,
      borderRadius: 8,
      marginVertical: 3,
      borderWidth: 1,
      borderColor: colors.border,
    },
    optionActive: {
      borderColor: colors.text,
      backgroundColor: colors.surface,
    },
    label: {
      fontSize: 16,
      color: colors.text,
    },
    labelActive: {
      fontWeight: '600',
    },
    checkmark: {
      fontSize: 18,
      color: colors.text,
      fontWeight: '600',
    },
  });

export default LanguageSelector;
