import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import useBusiness from '../hooks/useBusiness';

const Details = ({route}) => {
  const [business] = useBusiness(route.params.id);

  if (!business) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{business.name}</Text>
      <FlatList
        data={business.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => (
          <Image style={styles.image} source={{uri: item}} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    marginTop: 20,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 16,
    fontSize: 18,
  },
});

export default Details;
