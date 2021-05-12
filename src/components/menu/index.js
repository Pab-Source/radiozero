import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';

import {navigate} from '../../navigator/navigatorService';

const Menu = () => {
  const [visible, setVisible] = useState(false);

  const handleNavigate = route => {
    setVisible(false);
    navigate(route);
  };
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: visible ? '#051439' : '#000000',
      }}>
      <StatusBar backgroundColor={visible ? '#051439' : '#000000'} />
      <TouchableOpacity
        style={styles.wrapperIcon}
        onPress={() => setVisible(true)}>
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
      <Modal visible={visible} style={styles.modal} transparent>
        <TouchableOpacity
          style={{flex: 1}}
          opacity={1}
          onPress={() => setVisible(false)}>
          <View style={styles.contentModal}>
            <TouchableOpacity
              onPress={() => handleNavigate('Radio')}
              style={styles.item}>
              <Image
                style={{width: 27, height: 27}}
                source={require('../../../assets/icono_radio.png')}
              />
              <Text style={styles.itemText}>RADIO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleNavigate('Events')}
              style={styles.item}>
              <Image
                style={{width: 27, height: 27}}
                source={require('../../../assets/events.png')}
              />
              <Text style={styles.itemText}>EVENTOS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleNavigate('Releases')}
              style={styles.item}>
              <Image
                style={{width: 27, height: 27}}
                source={require('../../../assets/releases.png')}
              />
              <Text style={styles.itemText}>LANZAMIENTOS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleNavigate('Podcast')}
              style={styles.item}>
              <Image
                style={{width: 27, height: 27}}
                source={require('../../../assets/radio2.png')}
              />
              <Text style={styles.itemText}>PODCAST</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleNavigate('Zero')}
              style={styles.item}>
              <Image
                style={{width: 27, height: 27}}
                source={require('../../../assets/tv.png')}
              />
              <Text style={styles.itemText}>ZERO TV</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleNavigate('Blog')}
              style={styles.item}>
              <Image
                style={{width: 27, height: 27}}
                source={require('../../../assets/blog2.png')}
              />
              <Text style={styles.itemText}>BLOG</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleNavigate('Contact')}
              style={styles.item}>
              <Image
                style={{width: 27, height: 27}}
                source={require('../../../assets/contact.png')}
              />
              <Text style={styles.itemText}>CONTACTANOS</Text>
            </TouchableOpacity>

            <View style={styles.socialWrapper}>
              <Image
                style={{height: 80, width: 80, marginRight: 30}}
                source={require('../../../assets/insta.png')}
              />
              <Image
                style={{height: 80, width: 80, marginRight: 30}}
                source={require('../../../assets/face.png')}
              />
              <Image
                style={{height: 80, width: 80}}
                source={require('../../../assets/twitt.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
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
  modal: {
    flex: 1,
  },
  contentModal: {
    marginTop: 60,
    height: '70%',
    borderColor: 'white',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    padding: 20,
  },
  item: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginTop: 5,
    marginLeft: 18,
    color: 'white',
    fontWeight: '200',
    fontFamily: 'HelveticaNeue',
    fontSize: 20,
  },
  socialWrapper: {
    marginTop: 59,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Menu;
