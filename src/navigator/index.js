import React from 'react';
import Contact from '../screens/contact';
import Zero from '../screens/zero';
import DetailsBlog from '../screens/detailsBlog';
import DetailsPodcast from '../screens/detailsPodcast';
import RootBottomTabNavigator from './TabNavigator';
import {navigatorRef} from './NavigationService';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

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
          name="DetailsBlog"
          component={DetailsBlog}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailsPodcast"
          component={DetailsPodcast}
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
