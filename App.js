import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Button from "./Button";

const theCount = require("./resources/count.jpg");

export default class App extends Component {

  onPress(e) {
    console.log("pressed");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appTitle}>The Count</Text>
        <Image style={styles.theCount} source={theCount} />
        <View style={styles.counterControlsContainer}>
          <Button underlayColor="#AF9BBD" onPress={ this.onPress } labelText="&#x2b;"/>
          <Text style={styles.currentNumber}>0</Text>
          <Button underlayColor="#AF9BBD" onPress={ this.onPress } labelText="&#x2212;"/>
        </View>
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

  appTitle: {
    marginVertical: 5,
    color: '#5a2961',
    fontSize: 40,
    fontWeight: 'bold',
  },

  theCount: {
    marginVertical: 5,
    width: 240,
    height: 160,
  },

  counterControlsContainer: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  currentNumber: {
    color: '#5a2961',
    fontSize: 40,
    margin: 10,
  },
});
