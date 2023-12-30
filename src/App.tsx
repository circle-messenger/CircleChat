import {QueryClient, QueryClientProvider} from 'react-query';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './components/Navigator';

const client = new QueryClient();

export const App = () => {
  const isAuth = false;

  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};
