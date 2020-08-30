import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class DeckView extends Component {
  setTitle = (deckTitle) => {
    this.props.navigation.setOptions({
      title: deckTitle + ' Deck',
    });
  };

  render() {
    const { questions, title } = this.props;
    this.setTitle(title);
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <Text>{questions.length} cards</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
  },
});

function mapStateToProps({ decks }, { route }) {
  const { title } = route.params;
  return {
    title,
    questions: decks[title].questions,
  };
}

export default connect(mapStateToProps)(DeckView);
