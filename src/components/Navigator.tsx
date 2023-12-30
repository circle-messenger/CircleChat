import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GateView} from '../views/GateView';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen
        name="Gate"
        component={GateView}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Drawer.Screen
        name="HomeStack"
        component={StackNavigator}
      />
    </Drawer.Navigator>
  );
};
