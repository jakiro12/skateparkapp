import React from 'react';
import { View,Text,StyleSheet,Image, TouchableOpacity,ScrollView } from 'react-native';
import { _myColors } from '../../colors/paletColors';
const {OpenMap,BikeParksData}=require('./MapParks');





export default function ParksInSantaFe(){

    return(<ScrollView >
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
                    <Text> Rosario</Text>
                    <Text> Central Argentino 1930</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.rosario_ciudad)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Rosario</Text>
                    <Text> Costanera Helltrack</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.rosario_helltrack)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>             
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> San Lorenzo</Text>
                    <Text> Av. del combate 502</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.san_lorenzo)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>             
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Reconquista</Text>
                    <Text> Camping Municipal</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.reco_park)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>             
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Venado Tuerto</Text>
                    <Text> Parque de destrezas</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.venado_tuerto)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>             
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Galvez</Text>
                    <Text> Direxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.galvez)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>             
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Roldan</Text>
                    <Text> ubixx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.roldan)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>             
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Funes</Text>
                    <Text> ubixx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.funes)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>             
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Rufino</Text>
                    <Text> ubixx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.rufino)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>             
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Santo Tome</Text>
                    <Text> ubixx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.santo_tome)}><Text > Ubicacion</Text></TouchableOpacity>
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