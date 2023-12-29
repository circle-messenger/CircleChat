import {useCallback, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Card} from '../components/Card';
import {Button} from '../components/Button';
import {useGetCode} from '../api/hooks/useGetCode';
import {
  SocketResponse,
  disconnectSocket,
  initializeSocketConnection,
} from '../api/services/socketService';

export const GateView = () => {
  const {getCode, code} = useGetCode();

  const handleNewId = useCallback((id: string) => {
    getCode(id);
  }, []);

  const handleMessage = useCallback((message: SocketResponse) => {
    // ...
  }, []);

  useEffect(() => {
    initializeSocketConnection(handleNewId, handleMessage);
    return () => {
      disconnectSocket();
    };
  }, [handleNewId, handleMessage]);

  return (
    <View style={styles.root}>
      <Card
        title="Ожидайте подтверждения"
        text="Вы сможете пользоваться приложением только после того, как ваш код подтвердят существующие пользователи"
      />
      <Card fill>{!!code && <Image src={code} style={styles.image} />}</Card>
      <Text style={styles.text}>Ещё способы</Text>
      <Button label="Войти по логину" primary />
      <Button label="Подать заявку" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e9ecef',
    flex: 1,
    padding: 16,
    gap: 8,
  },
  text: {
    fontSize: 15,
    color: '#6c757d',
    textAlign: 'center',
    marginVertical: 4,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
});
