import React, {Component} from "react"
import {View,Text, StyleSheet,ImageBackground,Switch,Platform,StatusBar,Image } from "react-native"
import { RFValue } from "react-native-responsive-fontsize";
import firebase from "firebase";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      profile_image: "",
      name:"",
    };
  }

  async  fetchUser(){
    let name, image;
    await firebase
    .database()
    .ref("/users/" + firebase.auth().currentUser.uid)
    .on("value",function(snapshot){
      name = `${snapshot.val().first_name} ${snapshot.val().last_name}`
      image = snapshot.val().profile_picture
    })
    this.setState({
       name: name, 
       profile_image: image
    })
  }

 componentDidMount(){
    this.fetchUser();
  }
  render(){
    return(
      <View style = {styles.container}>
     
        <View style={styles.profileContainer}> 
          <View style={styles.profileImageContainer}> 
            <Image source={{ uri: this.state.profile_image }} 
            style={styles.profileImage} >
            </Image> 
            <Text style={styles.nameText}>Welcome  {this.state.name} !! </Text>
          </View> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor:"purple"
  },
      profileContainer: { flex: 0.85 }, 
      profileImageContainer: { 
        flex: 0.5, justifyContent: "center", 
        alignItems: "center",
        padding:20
        }, 
        profileImage: { 
          width: RFValue(100), 
          height: RFValue(100), 
          borderRadius: RFValue(50) 
          }, 
        nameText: { 
          color: "white", 
          fontSize: RFValue(20), 
          marginTop: RFValue(30) 
          },
});