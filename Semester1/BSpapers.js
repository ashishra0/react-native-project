import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
  Modal,
  Vibration
} from "react-native";
import Pdf from "react-native-pdf";
import Icon from 'react-native-vector-icons/FontAwesome';
import RNDM from 'react-native-easy-downloader';
import firebase from 'firebase';

const DURATION = 1000;
const { width: WIDTH } = Dimensions.get("window");
class BSpapers extends Component {
  static navigationOptions = {
    title: 'Business Studies',
    headerTitleStyle: {
      color: '#000',
      fontFamily: 'Roboto',
      marginLeft: 18
    }
  }

  componentDidMount() {
    firebase.database().ref("papers/semester-1/bs/external/october/download").once('value', (data) => {
      this.setState({ octoberDownloadLink: data.toJSON().link })
    })
    firebase.database().ref("papers/semester-1/bs/external/april/download").once('value', (data) => {
      this.setState({ aprilDownloadLink: data.toJSON().link })
    })
    firebase.database().ref("papers/semester-1/bs/external/october/weightage").once('value', (data) => {
      this.setState({
        octchapter1Value: data.toJSON().chapter1_weightage,
        octchapter2Value: data.toJSON().chapter2_weightage,
        octchapter3Value: data.toJSON().chapter3_weightage,
        octchapter4Value: data.toJSON().chapter4_weightage,
        octchapter5Value: data.toJSON().chapter5_weightage
      })
    })
    firebase.database().ref("papers/semester-1/bs/external/april/weightage").once('value', (data) => {
      this.setState({
        aprchapter1Value: data.toJSON().chapter1_weightage,
        aprchapter2Value: data.toJSON().chapter2_weightage,
        aprchapter3Value: data.toJSON().chapter3_weightage,
        aprchapter4Value: data.toJSON().chapter4_weightage,
        aprchapter5Value: data.toJSON().chapter5_weightage
      })
    })
  }
  state = {
    press1: false,
    press2: false,
    octmodalVisible: false,
    octchapter1Value: '',
    octchapter2Value: '',
    octchapter3Value: '',
    octchapter4Value: '',
    octchapter5Value: '',
    aprmodalVisible: false,
    aprchapter1Value: '',
    aprchapter2Value: '',
    aprchapter3Value: '',
    aprchapter4Value: '',
    aprchapter5Value: '',
    octoberDownloadLink: '',
    aprilDownloadLink: '',
  };
  displayPdf = () => {
    if (!this.state.press1) {
      // We check if the state of press1 is false or not.
      this.setState({ press1: true });
      // if the state is false then change the state to true upon press of button.
    } else {
      this.setState({ press1: false });
      // if the state is true then change the state to false upon press of button.
    }
    this.setState({ press2: false });
  };

  displayPdfAgain = () => {
    if (!this.state.press2) {
      this.setState({ press2: true });
    } else {
      this.setState({ press2: false });
    }
    this.setState({ press1: false });
  };

  OctoberdownloadPdf = () => {
    RNDM.download({
      url: this.state.octoberDownloadLink,
      title: 'BS October External 2018 Pdf',
      description: 'downloading BS October External 2018 paper'
    }).then(
      ret => Vibration.vibrate(DURATION) // changelog: return a promise which in this case is a vibration if pdf downloaded succesfully.
      ).catch(
      err => alert('Check internet connection or firebase client is temporarily down!', err.message)
      )
  }

  AprildownloadPdf = () => {
    RNDM.download({
      url: this.state.aprilDownloadLink,
      title: 'BS April External 2018  Pdf',
      description: 'downloading BS April External 2018 paper'
    }).then(
      ret => Vibration.vibrate(DURATION)
      ).catch(
      err => alert('Check internet connection or firebase client is temporarily down!', err.message)
      )
  }
  setoctModalVisible(visible) {
    this.setState({ octmodalVisible: visible });
  }

  setaprModalVisible(visible) {
    this.setState({ aprmodalVisible: visible });
  }

  render() {
    const source1 = { uri: "bundle-assets://pdf/BS_external.pdf" };
    const source2 = { uri: "bundle-assets://pdf/BS_external.pdf" };
    return (
      <ImageBackground source={require('../black.png')} style={styles.container}>

        {/* october modal */}
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.octmodalVisible}
          onRequestClose={() => {
            this.setoctModalVisible(!this.state.octmodalVisible);
          }}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>Chapter 1 Weightage : {this.state.octchapter1Value} % </Text>
            <Text style={styles.modalText}>Chapter 2 Weightage : {this.state.octchapter2Value} % </Text>
            <Text style={styles.modalText}>Chapter 3 Weightage : {this.state.octchapter3Value} % </Text>
            <Text style={styles.modalText}>Chapter 4 Weightage : {this.state.octchapter4Value} % </Text>
            <Text style={styles.modalText}>Chapter 5 Weightage : {this.state.octchapter5Value} % </Text>
            <TouchableHighlight
              style={styles.btn}
              onPress={() => {
                this.setoctModalVisible(!this.state.octmodalVisible);
              }}>
              <Text style={styles.newText}>Close</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        {/* april modal */}
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.aprmodalVisible}
          onRequestClose={() => {
            this.setaprModalVisible(!this.state.aprmodalVisible);
          }}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>Chapter 1 Weightage : {this.state.aprchapter1Value} % </Text>
            <Text style={styles.modalText}>Chapter 2 Weightage : {this.state.aprchapter2Value} % </Text>
            <Text style={styles.modalText}>Chapter 3 Weightage : {this.state.aprchapter3Value} % </Text>
            <Text style={styles.modalText}>Chapter 4 Weightage : {this.state.aprchapter4Value} % </Text>
            <Text style={styles.modalText}>Chapter 5 Weightage : {this.state.aprchapter5Value} % </Text>
            <TouchableHighlight
              style={styles.btn}
              onPress={() => {
                this.setaprModalVisible(!this.state.aprmodalVisible);
              }}>
              <Text style={styles.newText}>Close</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <TouchableOpacity
          style={styles.btn}
          onPress={this.displayPdf.bind(this)}
        >
          <Text style={styles.newText}>October 2018 External</Text>
        </TouchableOpacity>

        {this.state.press1 ? <Pdf source={source1} style={styles.pdf} /> : null}
        {this.state.press1 ? <TouchableOpacity onPress={this.OctoberdownloadPdf.bind(this)} style={{ marginRight: 10 }}>
          <Icon name="download" size={25} style={{ color: '#fff', alignItems: 'center' }} />
        </TouchableOpacity> : null}
        {this.state.press1 ?
          <TouchableHighlight
            style={styles.btn}
            underlayColor="#1E90FF"
            onPress={() => {
              this.setoctModalVisible(true);
            }}
          >
            <Text style={styles.newText}>Show weightage</Text>
          </TouchableHighlight> : null}
        <TouchableOpacity
          style={styles.btn}
          onPress={this.displayPdfAgain.bind(this)}
        >
          <Text style={styles.newText}>April 2018 External</Text>
        </TouchableOpacity>
        {this.state.press2 ? <Pdf source={source2} style={styles.pdf} /> : null}
        {this.state.press2 ? <TouchableOpacity onPress={this.AprildownloadPdf.bind(this)} style={{ marginRight: 10 }}>
          <Icon name="download" size={25} style={{ color: '#fff' }} />
        </TouchableOpacity> : null}
        {this.state.press2 ?
          <TouchableHighlight
            style={styles.btn}
            underlayColor="#1E90FF"
            onPress={() => {
              this.setaprModalVisible(true);
            }}
          >
            <Text style={styles.newText}>Show weightage</Text>
          </TouchableHighlight> : null}
      </ImageBackground>
    );
  }
}

export default BSpapers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width - 20
  },
  btn: {
    width: WIDTH - 100,
    height: 35,
    borderRadius: 10,
    backgroundColor: "#00FA9A",
    justifyContent: "center",
    marginTop: 10,
    alignSelf: "center",
    borderColor: "#fff"
  },
  newText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold"
    // marginTop: 20
  },
  newText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold"
  },
  modal: {
    flex: 1,
    marginTop: 40
  },
  modalText: {
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center'
  },
  btn: {
    width: WIDTH - 100,
    height: 40,
    borderRadius: 15,
    backgroundColor: "#1E90FF",
    justifyContent: "center",
    marginTop: 20,
    alignSelf: "center",
    borderColor: "#fff"
  },
});
