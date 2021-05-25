import React, {useContext, useState} from 'react';
import {View, ActivityIndicator, StyleSheet, FlatList} from 'react-native';
import CardBlog from '../../components/cardBlog';
import GlobalState from '../../statement/GlobalContext';

const Releases = () => {
  const {
    releases: {isLoadingReleases, dataReleases, errorReleases, getDataReleases},
  } = useContext(GlobalState);

  const [number, setNumber] = useState(2);

  if (isLoadingReleases) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <FlatList
      onEndReached={() => {
        getDataReleases(number);
        !errorReleases && setNumber(number + 1);
      }}
      onEndReachedThreshold={0.1}
      contentContainerStyle={{paddingBottom: 40}}
      style={styles.container}
      data={dataReleases}
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

export default Releases;
