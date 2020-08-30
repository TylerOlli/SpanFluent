import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Deck = (props) => {
  const { title, count } = props;

  return (
    <View style={styles.deckContainer}>
      <Text>{title}</Text>
      <Text>{count} cards</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  deckContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 25,
    borderRadius: 10,
    backgroundColor: '#007bff',
  },
});

export default Deck;
