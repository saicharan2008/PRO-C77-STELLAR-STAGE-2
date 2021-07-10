import React, { Component } from 'react';
import { Text,View,TouchableOpacity,Image,ImageBackground  } from 'react-native';

export default class StarScreen extends Component {
    render() {
        return (
            <View>
               <ImageBackground style={{flex:1,resizeMore:'cover',height:620,}} 
             source={require('../assets/space.gif')}> 
              <Image style={{alignItems: "center",alignSelf:'center',marginTop:200,width:300,height:200}}
             source={require('../assets/star_map.png')}></Image>
             <Text style={{alignSelf:'center',fontSize:40,color:'white'}}>Hiii! Welcome To Space Craft</Text>
             </ImageBackground>
            </View>
        )
    }
}