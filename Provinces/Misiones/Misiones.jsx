import * as React from 'react';
import { View,Text,StyleSheet,ScrollView,Image,TouchableOpacity,Modal } from 'react-native';
const {OpenMap,BikeParksData}=require('./MapParks')
import { _myColors } from '../../colors/paletColors';

export default function ParksInMisiones(){
    const[show,setShow]=React.useState(false)
    const[show1,setShow1]=React.useState(false)
    const[show2,setShow2]=React.useState(false)
    const[show3,setShow3]=React.useState(false)
    const[show4,setShow4]=React.useState(false)
    const[show5,setShow5]=React.useState(false)

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
                 <Modal            
              animationType='none'
              transparent={false}
              visible={show}
              onRequestClose={() => { setShow(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Misiones/cabello.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/Misiones/cabello.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
                 </View>
                <View style={ViewBox.card}>
                        <Text style={TextUbication.values}>
                    <View style={CardInfo.values}>
                        <Text style={FontAdd.values}> Posadas</Text>
                        <Text style={FontAdd.values}> Av. Ramirez de Velazco</Text> 
                        <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.el_brete)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
                </View>  
                 </Text>
                 <Modal            
              animationType='none'
              transparent={false}
              visible={show1}
              onRequestClose={() => { setShow1(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Misiones/brete.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow1(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/Misiones/brete.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
                 </View>
                <View style={ViewBox.card}>
                        <Text style={TextUbication.values}>
                    <View style={CardInfo.values}>
                        <Text style={FontAdd.values}> Alem</Text>
                        <Text style={FontAdd.values}> Yabatis</Text> 
                        <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.alem)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
                </View>  
                 </Text>    
                 <Modal            
              animationType='none'
              transparent={false}
              visible={show2}
              onRequestClose={() => { setShow2(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Misiones/alem.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow2(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/Misiones/alem.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>         
                </View>
                <View style={ViewBox.card}>
                        <Text style={TextUbication.values}>
                    <View style={CardInfo.values}>
                        <Text style={FontAdd.values}> Obera</Text>
                        <Text style={FontAdd.values}> Jose Felix Uriburu</Text> 
                        <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.obera)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
                </View>  
                 </Text>  
                 <Modal            
              animationType='none'
              transparent={false}
              visible={show3}
              onRequestClose={() => { setShow3(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Misiones/obera.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow3(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/Misiones/obera.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
                </View>
                <View style={ViewBox.card}>
                        <Text style={TextUbication.values}>
                    <View style={CardInfo.values}>
                        <Text style={FontAdd.values}> Puerto Rico</Text>
                        <Text style={FontAdd.values}> Jose Felix Uriburu</Text> 
                        <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.puerto_rico)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
                </View>  
                 </Text>  
                 <Modal            
              animationType='none'
              transparent={false}
              visible={show4}
              onRequestClose={() => { setShow4(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Misiones/rico.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow4(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/Misiones/rico.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
                </View>
                <View style={ViewBox.card}>
                        <Text style={TextUbication.values}>
                    <View style={CardInfo.values}>
                        <Text style={FontAdd.values}> Apostoles</Text>
                        <Text style={FontAdd.values}> Jose Felix Uriburu</Text> 
                        <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.apostoles)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
                </View>  
                 </Text>    
                 <Modal            
              animationType='none'
              transparent={false}
              visible={show5}
              onRequestClose={() => { setShow5(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Misiones/apostoles.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow5(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/Misiones/apostoles.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>         
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
            backgroundColor:_myColors.secondary,
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
            opacity: 0.9,
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
    const ImgSite=StyleSheet.create({
        values:{    
             height: 250,
             width: '100%',
             resizeMode:'stretch',
        },
        imageposition:{
            flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
        }
    })