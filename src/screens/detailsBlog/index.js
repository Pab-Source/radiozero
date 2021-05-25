import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Menu from '../../components/menu';
import HTML, {IGNORED_TAGS} from 'react-native-render-html';

const DetailBlog = ({
  route: {
    params: {item},
  },
}) => {
  return (
    <>
      <Menu />
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#000000" animated={true} />
        <View style={styles.wrapperImage}>
          <Image source={{uri: item.dataImage.image}} style={styles.image} />
          <Text style={styles.textTitle}>{item.title.rendered}</Text>
        </View>

        <View style={styles.contentArticule}>
          <HTML
            imagesMaxWidth={Dimensions.get('window').width}
            source={{
              html: item.content.rendered,
            }}
            contentWidth={Dimensions.get('window').width}
            ignoredTags={[
              ...IGNORED_TAGS,
              'iframe',
              'img',
              'picture',
              'figure',
            ]}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperImage: {
    backgroundColor: '#051439',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 280,
    opacity: 0.7,
  },
  textTitle: {
    backgroundColor: 'transparent',
    position: 'absolute',
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 32,
    maxWidth: '85%',
    color: 'white',
    paddingBottom: 12,
    borderBottomColor: '#DC4E32',
    borderBottomWidth: 5,
  },
  contentArticule: {
    margin: 20,
  },
});

export default DetailBlog;
