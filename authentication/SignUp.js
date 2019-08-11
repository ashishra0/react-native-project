import React from 'react';
import {Text, View, ScrollView, KeyboardAvoidingView, StyleSheet, StatusBar, TouchableOpacity, Dimensions, TextInput} from 'react-native';

import Firebase from './firebase'
import Icon from 'react-native-vector-icons/FontAwesome';
import Spinner from './Spinner'


const { width: WIDTH } = Dimensions.get("window");
class SignUp extends React.Component {
  static navigationOptions = {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#000'
    }
  };

  state = {
    showPass: true,
    press: false,
    email: '',
    password: '',
    error: '',
    loading: false
  }

  showPass = () => {
    if(!this.state.press) {
      this.setState({showPass: false, press: true});
    } else {
      this.setState({showPass: true, press: false})
    }
  }


  handleSignUp = () => {
    const {email, password} = this.state;
    this.setState({error: '', loading: true})
    Firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onSignUpSuccess.bind(this))
      .catch(this.onSignUpFailure.bind(this));
  }

  onSignUpSuccess = () => {
    this.props.navigation.navigate('Login')
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    });
  }

  onSignUpFailure = () => {
    this.setState({error: "Authentication Failed", loading: false})
  }

  renderButton = () => {
    if(this.state.loading) {
      return <Spinner size="small"/>
    }
  }


  render() {
    return (
      <KeyboardAvoidingView style={Styles.wrapper}>
      <StatusBar backgroundColor="#000"/>
        <View style={Styles.scrollViewWrapper}>
          <ScrollView style={Styles.scrollView}>
            <Text style={Styles.loginHeader}>{`Create\nAccount.`}</Text>
            <View style={Styles.viewWrapper}>

            <Text style={Styles.inputText}>Name</Text>
            <TextInput
            style={Styles.input}
            autocorrect={false}
            />
            <Text style={Styles.inputText}>Email</Text>
            <TextInput
            value={this.state.email}
            onChangeText={email => this.setState({email: email})}
            style={Styles.input}
            autocorrect={false}
            />
            <Text style={Styles.inputText}>Password</Text>
            <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({password: password})}
            style={Styles.input}
            autocorrect={false}
            secureTextEntry={this.state.showPass}
            />
            <TouchableOpacity
            style={Styles.showPassword}
            onPress={this.showPass.bind(this)}
          >
            <Text style={{color: '#fff', fontWeight: '700', marginBottom: 10, marginTop: 30, marginRight: 20}}>{this.state.press === false ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={this.handleSignUp.bind(this)}
              style={Styles.login}
            >
            <Text style={{color: '#fff', textAlign: 'center', position: 'relative', marginBottom: 0, fontWeight: '500'}}>Sign In</Text>
            </TouchableOpacity>
            {this.renderButton()}
            <Text style={Styles.newText}>{this.state.error}</Text>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const Styles = StyleSheet.create({
  loginHeader: {
    fontSize: 30,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 10,
  },
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#000'
  },
  scrollViewWrapper: {
    marginTop: 10,
    flex: 1
  },
  scrollView: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    flex: 1
  },
  fbLogin: {
    height: 45,
    width: WIDTH - 55,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#296ED5',
    marginTop: 10
  },
  ghLogin: {
    height: 45,
    width: WIDTH - 55,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#383933',
    marginTop: 10
  },
  login: {
    height: 45,
    width: WIDTH - 55,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#E6D42F',
    marginBottom: 30
  },
  loginNew: {
    height: 45,
    width: WIDTH - 55,
    borderRadius: 10,
    justifyContent: 'center',
    // backgroundColor: '#E6D42F',
    marginBottom: 5
  },
  btnEye: {
    position: 'absolute',
    top: 0,
    right: 30,
    alignItems: 'flex-end'
  },
  showPassword: {
    position: 'absolute',
    right: 0,
    bottom: 38
    
  },
  input: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    display: 'flex',
    color: '#fff',
    borderBottomColor: '#b4b4b4',
  },
  inputText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
    marginTop: 30
  },
  viewWrapper: {
    display: 'flex',
    marginBottom: 30
  },
  newText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 10,
    marginTop: 20
  }
})

export default SignUp;