import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Pdf from "react-native-pdf";

const { width: WIDTH } = Dimensions.get("window");
class OOPpapers extends Component {
  state = {
    press1: false,
    press2: false
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

  /* The default state of the button(press1 or press2) is false, the displayPdf() method is then called upon press of the button,
   * which then changes the state of the button(press1 or press2) to true, this will show the PDF
   * Now the state of the button is true, if the button is pressed again the displayPdf() method is called again which then changes
   * the state of the button to false, This will hide the PDF.
   */

  displayPdfAgain = () => {
    if (!this.state.press2) {
      this.setState({ press2: true });
    } else {
      this.setState({ press2: false });
    }
    this.setState({ press1: false });
  };

  render() {
    const buttons = ["External", "Internal", "Backlog"];
    const source1 = { uri: "bundle-assets://pdf/essay.pdf" };
    const source2 = { uri: "bundle-assets://pdf/essay.pdf" };
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btn}
          onPress={this.displayPdf.bind(this)}
        >
          <Text style={styles.newText}>October 2018 External</Text>
        </TouchableOpacity>
        {this.state.press1 ? <Pdf source={source1} style={styles.pdf} /> : null}
        <TouchableOpacity
          style={styles.btn}
          onPress={this.displayPdfAgain.bind(this)}
        >
          <Text style={styles.newText}>April 2018 External</Text>
        </TouchableOpacity>
        {this.state.press2 ? <Pdf source={source2} style={styles.pdf} /> : null}
      </View>
    );
  }
}

export default OOPpapers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width
  },
  btn: {
    width: WIDTH - 100,
    height: 40,
    borderRadius: 25,
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
  }
});
