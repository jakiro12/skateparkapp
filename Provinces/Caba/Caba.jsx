import * as React from 'react';
import { View,Text,StyleSheet,ScrollView,Image,TouchableOpacity } from 'react-native';
const {OpenMap,BikeParksData}=require('./MapParks')

export default function ParksInCaba(){
    return(
        <ScrollView >
        <View style={ViewContainer.values}>         
            <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text> Villa Real</Text>
            <Text> ubixx</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_real)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 50, height: 50,position:'absolute',top:'15%',right:'10%'}} />  
             </View>       
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text> Villa del Parque</Text>
            <Text> ubixx</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_del_parque)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 50, height: 50,position:'absolute',top:'15%',right:'10%'}} />  
             </View>  

              <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text> Nuñez</Text>
            <Text> ubixx</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.nuñez)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 50, height: 50,position:'absolute',top:'15%',right:'10%'}} />  
             </View>  

             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text> Palermo</Text>
            <Text> ubixx</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.palermo_1)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 50, height: 50,position:'absolute',top:'15%',right:'10%'}} />  
             </View> 
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text> Palermo</Text>
            <Text> ubixx</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.palermo_2)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 50, height: 50,position:'absolute',top:'15%',right:'10%'}} />  
             </View> 
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text> Palermo</Text>
            <Text> ubixx</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.palermo_3)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 50, height: 50,position:'absolute',top:'15%',right:'10%'}} />  
             </View> 
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text> Palermo</Text>
            <Text> ubixx</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.palermo_4)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 50, height: 50,position:'absolute',top:'15%',right:'10%'}} />  
             </View> 
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text> Barrio norte</Text>
            <Text> ubixx</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.barrio_norte)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 50, height: 50,position:'absolute',top:'15%',right:'10%'}} />  
             </View> 
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text> Barracas</Text>
            <Text> ubixx</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.barracas)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 50, height: 50,position:'absolute',top:'15%',right:'10%'}} />  
             </View> 
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text> Parque Patricios</Text>
            <Text> ubixx</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.parque_patricios)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 50, height: 50,position:'absolute',top:'15%',right:'10%'}} />  
             </View> 
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text> Nueva Pompeya</Text>
            <Text> ubixx</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.nueva_pompeya)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 50, height: 50,position:'absolute',top:'15%',right:'10%'}} />  
             </View> 
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text> Barrio gral Savio</Text>
            <Text> ubixx</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.barrio_general_savio)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 50, height: 50,position:'absolute',top:'15%',right:'10%'}} />  
             </View> 
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text> Mataderos</Text>
            <Text> ubixx</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.mataderos)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 50, height: 50,position:'absolute',top:'15%',right:'10%'}} />  
             </View> 
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text> Almagro</Text>
            <Text> ubixx</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.almagro)}><Text > Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 50, height: 50,position:'absolute',top:'15%',right:'10%'}} />  
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