import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GateView} from '../views/GateView';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Gate"
        component={GateView}
        options={{title: 'Вход в приложение'}}
      />
    </Stack.Navigator>
  );
};

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeStack"
        component={StackNavigator}
        options={{drawerLabel: 'Главная'}}
      />
    </Drawer.Navigator>
  );
};
