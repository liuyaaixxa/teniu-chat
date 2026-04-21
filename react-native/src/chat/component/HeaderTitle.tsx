import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { ChatMode, Usage } from '../../types/Chat.ts';
import { useTheme, ColorScheme } from '../../theme';
import { useI18n } from '../../i18n/I18nProvider.tsx';

interface HeaderTitleProps {
  title: string;
  usage?: Usage;
  onDoubleTap: () => void;
  chatMode?: ChatMode;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  title,
  usage,
  onDoubleTap,
  chatMode,
}) => {
  const { colors } = useTheme();
  const { t } = useI18n();
  const styles = createStyles(colors);
  const [showUsage, setShowUsage] = useState(false);
  const doubleTapRef = useRef(null);

  const handleSingleTap = () => {
    setShowUsage(!showUsage);
  };

  return (
    <TapGestureHandler
      ref={doubleTapRef}
      numberOfTaps={2}
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
          onDoubleTap();
        }
      }}>
      <TapGestureHandler
        numberOfTaps={1}
        onHandlerStateChange={({ nativeEvent }) => {
          if (nativeEvent.state === State.ACTIVE) {
            handleSingleTap();
          }
        }}
        waitFor={doubleTapRef}>
        <View style={styles.container}>
          <Text style={styles.headerTitleStyle}>{title}</Text>
          {showUsage && chatMode !== ChatMode.Image && (
            <Text style={styles.usageText}>{`${t('chat.input')}: ${
              usage?.inputTokens ?? 0
            }   ${t('chat.output')}: ${usage?.outputTokens ?? 0}`}</Text>
          )}
        </View>
      </TapGestureHandler>
    </TapGestureHandler>
  );
};

const createStyles = (colors: ColorScheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      paddingHorizontal: 8,
      paddingVertical: 8,
    },
    headerTitleStyle: {
      fontSize: 17,
      fontWeight: '600',
      color: colors.text,
    },
    usageText: {
      fontSize: 10,
      color: colors.textSecondary,
      marginLeft: 4,
      fontWeight: '400',
    },
  });

export default HeaderTitle;
