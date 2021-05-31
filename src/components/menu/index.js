import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  StatusBar,
  SafeAreaView,
  Dimensions,
  Linking,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import MenuPlayer from '../menuPlayer';
import {navigate, goBack} from '../../navigator/NavigationService';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Menu = () => {
  const [visible, setVisible] = useState(false);

  const {name} = useRoute();

  const condition = name === 'DetailsBlog' || name === 'DetailsPodcast';

  const handleNavigate = route => {
    setVisible(false);
    navigate(route);
  };

  const menu = (
    <View
      style={{
        height: Dimensions.get('window').height * 0.1,
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        style={styles.wrapperIcon}
        onPress={() => setVisible(!visible)}>
        <Image
          style={styles.icon}
          source={require('../../../assets/iconmenu.png')}
        />
      </TouchableOpacity>
      <View style={styles.wrapperLogo}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://radiozero.fm/wp-content/uploads/2021/03/logo-radio-zero-fm.png',
          }}
        />
      </View>
      {condition && (
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingRight: 10,
          }}
          onPress={() => {
            goBack();
          }}>
          <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
            X
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: visible ? '#000000' : '#000000',
      }}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      {!visible && menu}
      <Modal
        visible={visible}
        style={styles.modal}
        transparent
        animationType="fade">
        <SafeAreaView style={{flex: 1}}>
          {visible && menu}
          <TouchableOpacity
            style={{flex: 1}}
            opacity={1}
            onPress={() => setVisible(false)}>
            <View style={styles.contentModal}>
              <TouchableOpacity
                onPress={() => handleNavigate('Radio')}
                style={styles.item}>
                <Icon name="play-circle" size={27} color="white" />
                <Text style={styles.itemText}>RADIO</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleNavigate('Podcast')}
                style={styles.item}>
                <Icon name="podcast" size={27} color="white" />
                <Text style={styles.itemText}>PODCAST</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleNavigate('Events')}
                style={styles.item}>
                <Icon name="calendar-alt" size={27} color="white" />
                <Text style={styles.itemText}>PROGRAMACIÓN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleNavigate('Releases')}
                style={styles.item}>
                <Icon name="compact-disc" size={27} color="white" />
                <Text style={styles.itemText}>LANZAMIENTOS</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleNavigate('Blog')}
                style={styles.item}>
                <Icon name="blogger-b" size={27} color="white" />
                <Text style={styles.itemText}>BLOG</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'mailto:info@radiozero.fm?subject=Email desde la app',
                  )
                }
                style={styles.item}>
                <Icon name="envelope-open" size={27} color="white" />
                <Text style={styles.itemText}>CONTACTANOS</Text>
              </TouchableOpacity>

              <View style={styles.socialWrapper}>
                <Image
                  style={{height: 65, width: 65, marginRight: 30}}
                  source={require('../../../assets/insta.png')}
                />
                <Image
                  style={{height: 65, width: 65, marginRight: 30}}
                  source={require('../../../assets/face.png')}
                />
                <Image
                  style={{height: 65, width: 65}}
                  source={require('../../../assets/twitt.png')}
                />
              </View>
              <MenuPlayer />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: Dimensions.get('window').height * 0.1,
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
    borderColor: 'white',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    backgroundColor: '#051439',
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
    marginTop: '6%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Menu;
