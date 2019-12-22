import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import * as firebase from 'firebase';
import { Form, Item, Input, Label, Button } from 'native-base';

export default class SigninScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  static navigationOptions = {
    title: 'SignIn'
  };

  signInUser = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.replace('Home');
      })
      .catch(err => {
        alert(err.message);
      });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior='position' enabled>
        <ScrollView>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/logo.png')} />
            <Text>LearnCodeonline.in</Text>
          </View>
          <Form style={styles.form}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='email-address'
                onChangeText={email => this.setState({ email: email })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='email-address'
                onChangeText={password => this.setState({ password: password })}
              />
            </Item>
            <Button
              style={styles.button}
              full
              rounded
              onPress={() => {
                this.signInUser(this.state.email, this.state.password);
              }}
            >
              <Text style={styles.buttonText}>SignIn</Text>
            </Button>
          </Form>
          <View style={styles.footer}>
            <Text>OR</Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('SignUp');
              }}
            >
              <Text>Don't have one? Create a new account.</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 100
  },
  form: {
    padding: 20,
    width: '100%',
    marginBottom: 30
  },
  button: {
    marginTop: 20
  },
  buttonText: {
    color: '#fff'
  },
  footer: {
    alignItems: 'center',
    marginBottom: 100
  }
});
