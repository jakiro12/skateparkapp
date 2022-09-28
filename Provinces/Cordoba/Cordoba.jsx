import * as React from 'react';
import { View,Text,StyleSheet,ScrollView,TouchableOpacity,Image,Modal,ImageBackground } from 'react-native';
const {OpenMap,BikeParksData}=require('./MapParks')
import { _myColors } from '../../colors/paletColors';
export default function ParksInCordoba(){
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
    const[show14,setShow14]=React.useState(false)
    const[show15,setShow15]=React.useState(false)
    const[show16,setShow16]=React.useState(false)
    const[show17,setShow17]=React.useState(false)
    const[show18,setShow18]=React.useState(false)
    const[show19,setShow19]=React.useState(false)
    return(
        <ImageBackground style={ImgSite.back} source={require('../../ImagesExample/backgroundImg.jpg')} >
        <ScrollView >
        <View style={ViewContainer.values}>         
            <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> San Francisco</Text>
            <Text style={FontAdd.values}> Av Cervantes 3270</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.san_francisco)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show}
              onRequestClose={() => { setShow(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Cordoba/sanf.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/Cordoba/sanf.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Arroyito</Text>
                    <Text style={FontAdd.values}> Ruta 19</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.arroyito)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show1}
              onRequestClose={() => { setShow1(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Cordoba/arro.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow1(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/Cordoba/arro.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>

             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Villa Maria</Text>
                    <Text style={FontAdd.values}> Antonio Sobral 550</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_maria)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show2}
              onRequestClose={() => { setShow2(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Cordoba/maria.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow2(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/Cordoba/maria.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Cordoba capital</Text>
                    <Text style={FontAdd.values}> Plaza General Urquiza</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.cordoba_1)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show3}
              onRequestClose={() => { setShow3(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Cordoba/cordoba1.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow3(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/Cordoba/cordoba1.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Cordoba capital</Text>
                    <Text style={FontAdd.values}> Parque Sarmiento</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.cordoba_2)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show4}
              onRequestClose={() => { setShow4(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Cordoba/cordoba2.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow4(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/Cordoba/cordoba2.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Cordoba capital</Text>
                    <Text style={FontAdd.values}> Av Rufino Varela Ortiz</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.cordoba_3)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show5}
              onRequestClose={() => { setShow5(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Cordoba/cordoba3.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow5(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/Cordoba/cordoba3.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Cordoba capital</Text>
                    <Text style={FontAdd.values}> Parque de las Naciones</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.cordoba_4)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show6}
              onRequestClose={() => { setShow6(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Cordoba/cordoba4.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow6(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/Cordoba/cordoba4.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Cordoba capital</Text>
                    <Text style={FontAdd.values}> Parque Kempes</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.cordoba_5)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show7}
              onRequestClose={() => { setShow7(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Cordoba/cordoba5.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow7(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/Cordoba/cordoba5.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Cordoba capital</Text>
                    <Text style={FontAdd.values}> Parque Kempes</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.cordoba_6)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show8}
              onRequestClose={() => { setShow8(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Cordoba/cordoba6.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow8(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/Cordoba/cordoba6.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> La Calera</Text>
                    <Text style={FontAdd.values}> Av Simon Bolivar</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.la_calera)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show9}
              onRequestClose={() => { setShow9(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Cordoba/calera.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow9(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/Cordoba/calera.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Villa Saldan</Text>
                    <Text style={FontAdd.values}> Lima 149</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_saldan)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show10}
              onRequestClose={() => { setShow10(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Cordoba/saldan.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow10(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/Cordoba/saldan.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Villa Allende</Text>
                    <Text style={FontAdd.values}> Emilio Caraffa 181</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_allende)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show11}
              onRequestClose={() => { setShow11(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Cordoba/allende.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow11(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/Cordoba/allende.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Unquillo</Text>
                    <Text style={FontAdd.values}> Esteban Echeverria 120</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.unquillo)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show12}
              onRequestClose={() => { setShow12(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Cordoba/unquillo.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow12(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/Cordoba/unquillo.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Jesus Maria</Text>
                    <Text style={FontAdd.values}> Cleto Peña</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.jesus_maria)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show19}
              onRequestClose={() => { setShow19(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Cordoba/jesusmaria.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow19(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/Cordoba/jesusmaria.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Villa Carlos Paz</Text>
                    <Text style={FontAdd.values}> Av Atlantica</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_carlos_paz)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show13}
              onRequestClose={() => { setShow13(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Cordoba/carlospaz.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow13(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/Cordoba/carlospaz.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Siquiman</Text>
                    <Text style={FontAdd.values}> Pan de Azucar</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_parque_siquiman)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show14}
              onRequestClose={() => { setShow14(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Cordoba/siquiman.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow14(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/Cordoba/siquiman.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Tanti</Text>
                    <Text style={FontAdd.values}> Av San Martin</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.tanti)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show15}
              onRequestClose={() => { setShow15(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Cordoba/tanti.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow15(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/Cordoba/tanti.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Villa del Totoral</Text>
                    <Text style={FontAdd.values}> Dr Rene Favaloro</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_del_totoral)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show16}
              onRequestClose={() => { setShow16(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Cordoba/totoral.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow16(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/Cordoba/totoral.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Gral Deheza</Text>
                    <Text style={FontAdd.values}> Chaco</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.general_deheza)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show17}
              onRequestClose={() => { setShow17(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Cordoba/deheza.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow17(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/Cordoba/deheza.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
             <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Rio Cuarto</Text>
                    <Text style={FontAdd.values}> Las Heras</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.rio_cuarto)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show18}
              onRequestClose={() => { setShow18(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/Cordoba/cuarto.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow18(true)}><Text  style={{height:150}}> <Image source={require('../../ImagesExample/Cordoba/cuarto.jpg')}
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
    },
    back:{
        height:'100%',
    }
})