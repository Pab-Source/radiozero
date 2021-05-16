import React, {useContext} from 'react';
import GlobalState from '../../statement/GlobalContext';
import {View, ActivityIndicator, StyleSheet, ScrollView} from 'react-native';
import CardBlog from '../../components/cardBlog';

const Blog = () => {
  const {
    blog: {isLoadingBlog, dataBlog},
  } = useContext(GlobalState);

  if (isLoadingBlog) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 40}}
      style={styles.container}>
      {dataBlog.map(item => (
        <CardBlog key={item.id} item={item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    backgroundColor: '#051439',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#051439',
    paddingHorizontal: '4%',
    paddingTop: 16,
  },
});

export default Blog;
