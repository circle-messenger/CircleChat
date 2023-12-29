import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

type Props = {
  title?: string;
  text?: string;
  fill?: boolean;
  children?: React.ReactNode;
};

export const Card: React.FC<Props> = ({title, text, fill, children}) => {
  const cardStyle: StyleProp<ViewStyle> = {
    flex: (fill && 1) || 0,
  };
  return (
    <View style={[styles.card, cardStyle]}>
      {!!title && <Text style={styles.title}>{title}</Text>}
      {!!text && <Text style={styles.text}>{text}</Text>}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 24,
    flex: 1,
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    color: '#6c757d',
  },
});
