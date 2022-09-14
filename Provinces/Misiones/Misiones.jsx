import * as React from 'react';
import { View,Text,StyleSheet,ScrollView,Image,TouchableOpacity } from 'react-native';
const {OpenMap,BikeParksData}=require('./MapParks')
import { _myColors } from '../../colors/paletColors';

export default function ParksInMisiones(){
    return(
        <ScrollView>
            <View style={ViewContainer.values}>         
                <View style={ViewBox.card}><Text style={TextUbication.values}>
               <View style={CardInfo.values}>
                <Text style={FontAdd.values}> Villa Cabello</Text>
                <Text style={FontAdd.values}> Av. Circunvalacion</Text> 
                <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_cabello)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
                </View>  
                 </Text>
                 <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
           style={{width: 50, height: 50,position:'absolute',top:'15%',right:'10%'}} />  
                 </View>
                <View style={ViewBox.card}>
                        <Text style={TextUbication.values}>
                    <View style={CardInfo.values}>
                        <Text style={FontAdd.values}> Posadas</Text>
                        <Text style={FontAdd.values}> Av. Ramirez de Velazco</Text> 
                        <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.el_brete)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
                </View>  
                 </Text>
                 </View>
                <View style={ViewBox.card}>
                        <Text style={TextUbication.values}>
                    <View style={CardInfo.values}>
                        <Text style={FontAdd.values}> Alem</Text>
                        <Text style={FontAdd.values}> Yabatis</Text> 
                        <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.alem)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
                </View>  
                 </Text>             
                </View>
                <View style={ViewBox.card}>
                        <Text style={TextUbication.values}>
                    <View style={CardInfo.values}>
                        <Text style={FontAdd.values}> Obera</Text>
                        <Text style={FontAdd.values}> Jose Felix Uriburu</Text> 
                        <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.obera)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
                </View>  
                 </Text>             
                </View>
                <View style={ViewBox.card}>
                        <Text style={TextUbication.values}>
                    <View style={CardInfo.values}>
                        <Text style={FontAdd.values}> Puerto Rico</Text>
                        <Text style={FontAdd.values}> Jose Felix Uriburu</Text> 
                        <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.puerto_rico)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
                </View>  
                 </Text>             
                </View>
                <View style={ViewBox.card}>
                        <Text style={TextUbication.values}>
                    <View style={CardInfo.values}>
                        <Text style={FontAdd.values}> Apostoles</Text>
                        <Text style={FontAdd.values}> Jose Felix Uriburu</Text> 
                        <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.apostoles)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
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
            borderColor:_myColors.secondary,
            borderWidth:3,
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
            backgroundColor:_myColors.fifth,
            opacity: 0.7,
        }
    })
    const CardInfo=StyleSheet.create({
        values:{
            flex: 1,
            flexDirection:'column',
        }
    })
    const FontAdd=StyleSheet.create({
        values:{
            color: 'black',
            opacity: 1,
            fontWeight:'bold',
        }
    })