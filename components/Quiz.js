import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { connect } from 'react-redux';
import Results from './Results';

class Quiz extends Component {
  UNSAFE_componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    });
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    });
    this.frontOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0],
    });
    this.backOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1],
    });
  }
  state = {
    last: false,
    index: 0,
    side: 'Back',
    score: 0,
  };

  card(front = false) {
    if (this.value >= 90 || front) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 5,
        tension: 8,
      }).start();
      this.setState({
        side: 'Back',
      });
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 5,
        tension: 8,
      }).start();
      this.setState({
        side: 'Front',
      });
    }
  }

  selection = (selectedAns) => {
    const { index } = this.state;
    const { questions } = this.props.deck;
    const { correctAns } = questions[index];
    const isCorrect = selectedAns === correctAns;

    if (index + 1 === questions.length) {
      this.setState((recentState) => ({
        last: true,
        score: isCorrect ? recentState.score + 1 : recentState.score,
      }));
    } else {
      this.setState((recentState) => ({
        index: recentState.index + 1,
        side: 'Front',
        score: isCorrect ? recentState.score + 1 : recentState.score,
      }));
      this.card(true);
    }
  };

  setTitle = (deckTitle) => {
    this.props.navigation.setOptions({
      title: deckTitle + ' Quiz',
    });
  };

  render() {
    const { last, index, score, side } = this.state;
    const { deck } = this.props;
    const { questions } = deck;

    const frontAnimation = {
      transform: [{ rotateY: this.frontInterpolate }],
    };
    const backAnimation = {
      transform: [{ rotateY: this.backInterpolate }],
    };
    this.setTitle(deck.title);

    return (
      <View>
        {!last ? (
          <View style={{ marginTop: -70 }}>
            <View style={styles.container}>
              <Animated.View style={[styles.card, frontAnimation]}>
                <Text>{questions[index].question}</Text>
              </Animated.View>
              <View style={styles.container}>
                <Text>{`${index + 1} / ${questions.length}`}</Text>
              </View>
              <Animated.View
                style={[backAnimation, styles.card, styles.cardBack]}
              >
                <Text>{questions[index].answer}</Text>
              </Animated.View>
              <TouchableOpacity onPress={() => this.card()}>
                <Text>Switch to {side} side</Text>
              </TouchableOpacity>

              <View>
                <TouchableOpacity onPress={() => this.selection('true')}>
                  <Text>True</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.selection('false')}>
                  <Text>False</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <Results score={score} questions={questions} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 300,
    height: 150,
    marginTop: 100,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    backfaceVisibility: 'hidden',
  },
  cardBack: {
    backgroundColor: '#17a2b8',
    position: 'absolute',
    top: 0,
  },
});

function mapStateToProps({ decks }, { route }) {
  const { deckId } = route.params;
  return {
    deck: decks[deckId],
  };
}

export default connect(mapStateToProps)(Quiz);
