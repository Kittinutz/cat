import React from 'react';
import { StyleSheet } from 'react-native';
import Router from './Router/router'
export default class App extends React.Component {
  render() {
    return (
      <Router/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
