import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Radio from '../screens/radio';
import Podcast from '../screens/podcast';
import Events from '../screens/events';
import Releases from '../screens/releases';
import Blog from '../screens/blog';

const Tab = createBottomTabNavigator();

const styleIcon = {
  height: 40,
  width: 40,
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'white',
          inactiveBackgroundColor: '#051439',
          activeBackgroundColor: '#051439',
          style: {
            height: 84,
            borderRadius: 0,
          },
          tabStyle: {
            borderRadius: 0,
          },
          labelStyle: {
            color: '#FBFBFB',
            fontSize: 12,
            marginBottom: 5,
            textTransform: 'uppercase',
          },
        }}>
        <Tab.Screen
          name="Radio"
          component={Radio}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../../assets/icono_radio.png')}
                style={{height: 50, width: 50}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Podcast"
          component={Podcast}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../../assets/podcast.png')}
                style={styleIcon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Events"
          component={Events}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../../assets/events.png')}
                style={styleIcon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Releases"
          component={Releases}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../../assets/releases.png')}
                style={styleIcon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Blog"
          component={Blog}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../../assets/blog.png')}
                style={styleIcon}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
