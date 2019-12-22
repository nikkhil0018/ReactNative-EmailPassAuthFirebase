import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'native-base';

import * as firebase from 'firebase';

export default class HomeScree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      uid: ''
    };
  }

  componentDidMount() {
    var user = firebase.auth().currentUser;
    if (user != null) {
      this.setState({
        name: user.displayName,
        email: user.email,
        uid: user.uid
      });
    } else {
      this.props.navigation.replace('SignIn');
    }
  }

  signoutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.replace('SignIn');
      })
      .catch(err => {
        alert(err.message);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} />
          <Text>LearnCodeOnline.in</Text>
        </View>
        <View style={styles.userDetails}>
          <Text>Hey {this.state.name}</Text>
          <Text>You are signIn as: {this.state.email}</Text>
          <Text>Your UID: {this.state.uid}</Text>
        </View>
        <Button
          full
          rounded
          success
          onPress={() => {
            this.signoutUser();
          }}
        >
          <Text style={styles.buttonText}>SignOut</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 20
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 100
  },
  userDetails: {},

  button: {
    marginTop: 20
  },
  buttonText: {
    color: '#fff'
  }
});
