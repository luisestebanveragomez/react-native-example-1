import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const End = (props) => {
  return(
    <View style={styles.container}>
      <Button
        title="Sum"
        onPress={ () => { props.sum(); } }
      />
      <Button
        title="Res"
        onPress={ () => { props.res(); } }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc'
  }
});

export default End;
