import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class DeckView extends Component {
  setTitle = (deckTitle) => {
    this.props.navigation.setOptions({
      title: deckTitle + ' Deck',
    });
  };

  render() {
    const { questions, title, navigation } = this.props;
    this.setTitle(title);
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <Text>{questions.length} cards</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('Quiz', { deckId: title })}
        >
          <Text style={styles.buttonTextDark}>Start Quiz</Text>
        </TouchableOpacity>
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
  addButton: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: 40,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
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
