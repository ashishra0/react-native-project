import React from "react";
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  TextInput
} from "react-native";
import Spinner from "./Spinner";
import Firebase from "./firebase";
import Icon from "react-native-vector-icons/FontAwesome";

const { width: WIDTH } = Dimensions.get("window");
class Login extends React.Component {
  static navigationOptions = {
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#000"
    }
  };

  state = {
    showpass: true,
    press: false,
    email: "",
    password: "",
    error: "",
    loading: false
  };

  showPass = () => {
    if (!this.state.press) {
      this.setState({ showPass: false, press: true });
    } else {
      this.setState({ showPass: true, press: false });
    }
  };

  onButtonPress = () => {
    this.setState({ error: "", loading: true });
    Firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate("Semester"))
      .catch(this.onLoginFailure.bind(this));
  };

  renderButton = () => {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
  };

  onLoginSuccess = () => {
    this.props.navigation.navigate("Semester");
    this.setState({
      email: "",
      password: "",
      error: "",
      loading: false
    });
  };

  onLoginFailure = () => {
    this.setState({ error: "Authentication Failed", loading: false });
  };

  render() {
    return (
      <KeyboardAvoidingView style={Styles.wrapper}>
        <StatusBar backgroundColor="#000" />
        <View style={Styles.scrollViewWrapper}>
          <ScrollView style={Styles.scrollView}>
            <Text style={Styles.loginHeader}>{`Welcome\nBack.`}</Text>
            <TouchableOpacity style={Styles.fbLogin}>
              <Icon
                name="facebook"
                size={20}
                style={{
                  color: "#fff",
                  marginLeft: 10,
                  position: "relative",
                  top: 18,
                  left: 18
                }}
              />
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  position: "relative",
                  marginBottom: 18,
                  fontWeight: "400"
                }}
              >
                Sign In with Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.ghLogin}>
              <Icon
                name="github"
                size={20}
                style={{
                  color: "#fff",
                  marginLeft: 10,
                  position: "relative",
                  top: 18,
                  left: 18
                }}
              />
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  position: "relative",
                  marginBottom: 18,
                  fontWeight: "400"
                }}
              >
                Sign In with GitHub
              </Text>
            </TouchableOpacity>
            <Text style={Styles.inputText}>Email</Text>
            <TextInput
              value={this.state.email}
              onChangeText={email => this.setState({ email: email })}
              style={Styles.input}
              autocorrect={false}
            />
            <Text style={Styles.inputText}>Password</Text>
            <TextInput
              value={this.state.password}
              onChangeText={password => this.setState({ password: password })}
              style={Styles.input}
              autocorrect={false}
              secureTextEntry={this.state.showpass}
            />
            {/* <TouchableOpacity
            style={Styles.showPassword}
            onPress={this.showPass.bind(this)}
          >
            <Text style={{color: '#fff', fontWeight: '700', marginBottom: 172, marginTop: 0, marginRight: 20}}>{this.state.press === false ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity> */}
            <TouchableOpacity
              style={Styles.login}
              onPress={this.onButtonPress.bind(this)}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  position: "relative",
                  marginBottom: 0,
                  fontWeight: "500"
                }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
            {this.renderButton()}
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const Styles = StyleSheet.create({
  loginHeader: {
    fontSize: 30,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 10
  },
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: "#000"
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
    justifyContent: "center",
    backgroundColor: "#296ED5",
    marginTop: 10
  },
  ghLogin: {
    height: 45,
    width: WIDTH - 55,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#383933",
    marginTop: 10
  },
  login: {
    height: 45,
    width: WIDTH - 55,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#E6D42F",
    marginBottom: 50
  },
  btnEye: {
    position: "absolute",
    top: 0,
    right: 30,
    alignItems: "flex-end"
  },
  input: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    display: "flex",
    color: "#fff",
    borderBottomColor: "#b4b4b4",
    marginBottom: 30
  },
  inputText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 10,
    marginTop: 30
  },
  showPassword: {
    position: "absolute",
    right: 0,
    bottom: 1
  }
});

export default Login;
