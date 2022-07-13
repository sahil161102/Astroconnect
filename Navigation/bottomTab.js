import React,{Component} from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"

import Feed from "../screens/Feed"
import CreateAd from "../screens/CreateAd"

const Tab = createMaterialBottomTabNavigator();

export default class TabNavigator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isUpdated: false
    };
  }

  renderFeed = props => {
    return <Feed setUpdateToFalse={this.removeUpdated} {...props} />;
  };

  renderCreateAd = props => {
    return <CreateAd setUpdateToTrue={this.changeUpdated} {...props} />;
  };

  changeUpdated = () => {
    this.setState({ isUpdated: true });
  };

  removeUpdated = () => {
    this.setState({ isUpdated: false });
  };
  render(){
  return(
    <Tab.Navigator 
    labeled = {false}
    screenOptions = {
        ({route}) =>({
          tabBarIcon: ({focused, color, size}) =>{
            let iconName;
            if(route.name == "Feed")
              iconName = focused?'book':'book-outline';
            else if(route.name == "Create Ad")
              iconName = focused?'create':'create-outline';
              return <Ionicons name={iconName} size ={25} color ={color}/>
          }
        })
      }
      activeColor = "blue"
      inactiveColor = "grey"
      barStyle = {{backgroundColor :"cyan",
      paddingTop:5,
      paddingBottom:5,
      borderColor:"blue",
      borderWidth:5
      }}
      >
      <Tab.Screen name = "Feed" component = {this.renderFeed} options = {{unmountOnBlur:true}}/>
      <Tab.Screen name = "Create Ad" component = {this.renderCreateAd} options = {{unmountOnBlur:true}}/>
    </Tab.Navigator>
  );
  }
} 
