import * as React from 'react';
import { View,Text,StyleSheet,ScrollView,TouchableOpacity,Image,Modal,ImageBackground } from 'react-native';
const {OpenMap,BikeParksData} = require('./MapParks')
import { _myColors } from '../../colors/paletColors';

export default function ParksInChaco(){
    const[show1,setShow1]=React.useState(false)
    const[show,setShow]=React.useState(false)
    const[show2,setShow2]=React.useState(false)
    const[show3,setShow3]=React.useState(false)
    return(
        <ImageBackground style={ImgSite.back} source={require('../../ImagesExample/backgroundImg.jpg')} >
    <ScrollView >
        <View style={ViewContainer.values}>         
            <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Resistencia</Text>
            <Text style={FontAdd.values}> Parque Tiro Federal</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.resistencia)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show}
              onRequestClose={() => { setShow(false); } }
              >
                <View style={ImgSite.imageposition} >
                       <Image  style={ImgSite.values} source={require('../../ImagesExample/Chaco/resistencia.jpg')}/>
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/Chaco/resistencia.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity> 
             </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Saenz Pe??a</Text>
                    <Text style={FontAdd.values}> Av Espa??a</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.saenz_pe??a)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show1}
              onRequestClose={() => { setShow1(false); } }
              >
                <View style={ImgSite.imageposition} >
                <Image  style={ImgSite.values} source={require('../../ImagesExample/Chaco/saenz.jpg')}/>
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow1(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/Chaco/saenz.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity> 
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Las Bre??as</Text>
                    <Text style={FontAdd.values}> Av Belgrano 1179</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.las_bre??as)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show2}
              onRequestClose={() => { setShow2(false); } }
              >
                <View style={ImgSite.imageposition} >
                <Image  style={ImgSite.values} source={require('../../ImagesExample/Chaco/las_bre??as.jpg')}/>
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow2(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/Chaco/las_bre??as.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity> 
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Charata</Text>
                    <Text style={FontAdd.values}> Av Belgrano 540</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.charata)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show3}
              onRequestClose={() => { setShow3(false); } }
              >
               <View style={ImgSite.imageposition} >
                <Image  style={ImgSite.values} source={require('../../ImagesExample/Chaco/charata.jpg')}/>
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow3(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/Chaco/charata.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity> 
             </View>                   
        </View>
        </ScrollView>
        </ImageBackground>
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
         height: 200,
         width: '100%',
         resizeMode:'stretch'         
    },
    imageposition:{
        flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
    },
    back:{
        height:'100%',
    }
})