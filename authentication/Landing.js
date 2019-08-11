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
  Image
} from "react-native";
import Firebase from "./firebase";
import { YellowBox } from "react-native";
import _ from "lodash";
import Icon from "react-native-vector-icons/FontAwesome";

const { width: WIDTH } = Dimensions.get("window");

YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};
class Landing extends React.Component {
  static navigationOptions = {
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#000"
    }
  };

  componentDidMount() {
    Firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "Semester" : "Landing");
    });
  }

  // this.props.navigation.navigate(user.email === 'admin@admin.com ? 'Screen1' : 'Screen2')

  navigateToLogin() {
    return this.props.navigation.navigate("Login");
  }

  render() {
    return (
      <KeyboardAvoidingView style={Styles.wrapper}>
        <StatusBar backgroundColor="#000" />
        <View style={Styles.scrollViewWrapper}>
          <ScrollView style={Styles.scrollView}>
            <Text style={Styles.loginHeader}>{`Welcome.`}</Text>
            <View style={Styles.viewContainer}>
              <TouchableOpacity
               style={Styles.fbLogin}
               onPress={() => this.props.navigation.navigate("SignUp")}
               >
                <Icon
                  name="plus-circle"
                  size={20}
                  style={{
                    color: "#4169E1",
                    marginLeft: 8,
                    position: "relative",
                    top: 20,
                    left: 18,
                    alignSelf: "flex-start",
                    marginTop: 7,
                    paddingTop: 8,
                    flexDirection: "row"
                  }}
                />
                <Text
                  style={{
                    color: "#4169E1",
                    textAlign: "center",
                    position: "relative",
                    marginBottom: 24,
                    fontWeight: "500",
                    fontSize: 18,
                    paddingBottom: 10,
                    flexDirection: "row"
                  }}
                >
                  Create Account
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.ghLogin}
                onPress={() => this.props.navigation.navigate("Login")}
              >
              <Icon
                  name="user"
                  size={20}
                  style={{
                    color: "#fff",
                    marginLeft: 8,
                    position: "relative",
                    top: 20,
                    left: 18,
                    alignSelf: "flex-start",
                    marginTop: 7,
                    paddingTop: 8,
                    flexDirection: "row"
                  }}
                />
                <Text
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    position: "relative",
                    marginBottom: 24,
                    fontWeight: "500",
                    fontSize: 18,
                    paddingBottom: 10,
                    flexDirection: "row"
                  }}
                >
                  Existing User
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.options}
                onPress={() => this.props.navigation.navigate("Other")}
              >
                <Text
                  style={{ color: "#fff", fontSize: 18, fontWeight: "400" }}
                >
                  More options
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: "400",
                  marginTop: 40
                }}
              >
                By tapping Continue, Create Account or More options, I agree to
                PEP's Terms of Service, Privacy Policy, Terms and Conditions
              </Text>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const Styles = StyleSheet.create({
  loginHeader: {
    fontSize: 38,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 10
  },
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center"
  },
  scrollViewWrapper: {
    marginTop: 0,
    flex: 1
  },
  scrollView: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 0,
    flex: 1
  },
  fbLogin: {
    height: 45,
    width: WIDTH - 55,
    borderRadius: 40,
    justifyContent: "center",
    backgroundColor: "#000",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#4169E1"
  },
  ghLogin: {
    height: 45,
    width: WIDTH - 55,
    borderRadius: 40,
    justifyContent: "center",
    backgroundColor: "#000",
    marginTop: 20,
    borderColor: "#fff",
    borderWidth: 2
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
  viewContainer: {
    marginTop: 20,
    alignItems: "center"
  },
  showPassword: {
    alignSelf: "flex-end",
    position: "absolute"
  },
  options: {
    alignSelf: "flex-start",
    marginTop: 25
  },
  logo: {
    width: 120,
    height: 100,
    marginBottom: 10
    // alignSelf: 'center',
  }
});

export default Landing;
