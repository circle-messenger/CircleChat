import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GateView} from '../views/GateView';
import {HomeScreen} from '../views/HomeScreen';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerScreensStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#e9ecef',
        },
      }}
      initialRouteName="Gate">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          borderTopEndRadius: 24,
          borderBottomEndRadius: 24,
          width: '80%',
        },
      }}
      drawerContent={() => <Text>Drawer Content</Text>}>
      <Drawer.Screen name="DrawerScreens" component={DrawerScreensStack} />
    </Drawer.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Gate">
      <Stack.Screen name="Gate" component={GateView} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};
