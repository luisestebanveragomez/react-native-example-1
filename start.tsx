import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const  Start = (props) => {
    return (
      <View style={styles.container}>
        <Text>{ props.name }</Text>
      </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Start;
