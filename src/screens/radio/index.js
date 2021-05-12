import React from 'react';
import {Text, View} from 'react-native';
import Menu from '../../components/menu';

const Radio = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#051439', flex: 1}}>
      <Menu {...{navigation}} />
      <Text>Radio</Text>
    </View>
  );
};

export default Radio;
