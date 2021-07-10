import React, { Component } from 'react';
import {Text,View,SafeAreaView,StyleSheet,TouchableOpacity,
TextInput,Platform,StatusBar,Image,ImageBackground } from 'react-native';
import DailyScreen from "../screens/DailyPic";
import SpaceScreen from "../screens/SpaceCrafts";
import StarScreen from "../screens/StarMap";

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
            <SafeAreaView>
            <ImageBackground style={{flex:1,resizeMore:'cover',height:620,}} 
             source={require('../assets/stars.gif')}> 
              <Image style={{alignItems: "center",alignSelf:'center',marginTop:10,width:300,height:200 }}
             source={require('../assets/main-icon.png')}></Image>
            <View>
            <Text style={{fontSize:50,color:"white",alignSelf:'center',marginTop:30}}>STELLAR APP</Text>
            </View>
            <TouchableOpacity style={{alignSelf:'center',marginTop:50,
            borderRadius:100,backgroundColor:'white',width:250,height:50,}} onPress={
              ()=>this.props.navigation.navigate("SpaceCrafts")}>
            <Text style={{color:'darkblue',fontSize:30,textDecorationLine:'underline',
            marginLeft:20}}>Space Crafts</Text>
            <Image style={{alignItems: "center",marginLeft:190,
            marginTop:-60,width:50,height:80,}}
             source={require('../assets/space_crafts.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf:'center',marginTop:50,
            borderRadius:100,backgroundColor:'white',width:250,height:50,}} onPress={()=>this.props.navigation.navigate("StarMap")}>
            <Text style={{color:'darkblue',fontSize:30,textDecorationLine:'underline',
            marginLeft:20}}>Star Map</Text>
             <Image style={{alignItems: "center",marginLeft:190,
            marginTop:-40,width:50,height:50,}}
             source={require('../assets/star_map.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf:'center',marginTop:50,
            borderRadius:100,backgroundColor:'white',width:250,height:50,}} onPress={()=>this.props.navigation.navigate("DailyPic")}>
            <Text style={{color:'darkblue',fontSize:30,textDecorationLine:'underline',
            marginLeft:20}}>Daily Pictures</Text>
             <Image style={{alignItems: "center",marginLeft:200,
            marginTop:-40,width:80,height:50,}}
             source={require('../assets/daily_pictures.png')}></Image>
            </TouchableOpacity>
             </ImageBackground>
            </SafeAreaView>
            </View>
      )}}