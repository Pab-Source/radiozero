import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Menu from '../../components/menu';
import routes from './routes';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const {screens} = routes;

const RootBottomTabNavigator = () => {
  return (
    <>
      <Menu />
      <Tab.Navigator
        initialRouteName="Radio"
        tabBarOptions={{...routes.navigatorConfig}}>
        {screens.map((item, index) => {
          return <Tab.Screen key={index} {...item} />;
        })}
      </Tab.Navigator>
    </>
  );
};

export default RootBottomTabNavigator;
