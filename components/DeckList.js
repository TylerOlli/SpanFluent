import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { handleInitialData } from '../actions';
import Deck from './Deck';

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { decks, navigation } = this.props;
    return (
      <ScrollView>
        {decks &&
          Object.keys(decks).map((key) => {
            const { title, questions } = decks[key];
            return (
              <TouchableOpacity
                key={key}
                onPress={() => navigation.navigate('DeckView', { title: key })}
              >
                <Deck title={title} count={questions.length} />
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    );
  }
}

function mapStateToProps({ decks }) {
  return {
    decks,
  };
}

export default connect(mapStateToProps)(DeckList);
