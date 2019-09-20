import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Start from './start';
import Content from './content';
import End from './end';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 3
    }
  }
  sum = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  res = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Start name="Calculadora"></Start>
        <Content number={ this.state.number }></Content>
        <End sum={ this.sum } res={ this.res }></End>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
