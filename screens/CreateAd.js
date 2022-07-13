import React, {Component} from "react"
import {View,Text, StyleSheet,Image, TextInput,TouchableOpacity,Alert} from "react-native"
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import firebase from "firebase";
let cfonts ={ "Lobster-Regular" : require("../assets/Lobster-Regular.ttf")};

export default class CreateAd extends Component {
  constructor(props){
    super(props);
    this.state={
      fontsLoaded : false,
      service:"",
      description: "",
      contact : "",
      profile_image : "",
      name : ""
    };
  }
  async fontsLoad (){
    await Font.loadAsync(cfonts);
    this.setState({fontsLoaded : true});
  }
  componentDidMount(){
    this.fontsLoad();
    this.fetchUser();
  }
  async  fetchUser(){
    let name,profilePic;
    await firebase
    .database()
    .ref("/users/" + firebase.auth().currentUser.uid)
    .on("value",function(snapshot){

      name = `${snapshot.val().first_name} ${snapshot.val().last_name}`
      profilePic = snapshot.val().profile_picture
    })
    this.setState({
      name  : name,
      profile_image : profilePic
    })
  }
 async addAd(){
  if(this.state.service && this.state.description && this.state.contact){
        let adData = {
          author : firebase.auth().currentUser.displayName,
          name : this.state.name,
          service : this.state.service,
          description : this.state.description,
          contact : this.state.contact,
          created_on : new Date(),
          author_uid : firebase.auth().currentUser.uid,
          profilePic: this.state.profile_image
        }
        await firebase.database()
        .ref("/ads/" + (Math.random().toString(36).slice(2)))
        .set(adData)
        .then(function (snapshot){})
        this.props.setUpdateToTrue()
        this.props.navigation.navigate("Feed")
        
      }

      else{
        Alert.alert(
        'Error',
        'All fields are required!!',
        [{text : 'okay', onPress : ()=>console.log('Ok Pressed')}],
        {cancelable: false}
      )
      }
  }
  render(){
    if(this.state.fontsLoaded){
    return(
      <View style = {styles.container}>
        <View style = {styles.headingSection}> 
            <Image source = {require("../assets/AstroConnect.png")} style = {styles.logoStyle} />
            <Text style = {styles.text}>
            Create Ad            </Text >
        </View>
        <View>
          <TextInput
          style = {styles.inputStyle}
          placeholder = "Service/Skill"
          multiline= {false}
          onChangeText ={item => this.setState({service:item})}
          />
          <TextInput
          style = {styles.inputStyle}
          placeholder = "Description"
          multiline= {true}
          onChangeText ={item => this.setState({description:item})}
          />
          <TextInput
          style = {styles.inputStyle}
          placeholder = "Contact"
          multiline= {false}
          onChangeText ={item => this.setState({contact:item})}
          />
        </View>
        <View style = {styles.submitContainer}>
        <TouchableOpacity style = {styles.submit} onPress ={()=>{this.addAd()}}>
        <Text style ={{fontSize : 20, color : "white"}}> Submit </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
    }
    else{
    return <AppLoading/>;
  }
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: "cyan"
  },
  headingSection : {
    padding:40,
    flexDirection:'row',
    alignItems:"center"
  },  
  logoStyle : {
    width:80,
    height:80,
    resizeMode:"contain",
    borderRadius:80
  },
  text:{
    fontSize : 24,
    color : "white",
    marginLeft : 40,
    fontWeight : "bold",
    fontFamily : "Lobster-Regular"
  },
  inputStyle : {
    width : "90%",
    backgroundColor: 	"#c8ffff",
    height :50,
    paddingLeft:10,
    borderColor: "black",
    borderWidth : 1,
    borderRadius:8,
    marginLeft:20,
    marginTop : 50,
    alignItems:"center"
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
    backgroundColor:"blue",
    borderRadius:10
  }
});