import React, {useContext} from 'react';
import {View, ActivityIndicator, StyleSheet, ScrollView} from 'react-native';
import CardBlog from '../../components/cardBlog';
import GlobalState from '../../statement/GlobalContext';

const Releases = () => {
  const {
    releases: {isLoadingReleases, dataReleases},
  } = useContext(GlobalState);

  if (isLoadingReleases) {
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
      {dataReleases.map(item => (
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

export default Releases;
