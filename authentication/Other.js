import React from 'react';
import {Text, View, ScrollView, KeyboardAvoidingView, StyleSheet, StatusBar, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width: WIDTH } = Dimensions.get("window");

class other extends React.Component {
  static navigationOptions = {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#000'
    },
  };
  render() {
    return (
      <KeyboardAvoidingView style={Styles.wrapper}>
      <StatusBar backgroundColor="#000"/>
        <View style={Styles.scrollViewWrapper}>
          <ScrollView style={Styles.scrollView}>
            <View style={Styles.viewContainer}>
            <TouchableOpacity
              style={Styles.fbLogin}
            >
            <Icon name="facebook" size={20} style={{ color: '#4169E1', marginLeft: 8, position: 'relative', top: 20, left: 18, alignSelf: 'flex-start', marginTop: 7, paddingTop: 8, flexDirection: 'row'}}/>
            <Text style={{color: '#4169E1', textAlign: 'center', position: 'relative', marginBottom: 24, fontWeight: '500', fontSize: 18, paddingBottom: 10, flexDirection: 'row'}}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.ghLogin}
            >
            <Icon name="github" size={20} style={{ color: '#00FF00', marginLeft: 8, position: 'relative', top: 20, left: 18, alignSelf: 'flex-start', marginTop: 7, paddingTop: 8, flexDirection: 'row'}}/>
            <Text style={{color: '#00FF00', textAlign: 'center', position: 'relative', marginBottom: 24, fontWeight: '500', fontSize: 18, paddingBottom: 10, flexDirection: 'row'}}>Github</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.twitterLogin}
            >
            <Icon name="twitter" size={20} style={{ color: '#00FFFF', marginLeft: 8, position: 'relative', top: 20, left: 18, alignSelf: 'flex-start', marginTop: 7, paddingTop: 8, flexDirection: 'row'}}/>
            <Text style={{color: '#00FFFF', textAlign: 'center', position: 'relative', marginBottom: 24, fontWeight: '500', fontSize: 18, paddingBottom: 10, flexDirection: 'row'}}>Twitter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.createLogin}
            >
            <Text style={{color: '#fff', textAlign: 'center', position: 'relative', marginBottom: 0, fontWeight: '500', fontSize: 18}}>Create Account</Text>
            </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const Styles = StyleSheet.create({
  loginHeader: {
    fontSize: 38,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 10,
  },
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center'
  },
  scrollViewWrapper: {
    marginTop: 100,
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
    borderRadius: 40,
    justifyContent: 'center',
    backgroundColor: '#000',
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#4169E1'
  },
  twitterLogin: {
    height: 45,
    width: WIDTH - 55,
    borderRadius: 40,
    justifyContent: 'center',
    backgroundColor: '#000',
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#00FFFF'
  },
  ghLogin: {
    height: 45,
    width: WIDTH - 55,
    borderRadius: 40,
    justifyContent: 'center',
    backgroundColor: '#000',
    marginTop: 20,
    borderColor: '#00FF00',
    borderWidth: 2
  },
  createLogin: {
    height: 45,
    width: WIDTH - 55,
    borderRadius: 40,
    justifyContent: 'center',
    backgroundColor: '#000',
    marginTop: 20,
    borderColor: '#fff',
    borderWidth: 2
  },
  login: {
    height: 45,
    width: WIDTH - 55,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#E6D42F',
    marginBottom: 50
  },
  btnEye: {
    position: 'absolute',
    top: 0,
    right: 30,
    alignItems: 'flex-end'
  },
  viewContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  showPassword: {
    alignSelf: 'flex-end',
    position: 'absolute'
  },
  options: {
    alignSelf: 'flex-start',
    marginTop: 25
  }
})

export default other;