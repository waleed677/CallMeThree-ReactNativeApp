import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginView from '../screens/LoginView';
import RegisterView from '../screens/RegisterView';

const stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <stack.Navigator initialRouteName="Login">
      <stack.Screen
        name="Login"
        component={LoginView}
        options={{headerShown: false}}></stack.Screen>
      <stack.Screen
        name="Register"
        component={RegisterView}
        options={{headerShown: false}}></stack.Screen>
    </stack.Navigator>
  );
};

export default AuthStack;
