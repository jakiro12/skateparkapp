import * as React from 'react';
import { View,Text,StyleSheet,ScrollView,Image,TouchableOpacity,Modal,ImageBackground } from 'react-native';
const {OpenMap,BikeParksData}=require('./MapParks')
import { _myColors } from '../../colors/paletColors';
export default function ParksInCaba(){
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
      const[show12,setShow12]=React.useState(false) 
      const[show13,setShow13]=React.useState(false) 
    return(
      <ImageBackground style={ImgSite.back} source={require('../../ImagesExample/backgroundImg.jpg')} >
        <ScrollView >
        <View style={ViewContainer.values}>         
            <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Villa Real</Text>
            <Text style={FontAdd.values}> Parque Toscaneras</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_real)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show}
              onRequestClose={() => { setShow(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Caba/villareal.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/Caba/villareal.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>       
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Villa del Parque</Text>
            <Text style={FontAdd.values}> Plazoleta Roffo</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_del_parque)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show1}
              onRequestClose={() => { setShow1(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Caba/villadelparque.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow1(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/Caba/villadelparque.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>  

              <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Nuñez</Text>
            <Text style={FontAdd.values}> Manuela Pedraza 2665</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.nuñez)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show2}
              onRequestClose={() => { setShow2(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Caba/nunez.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow2(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/Caba/nunez.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>  

             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Palermo</Text>
            <Text style={FontAdd.values}> Castañeda 2020</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.palermo_1)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show3}
              onRequestClose={() => { setShow3(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Caba/palermo1.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow3(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/Caba/palermo1.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View> 
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Palermo</Text>
            <Text style={FontAdd.values}> Costanera Norte</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.palermo_2)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show4}
              onRequestClose={() => { setShow4(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Caba/palermo2.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow4(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/Caba/palermo2.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View> 
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Palermo</Text>
            <Text style={FontAdd.values}> Av Dorrego 3600</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.palermo_3)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show5}
              onRequestClose={() => { setShow5(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Caba/palermo3.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow5(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/Caba/palermo3.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View> 
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Palermo</Text>
            <Text style={FontAdd.values}> Parque Deportivo</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.palermo_4)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show6}
              onRequestClose={() => { setShow6(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Caba/palermo4.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow6(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/Caba/palermo4.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View> 
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Barrio norte</Text>
            <Text style={FontAdd.values}> Av Cordoba 2351</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.barrio_norte)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show7}
              onRequestClose={() => { setShow7(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Caba/barrionorte.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow7(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/Caba/barrionorte.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View> 
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Barracas</Text>
            <Text style={FontAdd.values}> Herrera 350</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.barracas)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show8}
              onRequestClose={() => { setShow8(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Caba/barracas.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow8(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/Caba/barracas.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View> 
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Parque Patricios</Text>
            <Text style={FontAdd.values}> Pichincha 1670</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.parque_patricios)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show9}
              onRequestClose={() => { setShow9(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Caba/patricios.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow9(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/Caba/patricios.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View> 
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Nueva Pompeya</Text>
            <Text style={FontAdd.values}> Don Pedro de Mendoza</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.nueva_pompeya)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show10}
              onRequestClose={() => { setShow10(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Caba/pompeya.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow10(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/Caba/pompeya.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View> 
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Barrio gral Savio</Text>
            <Text style={FontAdd.values}> Cafayate 5300</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.barrio_general_savio)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show11}
              onRequestClose={() => { setShow11(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Caba/savio.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow11(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/Caba/savio.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View> 
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Mataderos</Text>
            <Text style={FontAdd.values}> Av Directorio 6262</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.mataderos)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show12}
              onRequestClose={() => { setShow12(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Caba/mataderos.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow12(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/Caba/mataderos.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View> 
             <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> Almagro</Text>
            <Text style={FontAdd.values}> Parque Centenario</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.almagro)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show13}
              onRequestClose={() => { setShow13(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Caba/almagro.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow13(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/Caba/almagro.jpg')}
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
           resizeMode:'stretch',
      },
      imageposition:{
          flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
      }
  })