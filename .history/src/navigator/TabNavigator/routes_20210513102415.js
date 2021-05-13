import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import Radio from '../../screens/radio';
import Podcast from '../../screens/podcast';
import Events from '../../screens/events';
import Releases from '../../screens/releases';
import Blog from '../../screens/blog';
const styles = StyleSheet.create({
  rootStyle: {},
  labelStyle: {
    color: '#FBFBFB',
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  styleIcon: {
    height: 40,
    width: 40,
  },
});
export default {
  navigatorConfig: {
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
  },
  screens: [
    {
      name: 'Radio',
      component: Radio,
      options: {
        tabBarLabel: ({focused}) => {
          return (
            <Text style={{...styles.labelStyle, opacity: focused ? 0.3 : 1}}>
              Radio
            </Text>
          );
        },

        tabBarIcon: ({focused}) => {
          return (
            <Image
              source={require('../../../assets/icono_radio.png')}
              style={{height: 50, width: 50, opacity: focused ? 0.3 : 1}}
            />
          );
        },
      },
    },
    {
      name: 'Podcast',
      component: Podcast,
      options: {
        tabBarLabel: ({focused}) => {
          return (
            <Text style={{...styles.labelStyle, opacity: focused ? 0.3 : 1}}>
              Podcast
            </Text>
          );
        },

        tabBarIcon: ({focused}) => {
          return (
            <Image
              source={require('../../../assets/podcast.png')}
              style={{...styles.styleIcon, opacity: focused ? 0.3 : 1}}
            />
          );
        },
      },
    },
    {
      name: 'Events',
      component: Events,
      options: {
        tabBarLabel: ({focused}) => {
          return (
            <Text style={{...styles.labelStyle, opacity: focused ? 0.3 : 1}}>
              Events
            </Text>
          );
        },

        tabBarIcon: ({focused}) => {
          return (
            <Image
              source={require('../../../assets/events.png')}
              style={{...styles.styleIcon, opacity: focused ? 0.3 : 1}}
            />
          );
        },
      },
    },
    {
      name: 'Releases',
      component: Releases,
      options: {
        tabBarLabel: ({focused}) => {
          return (
            <Text style={{...styles.labelStyle, opacity: focused ? 0.3 : 1}}>
              Releases
            </Text>
          );
        },

        tabBarIcon: ({focused}) => {
          return (
            <Image
              source={require('../../../assets/releases.png')}
              style={{...styles.styleIcon, opacity: focused ? 0.3 : 1}}
            />
          );
        },
      },
    },
    {
      name: 'Blog',
      component: Blog,
      options: {
        tabBarLabel: ({focused}) => {
          return (
            <Text style={{...styles.labelStyle, opacity: focused ? 0.3 : 1}}>
              Blog
            </Text>
          );
        },

        tabBarIcon: ({focused}) => {
          return (
            <Image
              source={require('../../../assets/blog.png')}
              style={{...styles.styleIcon, opacity: focused ? 0.3 : 1}}
            />
          );
        },
      },
    },
  ],
};
