import React from 'react';
import { StyleSheet, Text, View, Image, Button, Animated, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import Logo from '../assets/newadminlogo.png';

const { width: WIDTH } = Dimensions.get("window");
export default class Main extends React.Component {
  static navigationOptions = {
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#000"
    }
  };

  componentWillMount() {
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1500
    }).start()
  }

  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    })
    const animatedStyle = {
      transform: [
        { rotate: interpolateRotation}
      ]
    }
    return (  
      <View style={styles.container}>
      <StatusBar backgroundColor="#000"/>
        <View style={styles.topContainer}>
          <Text style={styles.h1}>Previous Exam Papers</Text>
          <Text style={styles.h2}>
            View, Download, Share
          </Text>
        </View>
        <Animated.View style={[styles.middleContainer, animatedStyle]}>
          <Image source={Logo} style={styles.image} />
        </Animated.View>
        <View style={styles.bottomContainer}>
          {/* <View style={styles.buttonContainer}> */}
            {/* <Button
              title="GET STARTED"
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Landing")}
              color="#008F68"
            /> */}
            <TouchableOpacity
               style={styles.fbLogin}
               onPress={() => this.props.navigation.navigate("Landing")}
               >
                <Text
                  style={{
                    color: "#008F68",
                    textAlign: "center",
                    position: "relative",
                    fontWeight: "500",
                    fontSize: 18,
                    paddingBottom: 5,
                    flexDirection: "row"
                  }}
                >
                  GET STARTED
                </Text>
              </TouchableOpacity>
          </View>
        </View>
      // </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000',
    alignItems: 'center',
    width: '100%',
  },
  h1: {
    color: '#008F68',
    fontSize: 35,
  },
  h2: {
    color: '#FAE042',
    fontSize: 18,
    marginTop: 8,
  },
  image: {
    width: 320,
    height: 250,
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#008F68',
    borderRadius: 5,
    padding: 8,
    margin: 8,
  },
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    width: '90%',
    margin: 20,
    padding: 10,
  },
  button: {
    color: '#008F68'
  },
  fbLogin: {
    height: 45,
    width: WIDTH - 55,
    borderRadius: 40,
    justifyContent: "center",
    backgroundColor: "#000",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#008F68"
  },
});