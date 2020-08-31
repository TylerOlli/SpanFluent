import React from 'react';
import { Text, View, Animated } from 'react-native';

const Results = (props) => {
  const { score, questions } = props;

  return (
    <View>
      <Animated.Text>
        {((score / questions.length) * 100).toFixed(0)} %
      </Animated.Text>
      <Text>Correct</Text>
    </View>
  );
};

export default Results;
