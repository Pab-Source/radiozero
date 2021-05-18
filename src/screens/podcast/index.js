import React, {useContext} from 'react';
import {ScrollView, StyleSheet, View, ActivityIndicator} from 'react-native';
import GlobalState from '../../statement/GlobalContext';
import CardPodcast from '../../components/cardPodcast';

const Podcast = () => {
  const {
    podcast: {isLoadingPodcast, dataPodcast},
  } = useContext(GlobalState);

  if (isLoadingPodcast) {
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
      {dataPodcast.map(item => (
        <CardPodcast key={item.id} item={item} />
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

export default Podcast;
