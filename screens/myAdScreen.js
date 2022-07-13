import React, {Component} from "react"
import {View,Text, StyleSheet,Image,TouchableOpacity} from "react-native"
import { RFValue } from "react-native-responsive-fontsize";
import * as Speech from 'expo-speech';
import Ionicons from "react-native-vector-icons/Ionicons";
//import {ImagePicker, launchImageLibrary} from 'react-native-image-picker';
import firebase from "firebase";

export default class MyAdScreen extends Component {
  constructor(props) {
    super(props);
}

async deleteAd(){
await firebase.database()
    .ref("/ads/"+this.props.route.params.adId)
    .remove();
    this.props.navigation.navigate("Feed");
}
//const options = {
//   storageOptions: {
//     mediaType: "photo",
//     path: 'images',
//   },
// };
//   launchImageLibrary(options, (response) => {
//   console.log('Response = ', response);

//   if (response.didCancel) {
//     console.log('User cancelled image picker');
//   } else if (response.error) {
//     console.log('ImagePicker Error: ', response.error);
//   } else {
//     const uri = response.uri;
//     this.setState({
//       selectedPictureUri: uri,
//     });
//   }
//   })
// ImagePicker.showImagePicker(options, (response) => {
//   console.log('Response = ', response);

//   if (response.didCancel) {
//     console.log('User cancelled image picker');
//   } else if (response.error) {
//     console.log('ImagePicker Error: ', response.error);
//   } else {
//     const uri = response.uri;
//     this.setState({
//       selectedPictureUri: uri,
//     });
//   }
// });


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
        Rating - 5             Contact - {this.props.route.params.ads.contact}  
         </Text>
        </View>
        <View style = {styles.submitContainer}>
        <TouchableOpacity style = {styles.submit} onPress ={()=>{this.deleteAd()}}>
        <Text style ={{fontSize : 20, color : "white"}}> Delete </Text>
        </TouchableOpacity>
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
  profile_image:{
    resizeMode:"contain",
    width:50,
    height:RFValue(30),
    borderRadius: 200,
    
  },
  captionSection: {
    padding:20
  },
  captionText:{
    fontSize : 15,
    color:"cyan",
  },
  submitContainer:{
    flex:1,
    alignItems: "center",
    justifyContent : "center"
  },
  submit :{
    width : "40%",
    height : 40,
    alignItems: "center",
    justifyContent : "center",
    backgroundColor:"red",
    borderRadius:10
  }
});