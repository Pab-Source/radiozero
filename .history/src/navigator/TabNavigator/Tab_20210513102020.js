import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Menu from '../../components/menu';
import routes from './routes';

const Tab = createBottomTabNavigator();

const RootBottomTabNavigator = () => {
  return (
    <>
      <Menu />
      <Tab.Navigator options={routes.navigatorConfig}>
        {routes.screens.map((item, index) => {
          console.log(item);
          return <Tab.Screen key={index} {...item} />;
        })}
      </Tab.Navigator>
    </>
  );
};

export default RootBottomTabNavigator;
