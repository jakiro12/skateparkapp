import * as React from 'react';
import { View,Text,StyleSheet,Image,ScrollView,TouchableOpacity,Modal,ImageBackground } from 'react-native';
const {OpenMap,BikeParksData}= require('./MapParks')
import { _myColors } from '../../colors/paletColors';

export default function ParksInSantiagoDelEstero(){
    const[show,setShow]=React.useState(false)  
    return(
        <ImageBackground style={ImgSite.back} source={require('../../ImagesExample/backgroundImg.jpg')} >
        <ScrollView >
        <View style={ViewContainer.values}>         
            <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> La Banda</Text>
            <Text style={FontAdd.values}> Av San Martin</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.la_banda)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show}
              onRequestClose={() => { setShow(false); } }
              >
                <TouchableOpacity style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/SantiagoDelEstero/santi.jpg')}
       style={ImgSite.values} />  
                </TouchableOpacity>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/SantiagoDelEstero/santi.jpg')}
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
         height: 250,
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