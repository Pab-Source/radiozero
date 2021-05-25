import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet, Text} from 'react-native';
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
    fontSize: 8,
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
    inactiveTintColor: 'white',
    activeTintColor: 'rgba(255, 255, 255, 0.1)',
    inactiveBackgroundColor: '#051439',
    activeBackgroundColor: '#051439',
    style: {
      height: 84,
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
            <Icon
              name="play-circle"
              size={42}
              color="white"
              style={{opacity: focused ? 0.3 : 1}}
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
            <Icon
              name="podcast"
              size={42}
              color="white"
              style={{opacity: focused ? 0.3 : 1}}
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
              Programacion
            </Text>
          );
        },

        tabBarIcon: ({focused}) => {
          return (
            <Icon
              name="calendar-alt"
              size={42}
              color="white"
              style={{opacity: focused ? 0.3 : 1}}
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
              Lanzamientos
            </Text>
          );
        },

        tabBarIcon: ({focused}) => {
          return (
            <Icon
              name="compact-disc"
              size={42}
              color="white"
              style={{opacity: focused ? 0.3 : 1}}
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
            <Icon
              name="blogger-b"
              size={42}
              color="white"
              style={{opacity: focused ? 0.3 : 1}}
            />
          );
        },
      },
    },
  ],
};
