import React, {Component} from "react"
import {View,Text, StyleSheet,Image,TouchableOpacity} from "react-native"
import { RFValue } from "react-native-responsive-fontsize";
import * as Speech from 'expo-speech';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class AdScreen extends Component {
  constructor(props) {
    super(props);
}

  render(){

    return(
      <View style = {styles.container}>
        <View style = {styles.authorSection}>
          <Image source ={{uri:this.props.route.params.ads.profilePic}}
          style = {styles.profile_image} />
          <Text style = {styles.authorText}>
            {this.props.route.params.ads.name}
          </Text>        
        </View>
        <View style = {styles.captionSection}>
         <Text style = {styles.captionText}>
         {this.props.route.params.ads.service}
         </Text>
        </View>
        <View style = {styles.captionSection}>
         <Text style = {styles.captionText}>
         {this.props.route.params.ads.description}
         </Text>
        </View>
        <View style = {styles.captionSection}>
         <Text style = {styles.captionText}>
        Rating - 5              Contact - {this.props.route.params.ads.contact}  
         </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor:"blue",
  },
  authorSection:{
    marginLeft:5,
    justifyContent:"center",
    marginTop:10
  },
  authorText:{
    marginLeft:50,
    fontSize :25,
    position: "absolute",
    color : "cyan"
  },
  post_image:{
    resizeMode:"contain",
    width:"95%",
    height:RFValue(200),
    borderRadius:20,
    marginTop:20
  },
  profile_image:{
    resizeMode:"contain",
    width:50,
    height:RFValue(30),
    borderRadius: 200,
    
  },
  imageSection : {
    alignItems:"center"
  },
  captionSection: {
    padding:20
  },
  captionText:{
    fontSize : 15,
    color:"cyan",
  }
});