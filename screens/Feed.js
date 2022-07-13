import React, {Component} from "react"
import {View,Text, StyleSheet,FlatList,SafeAreaView, Platform, StatusBar} from "react-native"
import Ad from "./Ad"
import firebase from "firebase"
let ads = require("../assets/temp_ads.json");



export default class Feed extends Component {
  constructor(props){
    super(props);
    this.state ={
      ads : []
    }
  }
  componentDidMount(){
    this.fetchAds();
  }
  async fetchAds(){
    await firebase.database()
    .ref("/ads/")
    .on("value",(snapshot)=>{
      let ads  = [];
      if(snapshot.val()){
      Object.keys(snapshot.val()).forEach(function(key){
        ads.push({
          key : key,
          value : snapshot.val()[key]        
          })
      })
      }
      this.setState({ads : ads});
      this.props.setUpdateToFalse();
    },
    function (errorObject){
      console.log("The read failed : " + errorObject.code )
    } 
    )
  }
  

  renderItem =({item: ads})=>{
  return <Ad ad = {ads}  navigation={this.props.navigation}/> 
};
keyExtractor=(item,index)=>{
  index.toString()
};
  render(){
    return(

      <View style = {styles.container}>
      <SafeAreaView style = {styles.droidSafeArea}/>
      {!this.state.ads[0] ? (
            <View>
           <Text> No Stories Available </Text>
            </View>
          ) 
          :(
      <View style = {styles.cardContainer}>
      <FlatList 
      renderItem = {this.renderItem}
      data = {this.state.ads}
      keyExtractor= {this.keyExtractor}
      />
      </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor:"cyan"

  },droidSafeArea: {
    marginTop: Platform.OS === "android" ? 0*StatusBar.currentHeight : 0
  },
  cardContainer:{
    flex:1
  }
});