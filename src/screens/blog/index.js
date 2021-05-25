import React, {useContext, useState} from 'react';
import GlobalState from '../../statement/GlobalContext';
import {View, ActivityIndicator, StyleSheet, FlatList} from 'react-native';
import CardBlog from '../../components/cardBlog';

const Blog = () => {
  const {
    blog: {isLoadingBlog, dataBlog, errorBlog, getDataBlog},
  } = useContext(GlobalState);

  const [number, setNumber] = useState(2);

  if (isLoadingBlog) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <FlatList
      onEndReached={() => {
        getDataBlog(number);
        !errorBlog && setNumber(number + 1);
      }}
      onEndReachedThreshold={0.1}
      contentContainerStyle={{paddingBottom: 40}}
      style={styles.container}
      data={dataBlog}
      renderItem={({item}) => <CardBlog item={item} />}
      keyExtractor={item => item.id}
    />
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
