import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import * as firebase from 'firebase';

export default class LoadingScreen extends React.Component {
  static navigationOptions = {
    title: 'Loading',
    header: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authenticate => {
      if (authenticate) {
        this.props.navigation.replace('Home');
      } else {
        this.props.navigation.replace('SignIn');
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color='red' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
