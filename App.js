import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import Button from "./Button";

const theCount = require("./resources/count.jpg");

export default class App extends Component {

  constructor(props) {
        super(props);
        this.state = { 
          counter: 0,
          history: [],
        };

        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
  }

  plus(e) {
    let current = this.state.counter;
    let currentHistory= this.state.history;
    let time = new Date();
    let entry = "Today at " + time.toLocaleString() + ": Increment from " + current + " to " + (current + 1)
    currentHistory.push(entry);
    if (current < 10) {
      this.setState({ counter: current + 1, history: currentHistory });
    }
    console.log(this.state.history);
  };

  minus(e) {
    let current = this.state.counter;
    let currentHistory= this.state.history;
    let time = new Date();
    let entry = "Today at " + time.toLocaleString() + ": Decrement from " + current + " to " + (current - 1)
    currentHistory.push(entry);
    if (current > 0) {
      this.setState({ counter: current - 1 });     
    }  
    console.log(this.state.history);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appTitle}>The Count</Text>
        <Image style={styles.theCount} source={theCount} />
        <View style={styles.counterControlsContainer}>
          <Button underlayColor="#AF9BBD" onPress={ this.plus } labelText="&#x2b;" disabled={ this.state.counter === 10 }/>
          <Text style={styles.currentNumber}>{ this.state.counter }</Text>
          <Button underlayColor="#AF9BBD" onPress={ this.minus } labelText="&#x2212;" disabled={ this.state.counter === 0 }/>
        </View>
        <Text style={styles.historyTitle}>History</Text>
        <ScrollView>
            { this.state.history.map((entry, i) =>
                <Text key={i}>{ entry }</Text>
            )}
        </ScrollView>
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
    width: 45,
    textAlign: 'center',
    color: '#5a2961',
    fontSize: 40,
    margin: 10,
  },

  historyTitle: {
    marginVertical: 5,
    color: '#5a2961',
    fontSize: 25,
    fontWeight: 'bold',
  }
});
