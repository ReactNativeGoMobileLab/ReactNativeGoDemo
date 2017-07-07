/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { NativeModules } from 'react-native';
var gobinddemo = NativeModules.GobindDemo;

export default class ReactNativeGoProject extends Component {
  constructor(props) {
    super(props);
    this.state={sumval: 0,fib1: 0, fib2: 0, fib10: 0};
    gobinddemo.sum(1, 2, (err, sum)=> {
      if(err){
        console.error(err)
      } else {
        this.setState(previousState=>{
          return {sumval: sum}
        })
      }
    })
    var fibcal = [1,2,10];
    for(i in fibcal){
      let iv = fibcal[i];
      gobinddemo.fibonacci(iv, (err, fibval)=>{
        if(err){
          console.error(err)
        } else {
          this.setState(previousState=>{
            let d = {}
            d["fib"+String(iv)] = fibval
            return d
          })
        }
      }) 
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This React Native Go Demo!
        </Text>
        <Text style={styles.instructions}>
          I want test func call  js => android => go
        </Text>
        <Text style={styles.instructions}>
          1+2={this.state.sumval}
        </Text>
    <Text style={styles.instructions}>
          fib1={this.state.fib1}
        </Text>
        <Text style={styles.instructions}>
          fib2={this.state.fib2}
        </Text>
        <Text style={styles.instructions}>
          fib10={this.state.fib10}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeGoProject', () => ReactNativeGoProject);
