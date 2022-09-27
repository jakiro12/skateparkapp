import * as React from 'react';
import { Text,TouchableOpacity,StyleSheet,View ,ImageBackground,StatusBar} from 'react-native';
import { _myColors } from '../colors/paletColors';

export default function Province({navigation}){
    const style_btn={
        width:150,
        height:50,
        backgroundColor:_myColors.primary,
        alignItems:'center',
        justifyContent:'center', 
        paddingHorizontal:16,
        paddingVertical:8,
        borderRadius:15,
    }
   
    return(
    <ImageBackground style={imageStyle.visual} source={require('../ImagesExample/backgroundImg.jpg')}>
    <View style={behindBtn.values}>
    <StatusBar backgroundColor={_myColors.secondary}/>
       <TouchableOpacity style={style_btn} delayPressIn={0}>
        <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}} onPress={()=>navigation.navigate('allprovinces')}>Provincias</Text>
       </TouchableOpacity>
       </View>
       </ImageBackground>    
       
    )

}

const behindBtn=StyleSheet.create({
    values:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',       
    }
})
const imageStyle=StyleSheet.create({
    visual:{
        flex: 1,
        width: null,
        height: null,
        
    }
})