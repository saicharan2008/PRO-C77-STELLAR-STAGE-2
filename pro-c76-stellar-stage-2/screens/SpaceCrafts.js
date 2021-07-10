import React, { Component } from 'react';
import {Text,View,TouchableOpacity,Image,ImageBackground } from 'react-native';

export default class SpaceScreen extends Component {
    render() {
        return (
            <View>
               <ImageBackground style={{flex:1,resizeMore:'cover',height:620,}} 
             source={require('../assets/space.gif')}> 
              <Text style={{alignSelf:'center',fontSize:40,color:'white'}}>Hiii! Welcome To Space Craft</Text>
              <Image style={{alignItems: "center",alignSelf:'center',marginTop:50,width:100,height:150}}
             source={require('../assets/space_crafts.png')}></Image>
             </ImageBackground>
            </View>
        )
    }}