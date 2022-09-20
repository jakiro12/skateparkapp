import React from 'react';
import { View,Text,StyleSheet,Image, TouchableOpacity,ScrollView,Modal} from 'react-native';
import { _myColors } from '../../colors/paletColors';
const {OpenMap,BikeParksData}=require('./MapParks');

export default function ParksInSantaFe(){
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
    const[show10,setShow10]=React.useState(false) 
    const[show11,setShow11]=React.useState(false) 

    return(
    <ScrollView>
        <View style={ViewContainer.values}>         
            <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Santa Fe Capital</Text>
            <Text style={FontAdd.values}> Rosalia Del Castro 1823</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.santa_fe_capital)}><Text style={FontAdd.values}>Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show}
              onRequestClose={() => { setShow(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Chaco/charata.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/SantaFe/santafecap.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>  
             </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Rosario</Text>
                    <Text style={FontAdd.values}> Central Argentino 1930</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.rosario_ciudad)}><Text style={FontAdd.values}>Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show1}
              onRequestClose={() => { setShow1(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/SantaFe/scalabrini.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow1(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/SantaFe/scalabrini.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Rosario</Text>
                    <Text style={FontAdd.values}> Costanera Helltrack</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.rosario_helltrack)}><Text style={FontAdd.values}>Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show2}
              onRequestClose={() => { setShow2(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/SantaFe/helltrack.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow2(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/SantaFe/helltrack.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>             
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> San Lorenzo</Text>
                    <Text style={FontAdd.values}> Av. del combate 502</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.san_lorenzo)}><Text style={FontAdd.values}>Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>            
             <Modal            
              animationType='none'
              transparent={false}
              visible={show3}
              onRequestClose={() => { setShow3(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/SantaFe/sanlorenzo.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow3(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/SantaFe/sanlorenzo.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity> 
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Reconquista</Text>
                    <Text style={FontAdd.values}> Camping Municipal</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.reco_park)}><Text style={FontAdd.values}>Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>    
             <Modal            
              animationType='none'
              transparent={false}
              visible={show4}
              onRequestClose={() => { setShow4(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/SantaFe/recopark.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow4(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/SantaFe/recopark.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>         
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Venado Tuerto</Text>
                    <Text style={FontAdd.values}> Parque de destrezas</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.venado_tuerto)}><Text style={FontAdd.values}>Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show5}
              onRequestClose={() => { setShow5(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/SantaFe/venado.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow5(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/SantaFe/venado.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>             
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Galvez</Text>
                    <Text style={FontAdd.values}> Hipolito Yrigoyen 350</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.galvez)}><Text style={FontAdd.values}>Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>   
             <Modal            
              animationType='none'
              transparent={false}
              visible={show6}
              onRequestClose={() => { setShow6(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/SantaFe/galvez.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow6(true)}><Text  style={{height:150}}>  
            <Image source={require('../../ImagesExample/SantaFe/galvez.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>          
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Roldan</Text>
                    <Text style={FontAdd.values}> Bv San Martin</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.roldan)}><Text style={FontAdd.values}>Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>   
             <Modal            
              animationType='none'
              transparent={false}
              visible={show7}
              onRequestClose={() => { setShow7(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/SantaFe/roldan.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow7(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/SantaFe/roldan.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>          
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Funes</Text>
                    <Text style={FontAdd.values}> Pedro A. Rios 1698</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.funes)}><Text style={FontAdd.values}>Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>             
             <Modal            
              animationType='none'
              transparent={false}
              visible={show8}
              onRequestClose={() => { setShow8(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/SantaFe/funes.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow8(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/SantaFe/funes.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Rufino</Text>
                    <Text style={FontAdd.values}> Colon</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.rufino)}><Text style={FontAdd.values}>Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>  
             <Modal            
              animationType='none'
              transparent={false}
              visible={show9}
              onRequestClose={() => { setShow9(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/SantaFe/rufino.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow9(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/SantaFe/rufino.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Santo Tome</Text>
                    <Text style={FontAdd.values}> Costanera</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.santo_tome)}><Text style={FontAdd.values}>Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>     
             <Modal            
              animationType='none'
              transparent={false}
              visible={show10}
              onRequestClose={() => { setShow10(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/SantaFe/santo.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow10(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/SantaFe/santo.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>        
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Rafaela</Text>
                    <Text style={FontAdd.values}> Padre D. Mateos 1524</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.rafaela)}><Text style={FontAdd.values}>Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>     
             <Modal            
              animationType='none'
              transparent={false}
              visible={show11}
              onRequestClose={() => { setShow11(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/SantaFe/rafaela.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow11(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/SantaFe/rafaela.jpg')}
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
        backgroundColor:_myColors.secondary,
        borderWidth:3,
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