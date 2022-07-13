import React from 'react';

import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/login";
import LoadingScreen from "./screens/loading";
import DashboardScreen from "./screens/dashboard";

import firebase from "firebase";
import { firebaseConfig } from "./screens/config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}


