import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import StackNavigator from "./stack"
import Profile from "../screens/profile"
import MyAds from "../screens/myAds"

import LogOut from "../screens/logOut"

const Tab = createDrawerNavigator();

const DrawerNavigator=()=>{
  return(
    <Tab.Navigator screenOptions={{
    drawerLabelStyle: {
      color :"cyan",
      fontsize : 30
    },
    drawerStyle: {
      backgroundColor: '#c8ffff',
      width: 240,
      },

    headerShown : true,
    headerStyle: {
      backgroundColor:"blue", 
    },
    headerTitleStyle: {
            fontWeight: 'bold',
            color :"cyan",
      fontsize : 30
          },
  }}>
    
      <Tab.Screen name = "Astro Connect" component = {StackNavigator} options = {{unmountOnBlur:true}}/>
      <Tab.Screen name = "Profile" component = {Profile} options = {{unmountOnBlur:true}}/>
      <Tab.Screen name = "My Ads" component = {MyAds} options = {{unmountOnBlur:true}}/>
      
       <Tab.Screen name = "Log Out" component = {LogOut}/>
    </Tab.Navigator>
  );
  
} 
export default DrawerNavigator 