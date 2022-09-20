import * as React from 'react';
import { View,Text,StyleSheet,ScrollView,Image,TouchableOpacity,Modal } from 'react-native';
const {OpenMap,BikeParksData}=require('./MapParks')
import { _myColors } from '../../colors/paletColors';
export default function ParksInCaba(){
      const[show,setShow]=React.useState(false)  
    return(
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
            <Text style={FontAdd.values}> Villa del Parque</Text>
            <Text style={FontAdd.values}> Plazoleta Roffo</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_del_parque)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
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
            <Text style={FontAdd.values}> Nuñez</Text>
            <Text style={FontAdd.values}> Manuela Pedraza 2665</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.nuñez)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
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
            <Text style={FontAdd.values}> Palermo</Text>
            <Text style={FontAdd.values}> Av Juramento 650</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.palermo_1)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
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
            <Text style={FontAdd.values}> Palermo</Text>
            <Text style={FontAdd.values}> Costanera Norte</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.palermo_2)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
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
            <Text style={FontAdd.values}> Palermo</Text>
            <Text style={FontAdd.values}> Av Dorrego</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.palermo_3)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
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
            <Text style={FontAdd.values}> Palermo</Text>
            <Text style={FontAdd.values}> Parque Deportivo</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.palermo_4)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
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
            <Text style={FontAdd.values}> Barrio norte</Text>
            <Text style={FontAdd.values}> Av Cordoba 2351</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.barrio_norte)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
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
            <Text style={FontAdd.values}> Barracas</Text>
            <Text style={FontAdd.values}> La Fosa</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.barracas)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
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
            <Text style={FontAdd.values}> Parque Patricios</Text>
            <Text style={FontAdd.values}> Pichincha 1670</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.parque_patricios)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
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
            <Text style={FontAdd.values}> Nueva Pompeya</Text>
            <Text style={FontAdd.values}> Don Pedro de Mendoza</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.nueva_pompeya)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
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
            <Text style={FontAdd.values}> Barrio gral Savio</Text>
            <Text style={FontAdd.values}> Cafayate 5300</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.barrio_general_savio)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
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
            <Text style={FontAdd.values}> Mataderos</Text>
            <Text style={FontAdd.values}> Av Directorio 2200</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.mataderos)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
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
            <Text style={FontAdd.values}> Almagro</Text>
            <Text style={FontAdd.values}> Parque Centenario</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.almagro)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
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