import * as React from 'react';
import { View,Text,StyleSheet,ScrollView,Image,TouchableOpacity,Modal } from 'react-native';
const {OpenMap,BikeParksData}=require('./MapParks')
import { _myColors } from '../../colors/paletColors';
export default function ParksInJujuy(){
    const[show,setShow]=React.useState(false)
    const[show1,setShow1]=React.useState(false)
    return(
        <ScrollView >
        <View style={ViewContainer.values}>         
            <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> San Salvador de Jujuy</Text>
            <Text style={FontAdd.values}> Cmte Pedro Perez</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.san_salvador_de_jujuy)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show}
              onRequestClose={() => { setShow(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Jujuy/jujuy.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/Jujuy/jujuy.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity> 
             </View>

             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Palpala</Text>
            <Text style={FontAdd.values}> Mina las Avestruces</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.palpala)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show1}
              onRequestClose={() => { setShow1(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Jujuy/palpala.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow1(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/Jujuy/palpala.jpg')}
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
         height: 300,
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