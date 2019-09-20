import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Content = (props) => {
  return (
    <View style={styles.container}>
      <Text>{ props.number }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#00ff00',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Content;
