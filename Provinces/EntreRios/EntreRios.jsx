import * as React from 'react';
import { View,Text,StyleSheet,ScrollView,Image,TouchableOpacity } from 'react-native';
const {OpenMap,BikeParksData}= require('./MapParks')

export default function ParksInEntreRios(){
    return(
        <ScrollView >
        <View style={ViewContainer.values}>         
            <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text> Parana</Text>
            <Text> Costanera</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.parana)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 50, height: 50,position:'absolute',top:'15%',right:'10%'}} />  
             </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Diamante</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.diamante)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
          
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Segui</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.segui)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>

             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Concordia</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.concordia)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>

             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Gualeguaychu</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.gualeguaychu)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
            
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Concepcion del Uruguay</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.concepcion_del_uruguay)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>

             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Villaguay</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villaguay)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>

             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Libertador de San Martin</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.libertador_san_martin)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>

             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Gualeguay</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.gualeguay)}><Text > Ubicacion</Text></TouchableOpacity>
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