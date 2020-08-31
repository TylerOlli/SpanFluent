import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import { addCard } from '../utils/api';
import { newCard } from '../actions';

class NewCard extends Component {
  state = {
    front: '',
    back: '',
  };
  setTitle = (cardTitle) => {
    this.props.navigation.setOptions({
      title: cardTitle + ' Add Card',
    });
  };
  handleOnchange = (input, flag) => {
    if (flag === 'front') {
      this.setState({
        front: input,
      });
    } else if (flag === 'back') {
      this.setState({
        back: input,
      });
    }
  };

  handleSubmit = () => {
    const { dispatch, route, navigation } = this.props;
    const { front, back } = this.state;
    const { deckId } = route.params;

    const card = {
      question: front,
      answer: back,
    };

    dispatch(newCard(card, deckId));
    addCard(card, deckId);
    navigation.navigate('DeckView', { title: deckId });
  };
  render() {
    const { front, back } = this.state;
    const { title } = this.props;
    this.setTitle(title);

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', height: 40 }}>
          <TextInput
            style={styles.input}
            value={front}
            placeholder={'Front'}
            onChangeText={(input) => this.handleOnchange(input, 'front')}
          />
        </View>
        <View style={{ flexDirection: 'row', height: 40 }}>
          <TextInput
            style={styles.input}
            value={back}
            placeholder={'Back'}
            onChangeText={(input) => this.handleOnchange(input, 'back')}
          />
        </View>
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>Add Card</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 0.9,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    padding: 5,
    backgroundColor: '#ffffff',
  },
});

function mapStateToProps(_, { route }) {
  const { deckId } = route.params;
  return {
    title: deckId,
  };
}
export default connect(mapStateToProps)(NewCard);
