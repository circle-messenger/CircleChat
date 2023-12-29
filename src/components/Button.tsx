import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';

type Props = {
  label: string;
  primary?: boolean;
};

export const Button: React.FC<Props> = ({label, primary}) => {
  return (
    <View style={styles.root}>
      <TouchableNativeFeedback>
        <View style={[styles.button, primary && styles.primaryButton]}>
          <Text style={[styles.label, primary && styles.primaryLabel]}>
            {label}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    overflow: 'hidden',
    borderRadius: 32,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    backgroundColor: '#dee2e6',
  },
  primaryButton: {
    backgroundColor: '#1F86FF',
  },
  primaryLabel: {
    color: '#ffffff',
  },
  label: {
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#1F86FF',
  },
});
