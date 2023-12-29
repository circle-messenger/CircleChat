import {QueryClient, QueryClientProvider} from 'react-query';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './components/Navigator';

const client = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};
