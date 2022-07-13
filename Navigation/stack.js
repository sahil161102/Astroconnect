import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import TabNavigator from "./bottomTab"
import AdScreen from "../screens/AdScreen"
import MyAdScreen from "../screens/myAdScreen"

const Tab = createStackNavigator();

const StackNavigator=()=>{
  return(
    <Tab.Navigator screenOptions={{
    headerShown : false,
  }}>
    
      <Tab.Screen name = "Home" component = {TabNavigator} options = {{unmountOnBlur:true}}/>
      <Tab.Screen name = "Ad Screen" component = {AdScreen} options = {{unmountOnBlur:true}}/>
      <Tab.Screen name = "My Ad Screen" component = {MyAdScreen} options = {{unmountOnBlur:true}}/>
    </Tab.Navigator>
  );
  
} 
export default StackNavigator 