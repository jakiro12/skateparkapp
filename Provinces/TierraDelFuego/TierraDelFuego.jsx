import * as React from 'react';
import { View,Text,StyleSheet,ScrollView,Image,TouchableOpacity,Modal,ImageBackground } from 'react-native';
const {OpenMap,BikeParksData}=require('./MapParks')
import { _myColors } from '../../colors/paletColors';

export default function ParksInTierraDelFuego(){
    const[show,setShow]=React.useState(false)  
    const[show1,setShow1]=React.useState(false)          
    return(
        <ImageBackground style={ImgSite.back} source={require('../../ImagesExample/backgroundImg.jpg')} >
        <ScrollView >
        <View style={ViewContainer.values}>         
            <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Rio Grande</Text>
            <Text style={FontAdd.values}> Peru 100</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.rio_grande)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show}
              onRequestClose={() => { setShow(false); } }
              >
                <TouchableOpacity style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/TierraDelFuego/riogrande.jpg')}
       style={ImgSite.values} />  
                </TouchableOpacity>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/TierraDelFuego/riogrande.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity> 
             </View>
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Ushuaia</Text>
            <Text style={FontAdd.values}> Juan Díaz de Solís 1120</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.ushuaia)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show1}
              onRequestClose={() => { setShow1(false); } }
              >
                <TouchableOpacity style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/TierraDelFuego/usu.jpg')}
       style={ImgSite.values} />  
                </TouchableOpacity>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow1(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/TierraDelFuego/usu.jpg')}
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
         height: 300,
         width: '100%',
         resizeMode:'cover',
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