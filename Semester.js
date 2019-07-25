import React, { Component } from "react";
import { StyleSheet, Text, View, Picker, Button, TouchableOpacity, Dimensions, TouchableHighlight, ImageBackground, Alert, StatusBar, BackHandler, ToastAndroid, KeyboardAvoidingView } from "react-native";
import firebase from 'firebase'
import Icon from 'react-native-vector-icons/FontAwesome';

const { width: WIDTH } = Dimensions.get("window");
const sem1subjects = [
  "Business Communication",
  "FWT",
  "Introduction to Operating System",
  "Logic Development and Programming Concepts",
  "IT Tools for Statistics I",
  "Computer Fundamentals",
  "WCMS",
  "Business Studies"
];
const sem2subjects = [
  "French A1",
  "German A1",
  "CSWT",
  "Introduction to Python",
  "Introduction to DBMS",
  "IT Tools for Statistics II",
  "Economics",
  "Network Essentials",
  "Accounting",
  "OB"
];
const sem3subjects = ["OTIT", "Banking", "HRM", "SEP", "RDBMS", "ITBP"];
const sem4subjects = ["Marketing", "SSWT", "OOP", "RM"];
const sem5subjects = [
  "E Business",
  "Entrepreneurship",
  "Services Marketing",
  "ITBV",
  "ITTB",
  "ITRC",
  "VVT",
  "AFM"
];
const sem6subjects = [
  "Retail Marketing",
  "Digital Marketing",
  "SCM",
  "E-CRM",
  "BMBP",
  "FQM",
  "SPP"
];
class Semester extends Component {
  static navigationOptions = {
    title: 'Previous Exam Papers',
    headerTitleStyle: {
      color: '#fff',
      fontFamily: 'Roboto',
      marginRight: 30
    },
    headerTintColor: '#000',
    headerStyle: {
      backgroundColor: '#2F3131',
    },
    headerLeft: (
      <TouchableOpacity onPress={() => Alert.alert('Version', '0.0.1.1')} style={{marginLeft: 10}}>
        <Icon name="info-circle" size={30} style={{color: '#fff'}}/>
      </TouchableOpacity>
    )
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
  }

  componentWillMount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
  }

  handleBackButton() {
    ToastAndroid.show('Not permitted', ToastAndroid.SHORT);
    return true;
  }

  state = {
    PickerValueSem: "Semester 1",
    press: false
  };

  logOut = async () => {
    try {
      await firebase.auth().signOut();
        // navigate('Auth');
        this.props.navigation.navigate('Landing')
      } catch (e) {
        console.log(e);
      }
  }

  getItems(val) {
    if (val === "Semester 1") {
      return sem1subjects;
    } else if (val === "Semester 2") {
      return sem2subjects;
    } else if (val === "Semester 3") {
      return sem3subjects;
    } else if (val === "Semester 4") {
      return sem4subjects;
    } else if (val === "Semester 5") {
      return sem5subjects;
    } else {
      return sem6subjects;
    }
  }

  onSubjectChange(value) {
    this.setState({
      PickerValueSubject: value
    });
  }

  checkSubjectValue() {
    this.setState({ press: true });
    if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 1" &&
      this.state.PickerValueSubject == 0
    ) {
      this.props.navigation.navigate("BCpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 1" &&
      this.state.PickerValueSubject == 1
    ) {
      this.props.navigation.navigate("FWTpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 1" &&
      this.state.PickerValueSubject == 2
    ) {
      this.props.navigation.navigate("OSpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 1" &&
      this.state.PickerValueSubject == 3
    ) {
      this.props.navigation.navigate("LDpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 1" &&
      this.state.PickerValueSubject == 4
    ) {
      this.props.navigation.navigate("Stats1papers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 1" &&
      this.state.PickerValueSubject == 5
    ) {
      this.props.navigation.navigate("CFpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 1" &&
      this.state.PickerValueSubject == 6
    ) {
      this.props.navigation.navigate("WCMSpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 1" &&
      this.state.PickerValueSubject == 7
    ) {
      this.props.navigation.navigate("BSpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 2" &&
      this.state.PickerValueSubject == 0
    ) {
      this.props.navigation.navigate("FrenchPapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 2" &&
      this.state.PickerValueSubject == 1
    ) {
      this.props.navigation.navigate("GermanPapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 2" &&
      this.state.PickerValueSubject == 2
    ) {
      this.props.navigation.navigate("CSWTpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 2" &&
      this.state.PickerValueSubject == 3
    ) {
      this.props.navigation.navigate("PythonPapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 2" &&
      this.state.PickerValueSubject == 4
    ) {
      this.props.navigation.navigate("DBMSpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 2" &&
      this.state.PickerValueSubject == 5
    ) {
      this.props.navigation.navigate("Stats2papers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 2" &&
      this.state.PickerValueSubject == 6
    ) {
      this.props.navigation.navigate("EcoPapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 2" &&
      this.state.PickerValueSubject == 7
    ) {
      this.props.navigation.navigate("NEpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 2" &&
      this.state.PickerValueSubject == 8
    ) {
      this.props.navigation.navigate("AccountsPapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 2" &&
      this.state.PickerValueSubject == 9
    ) {
      this.props.navigation.navigate("OBpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 3" &&
      this.state.PickerValueSubject == 0
    ) {
      this.props.navigation.navigate("OTITpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 3" &&
      this.state.PickerValueSubject == 1
    ) {
      this.props.navigation.navigate("BankingPapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 3" &&
      this.state.PickerValueSubject == 2
    ) {
      this.props.navigation.navigate("HRMpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 3" &&
      this.state.PickerValueSubject == 3
    ) {
      this.props.navigation.navigate("SEPpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 3" &&
      this.state.PickerValueSubject == 4
    ) {
      this.props.navigation.navigate("DBMSpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 3" &&
      this.state.PickerValueSubject == 5
    ) {
      this.props.navigation.navigate("ITBPpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 4" &&
      this.state.PickerValueSubject == 0
    ) {
      this.props.navigation.navigate("MarketingPapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 4" &&
      this.state.PickerValueSubject == 1
    ) {
      this.props.navigation.navigate("SSWTpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 4" &&
      this.state.PickerValueSubject == 2
    ) {
      this.props.navigation.navigate("OOPpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 4" &&
      this.state.PickerValueSubject == 3
    ) {
      this.props.navigation.navigate("RMpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 5" &&
      this.state.PickerValueSubject == 0
    ) {
      this.props.navigation.navigate("EBpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 5" &&
      this.state.PickerValueSubject == 1
    ) {
      this.props.navigation.navigate("EntrePapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 5" &&
      this.state.PickerValueSubject == 2
    ) {
      this.props.navigation.navigate("SMpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 5" &&
      this.state.PickerValueSubject == 3
    ) {
      this.props.navigation.navigate("ITBVpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 5" &&
      this.state.PickerValueSubject == 4
    ) {
      this.props.navigation.navigate("ITTBpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 5" &&
      this.state.PickerValueSubject == 5
    ) {
      this.props.navigation.navigate("ITRCpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 5" &&
      this.state.PickerValueSubject == 6
    ) {
      this.props.navigation.navigate("VVTpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 5" &&
      this.state.PickerValueSubject == 7
    ) {
      this.props.navigation.navigate("AFMpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 6" &&
      this.state.PickerValueSubject == 0
    ) {
      this.props.navigation.navigate("RetailMpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 6" &&
      this.state.PickerValueSubject == 1
    ) {
      this.props.navigation.navigate("DMpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 6" &&
      this.state.PickerValueSubject == 2
    ) {
      this.props.navigation.navigate("SCMpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 6" &&
      this.state.PickerValueSubject == 3
    ) {
      this.props.navigation.navigate("ECRMpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 6" &&
      this.state.PickerValueSubject == 4
    ) {
      this.props.navigation.navigate("BMBPpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 6" &&
      this.state.PickerValueSubject == 5
    ) {
      this.props.navigation.navigate("FQMpapers");
    } else if (
      this.state.press &&
      this.state.PickerValueSem == "Semester 6" &&
      this.state.PickerValueSubject == 6
    ) {
      this.props.navigation.navigate("SPPpapers");
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper}>
      {/* // <ImageBackground source={require('./black.png')} style={{flex: 1}}> */}
      <StatusBar backgroundColor="#000"/>
      <View style={styles.container}>
        <Text style={{fontFamily: 'notoserif', fontWeight: 'bold', color: '#fff', fontSize: 18}}>SELECT SEMESTER:</Text>
        <Picker
          style={styles.pickerStyle}
          selectedValue={this.state.PickerValueSem}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ PickerValueSem: itemValue })
          }
        >
          <Picker.Item label="Semester 1" value="Semester 1" />
          <Picker.Item label="Semester 2" value="Semester 2" />
          <Picker.Item label="Semester 3" value="Semester 3" />
          <Picker.Item label="Semester 4" value="Semester 4" />
          <Picker.Item label="Semester 5" value="Semester 5" />
          <Picker.Item label="Semester 6" value="Semester 6" />
        </Picker>
        <Text style={{fontFamily: 'notoserif', fontWeight: 'bold', color: '#fff', fontSize: 18}}>SELECT SUBJECT: </Text>
        <Picker
          style={styles.pickerStyle}
          selectedValue={this.state.PickerValueSubject}
          onValueChange={this.onSubjectChange.bind(this)}
        >
          {this.getItems(this.state.PickerValueSem).map((itemValue, index) => {
            return (
              <Picker.Item label={itemValue} key={`${index}+1`} value={index} />
            );
          })}
        </Picker>
        <TouchableOpacity
               style={styles.fbLogin}
               onPress={this.checkSubjectValue.bind(this)}
               >
                <Text
                  style={{
                    color: "#FF4500",
                    textAlign: "center",
                    position: "relative",
                    fontWeight: "500",
                    fontSize: 18,
                    paddingBottom: 5,
                    flexDirection: "row"
                  }}
                >
                  DISPLAY PAPERS
                </Text>
              </TouchableOpacity>
        <TouchableOpacity
          onPress={this.logOut.bind(this)}
          style={styles.loginNew}
        >
        <Text style={{color: '#fff', textAlign: 'center', position: 'relative', marginBottom: 0, fontWeight: '500'}}>Log out</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Semester;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#000'
  },
  container: {
    flex: 1,
    // display: "flex",
    marginTop: 100,
    alignSelf: "center",
    backgroundColor: '#000'
  },
  input: {
    width: 350,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "rgba(255, 255, 255, 0.7)",
    marginHorizontal: 25
  },
  pickerStyle: {
    marginTop: 10,
    color: '#ADD8E6'
  },
  btn: {
    height: 35,
    width: WIDTH - 55,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: '#FF4500',
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#FF4500'
  },
  newText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold"
    // marginTop: 20
  },
  loginNew: {
    height: 45,
    width: WIDTH - 55,
    borderRadius: 10,
    justifyContent: 'center',
    // backgroundColor: '#E6D42F',
    marginTop: 95
  },
  fbLogin: {
    height: 45,
    width: WIDTH - 55,
    borderRadius: 40,
    justifyContent: "center",
    backgroundColor: "#000",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#FF4500"
  },
});
