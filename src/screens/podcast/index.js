import React, {useContext, useState} from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';
import GlobalState from '../../statement/GlobalContext';
import CardPodcast from '../../components/cardPodcast';

const Podcast = () => {
  const {
    podcast: {isLoadingPodcast, dataPodcast, getDataPodcast, errorPodcast},
  } = useContext(GlobalState);

  const [number, setNumber] = useState(2);

  if (isLoadingPodcast) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <FlatList
      onEndReached={() => {
        getDataPodcast(`${number}`);
        !errorPodcast && setNumber(number + 1);
      }}
      onEndReachedThreshold={0.1}
      contentContainerStyle={{paddingBottom: 40}}
      style={styles.container}
      data={dataPodcast}
      renderItem={({item}) => <CardPodcast item={item} />}
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

export default Podcast;
