import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';

const Menu = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.wrapperIcon}>
        <Image
          style={styles.icon}
          source={require('../../../assets/iconmenu.png')}
        />
      </TouchableOpacity>
      <View style={styles.wrapperLogo}>
        <Image
          style={styles.logo}
          source={require('../../../assets/logo.png')}
        />
      </View>
      <Modal visible></Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperIcon: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  wrapperLogo: {
    flexBasis: '80%',
    alignItems: 'center',
  },
  logo: {
    height: 43,
    width: 107,
  },
  icon: {
    width: 43,
    height: 43,
  },
});

export default Menu;
