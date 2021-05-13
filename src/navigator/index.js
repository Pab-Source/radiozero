import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Contact from '../screens/contact';
import Zero from '../screens/zero';
import RootBottomTabNavigator from './TabNavigator';
import {navigatorRef} from './NavigationService';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigatorRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={RootBottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Zero"
          component={Zero}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
