import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import middleware from './middleware';
import reducer from './reducers';

import DeckList from './components/DeckList';
import DeckView from './components/DeckView';
import Quiz from './components/Quiz';
import Results from './components/Results';

const Stack = createStackNavigator();
const Navigation = () => (
  <Stack.Navigator>
    <Stack.Screen name='DeckList' component={DeckList} />
    <Stack.Screen name='DeckView' component={DeckView} />
    <Stack.Screen name='Quiz' component={Quiz} />
    <Stack.Screen name='Results' component={Results} />
  </Stack.Navigator>
);

export default class App extends Component {
  render() {
    const store = createStore(reducer, middleware);

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar />
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}
