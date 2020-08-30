import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import middleware from './middleware';
import reducer from './reducers';

import DeckList from './components/DeckList';
import DeckView from './components/DeckView';

const Tab = createBottomTabNavigator();
const TabNav = () => (
  <Tab.Navigator>
    <Tab.Screen name='Decks' component={DeckList} />
  </Tab.Navigator>
);

const Stack = createStackNavigator();
const Navigation = () => (
  <Stack.Navigator>
    <Stack.Screen name='SpanFluent' component={TabNav} />
    <Stack.Screen name='DeckView' component={DeckView} />
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
