import React, { Component } from 'react';
import { Text,View,TouchableOpacity,Image,ImageBackground  } from 'react-native';

export default class DailyScreen extends Component {
    render() {
        return (
           <View>
               <ImageBackground style={{flex:1,resizeMore:'cover',height:620,}} 
             source={require('../assets/space.gif')}> 
              <Image style={{alignItems: "center",alignSelf:'center',marginTop:10,width:30,height:20}}
             source={require('../assets/daily_pictures.png')}></Image>
             <Text style={{alignSelf:'center',fontSize:40,color:'white'}}>Hiii! Welcome To Daily Pictures
              Show And Take A Space Pic</Text>
             </ImageBackground>
            </View>
        )
    }}