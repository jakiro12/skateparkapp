import * as React from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity,ScrollView,Modal } from 'react-native';
const {OpenMap,BikeParksData}=require('./MapParks')
import { _myColors } from '../../colors/paletColors';
export default function ParksInRioNegro(){
    const[show,setShow]=React.useState(false)  
    return(
        <ScrollView >
        <View style={ViewContainer.values}>         
            <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Bariloche</Text>
            <Text style={FontAdd.values}> 12 de Octubre</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.bariloche)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show}
              onRequestClose={() => { setShow(false); } }
              >
                <TouchableOpacity style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </TouchableOpacity>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'0%',right:25}} onPress={()=>setShow(true)}><Text  style={{height:100}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:50,width:50,}} /> </Text></TouchableOpacity>
             </View>

             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> General Roca</Text>
            <Text style={FontAdd.values}> Edmundo Gelonch 929</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.general_roca)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show}
              onRequestClose={() => { setShow(false); } }
              >
                <TouchableOpacity style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </TouchableOpacity>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'0%',right:25}} onPress={()=>setShow(true)}><Text  style={{height:100}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:50,width:50,}} /> </Text></TouchableOpacity>
             </View>

             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Las Grutas</Text>
            <Text style={FontAdd.values}> San Antonio</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.las_grutas)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show}
              onRequestClose={() => { setShow(false); } }
              >
                <TouchableOpacity style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </TouchableOpacity>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'0%',right:25}} onPress={()=>setShow(true)}><Text  style={{height:100}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:50,width:50,}} /> </Text></TouchableOpacity>
             </View>
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Villa Regina</Text>
            <Text style={FontAdd.values}> Av 9 de Julio 250</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_regina)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show}
              onRequestClose={() => { setShow(false); } }
              >
                <TouchableOpacity style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </TouchableOpacity>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'0%',right:25}} onPress={()=>setShow(true)}><Text  style={{height:100}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:50,width:50,}} /> </Text></TouchableOpacity>
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