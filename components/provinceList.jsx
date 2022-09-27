
import * as React from 'react';
import { StyleSheet,ScrollView,ImageBackground } from 'react-native';
import EachProvince from '../MasterBtn/ButtonForEveryP';


export default function List(){
  
    return(
        <ImageBackground source={require('../ImagesExample/backgroundImg.jpg')}>
    <ScrollView style={styleAllBtns.values} disableIntervalMomentum={false} keyboardShouldPersistTaps='always' contentContainerStyle={style.values}>         
        <EachProvince  />
        </ScrollView>
        </ImageBackground>
    )
}


const styleAllBtns=StyleSheet.create({
    values:{
        fontWeight:'normal',
        paddingTop:'4%',   
    }
})
const style=StyleSheet.create({
    values:{
        paddingBottom:15,
    }
})