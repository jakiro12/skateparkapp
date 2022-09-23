import * as React from 'react';
import { View,Text,StyleSheet,ScrollView,Image,TouchableOpacity,Modal } from 'react-native';
const {OpenMap,BikeParksData}= require('./MapParks')
import { _myColors } from '../../colors/paletColors';
export default function ParksInEntreRios(){
    const[show,setShow]=React.useState(false)  
    const[show1,setShow1]=React.useState(false) 
    const[show2,setShow2]=React.useState(false) 
    const[show3,setShow3]=React.useState(false) 
    const[show4,setShow4]=React.useState(false) 
    const[show5,setShow5]=React.useState(false) 
    const[show6,setShow6]=React.useState(false)  
    const[show7,setShow7]=React.useState(false) 
    const[show8,setShow8]=React.useState(false) 
    const[show9,setShow9]=React.useState(false) 
    return(
        <ScrollView >
        <View style={ViewContainer.values}>         
            <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Parana</Text>
            <Text style={FontAdd.values}> Costanera</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.parana)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
              <Modal            
              animationType='none'
              transparent={false}
              visible={show}
              onRequestClose={() => { setShow(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Entrerios/parana.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/Entrerios/parana.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Diamante</Text>
                    <Text style={FontAdd.values}> Almirante Brown 700</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.diamante)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show1}
              onRequestClose={() => { setShow1(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Entrerios/diamante.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow1(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/Entrerios/diamante.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
          
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Segui</Text>
                    <Text style={FontAdd.values}> Sargento Cabral</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.segui)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show2}
              onRequestClose={() => { setShow2(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Entrerios/segui.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow2(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/Entrerios/segui.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>

             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Concordia</Text>
                    <Text style={FontAdd.values}> Av del Rio</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.concordia)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show3}
              onRequestClose={() => { setShow3(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Entrerios/concordia.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow3(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/Entrerios/concordia.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>

             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Gualeguaychu</Text>
                    <Text style={FontAdd.values}> 3 de febrero</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.gualeguaychu)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show4}
              onRequestClose={() => { setShow4(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Entrerios/gualeguaychu.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow4(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/Entrerios/gualeguaychu.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
            
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Concepcion del Uruguay</Text>
                    <Text style={FontAdd.values}> Parque integrador Brian</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.concepcion_del_uruguay)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show5}
              onRequestClose={() => { setShow5(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Entrerios/concepcion.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow5(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/Entrerios/concepcion.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>

             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Villaguay</Text>
                    <Text style={FontAdd.values}> Av Raul Alfonsin</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villaguay)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show6}
              onRequestClose={() => { setShow6(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Entrerios/villa.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow6(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/Entrerios/villa.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>

             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Libertador de San Martin</Text>
                    <Text style={FontAdd.values}> Ramon Isasi</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.libertador_san_martin)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show7}
              onRequestClose={() => { setShow7(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Entrerios/san.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow7(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/Entrerios/san.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>

             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Gualeguay</Text>
                    <Text style={FontAdd.values}> Av Costanera</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.gualeguay)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show8}
              onRequestClose={() => { setShow8(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Entrerios/gualeguay.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow8(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/Entrerios/gualeguay.jpg')}
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
         resizeMode:'cover',
    },
    imageposition:{
        flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
    }
})