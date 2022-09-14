import * as React from 'react';
import { View,Text,StyleSheet,ScrollView,TouchableOpacity,Image } from 'react-native';
const {OpenMap,BikeParksData}=require('./MapParks')

export default function ParksInCordoba(){
    return(
        <ScrollView >
        <View style={ViewContainer.values}>         
            <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text> San Francisco</Text>
            <Text> ubixx</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.san_francisco)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 50, height: 50,position:'absolute',top:'15%',right:'10%'}} />  
             </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Arroyito</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.arroyito)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>

             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Villa Maria</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_maria)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Cordoba capital</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.cordoba_1)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Cordoba capital</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.cordoba_2)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Cordoba capital</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.cordoba_3)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Cordoba capital</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.cordoba_4)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Cordoba capital</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.cordoba_5)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Cordoba capital</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.cordoba_6)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> La Calera</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.la_calera)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Villa Saldan</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_saldan)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Villa Allende</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_allende)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Unquillo</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.unquillo)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Jesus Maria</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.jesus_maria)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Villa Carlos Paz</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_carlos_paz)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Siquiman</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_parque_siquiman)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Tanti</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.tanti)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Villa del Totoral</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_del_totoral)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Gral Deheza</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.general_deheza)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text> Rio Cuarto</Text>
                    <Text> ubixxx</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.rio_cuarto)}><Text > Ubicacion</Text></TouchableOpacity>
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