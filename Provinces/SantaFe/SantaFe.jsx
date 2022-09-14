import React from 'react';
import { View,Text,StyleSheet,Image, TouchableOpacity,ScrollView } from 'react-native';
import { _myColors } from '../../colors/paletColors';
const {OpenMap,BikeParksData}=require('./MapParks');





export default function ParksInSantaFe(){

    return(
    <ScrollView>
        <View style={ViewContainer.values}>         
            <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Santa Fe Capital</Text>
            <Text style={FontAdd.values}> Rosalia Del Castro 1823</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.santa_fe_capital)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 50, height: 50,position:'absolute',top:'15%',right:'10%'}} />  
             </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Rosario</Text>
                    <Text style={FontAdd.values}> Central Argentino 1930</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.rosario_ciudad)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Rosario</Text>
                    <Text style={FontAdd.values}> Costanera Helltrack</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.rosario_helltrack)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>             
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> San Lorenzo</Text>
                    <Text style={FontAdd.values}> Av. del combate 502</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.san_lorenzo)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>             
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Reconquista</Text>
                    <Text style={FontAdd.values}> Camping Municipal</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.reco_park)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>             
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Venado Tuerto</Text>
                    <Text style={FontAdd.values}> Parque de destrezas</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.venado_tuerto)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>             
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Galvez</Text>
                    <Text style={FontAdd.values}> Direxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.galvez)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>             
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Roldan</Text>
                    <Text style={FontAdd.values}> ubixx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.roldan)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>             
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Funes</Text>
                    <Text style={FontAdd.values}> ubixx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.funes)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>             
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Rufino</Text>
                    <Text style={FontAdd.values}> ubixx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.rufino)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>             
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Santo Tome</Text>
                    <Text style={FontAdd.values}> ubixx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.santo_tome)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
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