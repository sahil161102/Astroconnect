import React, {Component} from "react"
import {View,Text, StyleSheet,Image,TouchableOpacity} from "react-native"
import { RFValue } from "react-native-responsive-fontsize";
import firebase from 'firebase';

export default class Ad extends Component {
  constructor(props) {
    super(props);
    this.state={
      adData : this.props.ad.value,
      adId : this.props.ad.key
    }
}

  render(){
    let ads = this.state.adData
    return(
      <View style = {styles.container}>
      <TouchableOpacity onPress={() =>{
        if(this.state.adData.author_uid === firebase.auth().currentUser.uid)
            this.props.navigation.navigate("My Ad Screen", {
              ads: this.state.adData,
              adId : this.state.adId
            })
        
        else {
          this.props.navigation.navigate("Ad Screen", {
              ads: this.state.adData,
              adId : this.state.adId
            })
        }
      }
          }>
        <View style = {styles.NameSection}>
          <Image source ={{uri:ads.profilePic}}
          style = {styles.profile_image} />
          <Text style = {styles.NameText}>
            {ads.name}
          </Text>        
        </View>
        <View style = {styles.ServiceSection}>
         <Text style = {styles.Servicetext}>
         {ads.service}
         </Text>
        </View>
        <View style = {styles.DescriptionSection}>
         <Text style = {styles.DescriptionText}>
         {ads.description}
         </Text>
        </View>
        <View style = {styles.RatingSection}>
         <Text style = {styles.RatingText}>
        Rating - 5              contact - {ads.contact}  
         </Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor:"blue",
    marginTop:20,
    padding:10,
    borderRadius:50
  },
  NameSection:{
    marginLeft:5,
    
    marginTop:10,
    flexDirection:"row"
  },
  NameText:{
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
  ServiceSection: {
    padding:20
  },
  Servicetext:{
    fontSize : 15,
    color:"cyan",
  },
  RatingSection: {
    padding:20
  },
  RatingText:{
    fontSize : 15,
    color:"cyan",
  },
  DescriptionSection: {
    padding:20
  },
  DescriptionText:{
    fontSize : 15,
    color:"cyan",
  }
});