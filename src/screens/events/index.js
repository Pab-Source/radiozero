import React, {useContext} from 'react';
import {View, StyleSheet, ActivityIndicator, ScrollView} from 'react-native';
import GlobalState from '../../statement/GlobalContext';
import CardBlog from '../../components/cardBlog';

const Events = () => {
  const {
    events: {isLoadingEvents, dataEvents},
  } = useContext(GlobalState);

  if (isLoadingEvents) {
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
      {dataEvents.map(item => (
        <CardBlog key={item.id} item={item} screen="events" />
      ))}
    </ScrollView>
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
