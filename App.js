import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import Counter from "./Counter";



export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Counter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
});
