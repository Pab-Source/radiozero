import React from 'react';
import {Image, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Radio from '../screens/radio';
import Podcast from '../screens/podcast';
import Events from '../screens/events';
import Releases from '../screens/releases';
import Blog from '../screens/blog';
import Contact from '../screens/contact';
import Zero from '../screens/zero';
import Menu from '../components/menu';
import {navigatorRef} from './navigatorService';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const styleIcon = {
  height: 40,
  width: 40,
};

const labelStyle = {
  color: '#FBFBFB',
  fontFamily: 'HelveticaNeue',
  fontWeight: 'bold',
  fontSize: 12,
  marginBottom: 5,
  textTransform: 'uppercase',
};

const RootBottomTabNavigator = () => {
  return (
    <>
      <Menu />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'rgba(255, 255, 255, 0.1)',
          inactiveTintColor: 'white',
          inactiveBackgroundColor: '#051439',
          activeBackgroundColor: '#051439',
          style: {
            height: 84,
          },
          tabStyle: {
            borderRadius: 0,
          },
          labelStyle: {
            color: '#FBFBFB',
            fontFamily: 'HelveticaNeue',
            fontWeight: 'bold',
            fontSize: 12,
            marginBottom: 5,
            textTransform: 'uppercase',
          },
        }}>
        <Tab.Screen
          name="Radio"
          component={Radio}
          options={{
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{...labelStyle, opacity: focused ? 0.3 : 1}}>
                  RADIO
                </Text>
              );
            },
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={require('../../assets/icono_radio.png')}
                  style={{height: 50, width: 50, opacity: focused ? 0.3 : 1}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Podcast"
          component={Podcast}
          options={{
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{...labelStyle, opacity: focused ? 0.3 : 1}}>
                  Podcast
                </Text>
              );
            },
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={require('../../assets/podcast.png')}
                  style={{...styleIcon, opacity: focused ? 0.3 : 1}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Events"
          component={Events}
          options={{
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{...labelStyle, opacity: focused ? 0.3 : 1}}>
                  Eventos
                </Text>
              );
            },
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={require('../../assets/events.png')}
                  style={{...styleIcon, opacity: focused ? 0.3 : 1}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Releases"
          component={Releases}
          options={{
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{...labelStyle, opacity: focused ? 0.3 : 1}}>
                  Novedades
                </Text>
              );
            },
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={require('../../assets/releases.png')}
                  style={{...styleIcon, opacity: focused ? 0.3 : 1}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Blog"
          component={Blog}
          options={{
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{...labelStyle, opacity: focused ? 0.3 : 1}}>
                  Blog
                </Text>
              );
            },
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={require('../../assets/blog.png')}
                  style={{...styleIcon, opacity: focused ? 0.3 : 1}}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default () => {
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
