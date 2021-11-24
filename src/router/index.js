import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {JamMasuk, Login, Splash} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="JamMasuk"
        component={JamMasuk}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
