/** @format */

import { AppRegistry } from "react-native";
import "babel-polyfill";
import App from "./App";
import { name as appName } from "./app.json";


AppRegistry.registerComponent(appName, () => App);
