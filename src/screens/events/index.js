import React, {useContext, useState} from 'react';
import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import GlobalState from '../../statement/GlobalContext';
import CardBlog from '../../components/cardBlog';

const Events = () => {
  const {
    events: {isLoadingEvents, dataEvents, errorEvents, getDataEvents},
  } = useContext(GlobalState);

  const [number, setNumber] = useState(2);

  if (isLoadingEvents) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <FlatList
      onEndReached={() => {
        getDataEvents(number);
        !errorEvents && setNumber(number + 1);
      }}
      onEndReachedThreshold={0.1}
      contentContainerStyle={{paddingBottom: 40}}
      style={styles.container}
      data={dataEvents}
      renderItem={({item}) => <CardBlog item={item} screen="events" />}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#051439',
    paddingTop: 16,
    paddingHorizontal: '4%',
  },
  containerLoading: {
    backgroundColor: '#051439',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Events;
