import * as React from 'react';
import { View,Text,StyleSheet,ScrollView,TouchableOpacity,Image } from 'react-native';
const {OpenMap,BikeParksData} = require('./MapParks')
export default function ParksInChaco(){
    return(<ScrollView >
        <View style={ViewContainer.values}>         
            <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text> Resistencia</Text>
            <Text> ubixx</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.resistencia)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 50, height: 50,position:'absolute',top:'15%',right:'10%'}} />  
             </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Saenz Peña</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.saenz_peña)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Las Breñas</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.las_breñas)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Charata</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.charata)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
          
            
           
         
          
         
           
            
           
        </View>
        </ScrollView>
    )
}

const ViewContainer=StyleSheet.create({
    values:{
        flex: 1,
        flexDirection:'column',
        alignItems:'center',
    }
})
const TextUbication=StyleSheet.create({
    values:{
        color: 'blue',         
        position: 'absolute',
        top: 5,
        left: 5,
    },
    btn:{
        marginTop:3,
        borderColor:'red',
        borderWidth:2,
        width:84, 
        alignItems:'center',
        borderRadius:4,
        justifyContent:'center',
    }
  
})
const ViewBox=StyleSheet.create({
    card:{
        height:100,
        width: '75%',
        borderColor:'black',  
        borderWidth:2,
        alignItems:'center',
        marginTop:15,
        position: 'relative',
        borderRadius: 4 ,
    }
})
const CardInfo=StyleSheet.create({
    values:{
        flex: 1,
        flexDirection:'column',
    }
})