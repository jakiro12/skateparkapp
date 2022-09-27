import * as React from 'react';
import { View,Text,StyleSheet,Image,ScrollView,TouchableOpacity,Modal } from 'react-native';
import { _myColors } from '../../colors/paletColors';
const{OpenMap,BikeParksData}=require('./MapParks')
export default function ParksInCorrientes(){
    const[show,setShow]=React.useState(false)
    return(
        <ScrollView >
        <View style={ViewContainer.values}>         
            <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Corrientes</Text>
            <Text style={FontAdd.values}> J. M. Rolon</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.corrientes)}><Text style={FontAdd.values}>Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show}
              onRequestClose={() => { setShow(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Corrientes/mitre.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/Corrientes/mitre.jpg')}
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
        width:84, 
        alignItems:'center',
        borderRadius:4,
        justifyContent:'center',
        backgroundColor:_myColors.secondary
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
    }
})