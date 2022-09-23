import * as React from 'react';
import { View,Text,StyleSheet,ScrollView,Image,TouchableOpacity,Modal } from 'react-native';
const {OpenMap,BikeParksData}=require('./MapParks')
import { _myColors } from '../../colors/paletColors';

export default function ParksInBuenosAires(){
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
    const[show20,setShow20]=React.useState(false)  
    const[show21,setShow21]=React.useState(false) 
    const[show22,setShow22]=React.useState(false) 
    const[show23,setShow23]=React.useState(false) 
    const[show24,setShow24]=React.useState(false) 
    const[show25,setShow25]=React.useState(false) 
    const[show26,setShow26]=React.useState(false) 
    const[show27,setShow27]=React.useState(false)  
    const[show28,setShow28]=React.useState(false)  
    const[show29,setShow29]=React.useState(false) 
    const[show30,setShow30]=React.useState(false) 
    const[show31,setShow31]=React.useState(false) 
    const[show32,setShow32]=React.useState(false) 
    const[show33,setShow33]=React.useState(false) 
    const[show34,setShow34]=React.useState(false)  
    const[show35,setShow35]=React.useState(false) 
    const[show36,setShow36]=React.useState(false) 
    const[show37,setShow37]=React.useState(false) 
    const[show38,setShow38]=React.useState(false) 
    const[show39,setShow39]=React.useState(false) 
    const[show40,setShow40]=React.useState(false) 
    const[show41,setShow41]=React.useState(false) 
    const[show42,setShow42]=React.useState(false)   
    const[show43,setShow43]=React.useState(false) 
    const[show44,setShow44]=React.useState(false) 
    const[show45,setShow45]=React.useState(false) 
    const[show46,setShow46]=React.useState(false) 
    const[show47,setShow47]=React.useState(false)  
    const[show48,setShow48]=React.useState(false) 
    const[show49,setShow49]=React.useState(false) 
    const[show50,setShow50]=React.useState(false) 
    const[show51,setShow51]=React.useState(false) 
    const[show52,setShow52]=React.useState(false) 
    const[show53,setShow53]=React.useState(false) 
    const[show54,setShow54]=React.useState(false)  
    const[show55,setShow55]=React.useState(false)  
    const[show56,setShow56]=React.useState(false) 
    const[show57,setShow57]=React.useState(false) 
    const[show58,setShow58]=React.useState(false) 
    const[show59,setShow59]=React.useState(false) 
    const[show60,setShow60]=React.useState(false) 
    const[show61,setShow61]=React.useState(false)  
    const[show62,setShow62]=React.useState(false) 
    const[show63,setShow63]=React.useState(false) 
    const[show64,setShow64]=React.useState(false) 
    const[show65,setShow65]=React.useState(false) 
    const[show66,setShow66]=React.useState(false) 
    const[show67,setShow67]=React.useState(false) 
    const[show68,setShow68]=React.useState(false) 
    const[show69,setShow69]=React.useState(false)  
    const[show70,setShow70]=React.useState(false) 
    const[show71,setShow71]=React.useState(false) 
    const[show72,setShow72]=React.useState(false) 
    const[show73,setShow73]=React.useState(false) 
    const[show74,setShow74]=React.useState(false) 
    const[show75,setShow75]=React.useState(false)  
    const[show76,setShow76]=React.useState(false) 
    const[show77,setShow77]=React.useState(false) 
    const[show78,setShow78]=React.useState(false) 
    return( <ScrollView decelerationRate={0.8}>
        <View style={ViewContainer.values}>         
            <View style={ViewBox.card}><Text style={TextUbication.values}>
           <View style={CardInfo.values}>
            <Text style={FontAdd.values}> San Nicolas de los Arroyos</Text>
            <Text style={FontAdd.values}> Av Juan Domingo Peron</Text> 
            <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.san_nicolas_de_los_arroyos)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show}
              onRequestClose={() => { setShow(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/sannico.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/BuenosAires/sannico.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> San Pedro</Text>
                    <Text style={FontAdd.values}> Juan de Garay</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.san_pedro)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show1}
              onRequestClose={() => { setShow1(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/sanpedro.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow1(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/BuenosAires/sanpedro.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>
             </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Pergamino</Text>
                    <Text style={FontAdd.values}> Parque Municipal</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.pergamino)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>    
             <Modal            
              animationType='none'
              transparent={false}
              visible={show2}
              onRequestClose={() => { setShow2(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/pergamino.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow2(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/pergamino.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>         
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Zarate</Text>
                    <Text style={FontAdd.values}> Av Mitre</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.zarate)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>
             <Modal            
              animationType='none'
              transparent={false}
              visible={show4}
              onRequestClose={() => { setShow4(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/zarate.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow4(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/zarate.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>             
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Campana</Text>
                    <Text style={FontAdd.values}> Boulevard Sarmiento 1000</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.campana)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>    
             <Modal            
              animationType='none'
              transparent={false}
              visible={show5}
              onRequestClose={() => { setShow5(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/campana.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow5(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/BuenosAires/campana.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>         
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Garin</Text>
                    <Text style={FontAdd.values}> Ayacucho 1919</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.garin)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>    
             <Modal            
              animationType='none'
              transparent={false}
              visible={show6}
              onRequestClose={() => { setShow6(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/garin.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow6(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/BuenosAires/garin.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>         
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Tortuguitas</Text>
                    <Text style={FontAdd.values}> Uruguay 590</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.tortuguitas)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text> 
             <Modal            
              animationType='none'
              transparent={false}
              visible={show7}
              onRequestClose={() => { setShow7(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/tortu.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow7(true)}><Text  style={{height:150}}>  
            <Image source={require('../../ImagesExample/BuenosAires/tortu.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>            
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Grand Bourg</Text>
                    <Text style={FontAdd.values}> Falucho 1044</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.grand_bourg)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text> 
             <Modal            
              animationType='none'
              transparent={false}
              visible={show8}
              onRequestClose={() => { setShow8(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/grand.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow8(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/grand.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>            
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Presidente Derqui</Text>
                    <Text style={FontAdd.values}> Hipolito Vieytes 600</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.presidente_derqui)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text> 
             <Modal            
              animationType='none'
              transparent={false}
              visible={show9}
              onRequestClose={() => { setShow9(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/derqui.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow9(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/derqui.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>            
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Los Polvorines</Text>
                    <Text style={FontAdd.values}> Parque el Batallon</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.los_polvorines)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>   
             <Modal            
              animationType='none'
              transparent={false}
              visible={show10}
              onRequestClose={() => { setShow10(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/polvorines.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow10(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/polvorines.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>          
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Villa de Mayo</Text>
                    <Text style={FontAdd.values}> Plaza Mailin</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_de_mayo)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>   
             <Modal            
              animationType='none'
              transparent={false}
              visible={show11}
              onRequestClose={() => { setShow11(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/villademayo.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow11(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/villademayo.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>          
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Victoria</Text>
                    <Text style={FontAdd.values}> Av Sobremonte 2629</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.victoria)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text> 
             <Modal            
              animationType='none'
              transparent={false}
              visible={show12}
              onRequestClose={() => { setShow12(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/victoria.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow12(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/BuenosAires/victoria.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>            
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Acassuso</Text>
                    <Text style={FontAdd.values}> Peru 1450</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.acassuso)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>   
             <Modal            
              animationType='none'
              transparent={false}
              visible={show13}
              onRequestClose={() => { setShow13(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/acasuso.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow13(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/acasuso.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>          
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Tecnopolis</Text>
                    <Text style={FontAdd.values}> Zufriategui 4851</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.tecnopolis)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>   
             <Modal            
              animationType='none'
              transparent={false}
              visible={show14}
              onRequestClose={() => { setShow14(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/tecnopo.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow14(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/tecnopo.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>          
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Ramos Mejia</Text>
                    <Text style={FontAdd.values}> Zapiola 3200</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.ramos_mejia)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>  
             <Modal            
              animationType='none'
              transparent={false}
              visible={show15}
              onRequestClose={() => { setShow15(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/ramos.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow15(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/BuenosAires/ramos.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Gregorio de Laferre</Text>
                    <Text style={FontAdd.values}> Soldado Sosa 4768</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.gregorio_de_laferre)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text> 
             <Modal            
              animationType='none'
              transparent={false}
              visible={show16}
              onRequestClose={() => { setShow16(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/grego.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow16(true)}><Text  style={{height:150}}>
                <Image source={require('../../ImagesExample/BuenosAires/grego.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>            
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Ciudad Evita</Text>
                    <Text style={FontAdd.values}> El Cardon</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.ciudad_evita)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text> 
             <Modal            
              animationType='none'
              transparent={false}
              visible={show17}
              onRequestClose={() => { setShow17(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/evita.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow17(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/evita.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>            
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Valentin Alsina</Text>
                    <Text style={FontAdd.values}> Plaza 20 de Junio</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.valentin_alsina)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>   
             <Modal            
              animationType='none'
              transparent={false}
              visible={show18}
              onRequestClose={() => { setShow18(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/valentin.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow18(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/valentin.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>          
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Lobos</Text>
                    <Text style={FontAdd.values}> Salgado Oeste 700</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.lobos)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text> 
             <Modal            
              animationType='none'
              transparent={false}
              visible={show19}
              onRequestClose={() => { setShow19(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/lobos.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow19(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/lobos.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>            
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Cañuelas</Text>
                    <Text style={FontAdd.values}> Leandro N. Alem 200 </Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.cañuelas)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>   
             <Modal            
              animationType='none'
              transparent={false}
              visible={show20}
              onRequestClose={() => { setShow20(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/canuelas.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow20(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/canuelas.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>          
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Ezeiza</Text>
                    <Text style={FontAdd.values}> Presidente Peron 200</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.ezeiza)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text> 
             <Modal            
              animationType='none'
              transparent={false}
              visible={show21}
              onRequestClose={() => { setShow21(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/ezeiza.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow21(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/BuenosAires/ezeiza.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>            
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Monte Grande</Text>
                    <Text style={FontAdd.values}> Plaza Araoz Alfaro</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.monte_grande)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>  
             <Modal            
              animationType='none'
              transparent={false}
              visible={show22}
              onRequestClose={() => { setShow22(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/monte.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow22(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/monte.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Avellaneda</Text>
                    <Text style={FontAdd.values}> Obreros de la Negra 150</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.avellaneda)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>  
             <Modal            
              animationType='none'
              transparent={false}
              visible={show23}
              onRequestClose={() => { setShow23(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/avellaneda.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow23(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/BuenosAires/avellaneda.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Alto Avellaneda</Text>
                    <Text style={FontAdd.values}> Limay 300</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.alto_avellaneda)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>  
             <Modal            
              animationType='none'
              transparent={false}
              visible={show24}
              onRequestClose={() => { setShow24(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/altoavella.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow24(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/altoavella.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Wilde</Text>
                    <Text style={FontAdd.values}> San Carlos 500</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.wilde)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>   
             <Modal            
              animationType='none'
              transparent={false}
              visible={show25}
              onRequestClose={() => { setShow25(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/wilde.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow25(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/wilde.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>          
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Bernal</Text>
                    <Text style={FontAdd.values}> Liniers 1810</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.bernal)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>  
             <Modal            
              animationType='none'
              transparent={false}
              visible={show26}
              onRequestClose={() => { setShow26(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/bernal.png')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow26(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/bernal.png')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Quilmes</Text>
                    <Text style={FontAdd.values}> Andrade</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.quilmes)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>  
             <Modal            
              animationType='none'
              transparent={false}
              visible={show27}
              onRequestClose={() => { setShow27(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/quilmes.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow27(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/quilmes.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Berazategui</Text>
                    <Text style={FontAdd.values}> C. 22</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.berazategui)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text> 
             <Modal            
              animationType='none'
              transparent={false}
              visible={show28}
              onRequestClose={() => { setShow28(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/berazate.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow28(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/berazate.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>            
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Florencio Varela</Text>
                    <Text style={FontAdd.values}> General Juan Lavalle 120</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.florencio_varela)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text> 
             <Modal            
              animationType='none'
              transparent={false}
              visible={show29}
              onRequestClose={() => { setShow29(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/florvare.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow29(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/florvare.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>            
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Claypole</Text>
                    <Text style={FontAdd.values}> Av 17 de Octubre 600</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.claypole)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>  
             <Modal            
              animationType='none'
              transparent={false}
              visible={show30}
              onRequestClose={() => { setShow30(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/claypole.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow30(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/claypole.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Burzaco</Text>
                    <Text style={FontAdd.values}> Carlos pellegrini 1000</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.burzaco)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>    
             <Modal            
              animationType='none'
              transparent={false}
              visible={show31}
              onRequestClose={() => { setShow31(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/burzaco.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow31(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/BuenosAires/burzaco.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>         
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> San Jose</Text>
                    <Text style={FontAdd.values}> Caaguazu 450</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.san_jose)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>   
             <Modal            
              animationType='none'
              transparent={false}
              visible={show32}
              onRequestClose={() => { setShow32(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/sanjose.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow32(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/sanjose.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>          
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Remedios de Escalada</Text>
                    <Text style={FontAdd.values}> Plaza Mariano Moreno</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.remedios_de_escalada)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>  
             <Modal            
              animationType='none'
              transparent={false}
              visible={show33}
              onRequestClose={() => { setShow33(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/remedios.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow33(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/remedios.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Lanus</Text>
                    <Text style={FontAdd.values}> 29 de Septiembre</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.lanus)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>   
             <Modal            
              animationType='none'
              transparent={false}
              visible={show34}
              onRequestClose={() => { setShow34(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/lanus.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow34(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/lanus.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>          
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> La Plata</Text>
                    <Text style={FontAdd.values}> C. 516</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.la_plata_1)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text> 
             <Modal            
              animationType='none'
              transparent={false}
              visible={show35}
              onRequestClose={() => { setShow35(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/laplata1.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow35(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/laplata1.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>            
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> La Plata</Text>
                    <Text style={FontAdd.values}> Boulevard 82</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.la_plata_2)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text> 
             <Modal            
              animationType='none'
              transparent={false}
              visible={show36}
              onRequestClose={() => { setShow36(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/laplata2.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow36(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/BuenosAires/laplata2.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>            
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> La Plata</Text>
                    <Text style={FontAdd.values}> C. 83</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.la_plata_3)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>  
             <Modal            
              animationType='none'
              transparent={false}
              visible={show37}
              onRequestClose={() => { setShow37(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/laplata3.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow37(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/laplata3.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> La Plata</Text>
                    <Text style={FontAdd.values}> Ruta 10</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.la_plata_4)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>   
             <Modal            
              animationType='none'
              transparent={false}
              visible={show38}
              onRequestClose={() => { setShow38(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/laplata4.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow38(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/laplata4.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>          
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> La Plata</Text>
                    <Text style={FontAdd.values}> Bernardo de Irigoyen</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.la_plata_5)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>  
             <Modal            
              animationType='none'
              transparent={false}
              visible={show39}
              onRequestClose={() => { setShow39(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/laplata5.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow39(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/BuenosAires/laplata5.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> La Plata</Text>
                    <Text style={FontAdd.values}> Presidente Peron 700</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.la_plata_6)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>      
             <Modal            
              animationType='none'
              transparent={false}
              visible={show40}
              onRequestClose={() => { setShow40(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/laplata6.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow40(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/laplata6.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>       
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Gral Belgrano</Text>
                    <Text style={FontAdd.values}> Hipolito Irigoyen</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.general_belgrano)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>  
             <Modal            
              animationType='none'
              transparent={false}
              visible={show41}
              onRequestClose={() => { setShow41(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/generalbelg.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow41(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/BuenosAires/generalbelg.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> San Clemente de Tuyu</Text>
                    <Text style={FontAdd.values}> C. 9</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.san_clemente_de_tuyu)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>  
             <Modal            
              animationType='none'
              transparent={false}
              visible={show42}
              onRequestClose={() => { setShow42(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/sancle.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow42(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/BuenosAires/sancle.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Las Toninas</Text>
                    <Text style={FontAdd.values}> C. 21</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.las_toninas)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>      
             <Modal            
              animationType='none'
              transparent={false}
              visible={show43}
              onRequestClose={() => { setShow43(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/lastoninas.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow43(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/BuenosAires/lastoninas.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>       
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Santa Teresita</Text>
                    <Text style={FontAdd.values}> Av Costanera 1075</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.santa_teresita)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>  
             <Modal            
              animationType='none'
              transparent={false}
              visible={show44}
              onRequestClose={() => { setShow44(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/santatere.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow44(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/santatere.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> San Bernardo</Text>
                    <Text style={FontAdd.values}> Catamarca 1900</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.san_bernardo)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>  
             <Modal            
              animationType='none'
              transparent={false}
              visible={show45}
              onRequestClose={() => { setShow45(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/sanberna.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow45(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/sanberna.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Pinamar</Text>
                    <Text style={FontAdd.values}> Av Martín Pescador 1485 </Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.pinamar)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>      
             <Modal            
              animationType='none'
              transparent={false}
              visible={show46}
              onRequestClose={() => { setShow46(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/pinamar.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow46(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/pinamar.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>       
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Villa Gesell</Text>
                    <Text style={FontAdd.values}> Bv Gesell 1150</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.villa_gesell)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>  
             <Modal            
              animationType='none'
              transparent={false}
              visible={show47}
              onRequestClose={() => { setShow47(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/villagesell.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow47(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/villagesell.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Mar Chiquita</Text>
                    <Text style={FontAdd.values}> C. Vigil</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.mar_chiquita)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>    
             <Modal            
              animationType='none'
              transparent={false}
              visible={show48}
              onRequestClose={() => { setShow48(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/marchiquita.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow48(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/marchiquita.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>         
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Santa Clara del Mar</Text>
                    <Text style={FontAdd.values}> Pinamar</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.santa_clara_del_mar)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>  
             <Modal            
              animationType='none'
              transparent={false}
              visible={show49}
              onRequestClose={() => { setShow49(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/santaclara.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow49(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/santaclara.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Mar del Plata</Text>
                    <Text style={FontAdd.values}> Av Peralta Ramos 2000</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.mar_del_plata_1)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>   
             <Modal            
              animationType='none'
              transparent={false}
              visible={show50}
              onRequestClose={() => { setShow50(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/mardel1.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow50(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/mardel1.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>          
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Mar del Plata</Text>
                    <Text style={FontAdd.values}> Plaza Mitre</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.mar_del_plata_2)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>  
             <Modal            
              animationType='none'
              transparent={false}
              visible={show51}
              onRequestClose={() => { setShow51(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/mardel2.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow51(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/BuenosAires/mardel2.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Mar del Plata</Text>
                    <Text style={FontAdd.values}> Av Luis Angel Firpo 368</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.mar_del_plata_3)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>  
             <Modal            
              animationType='none'
              transparent={false}
              visible={show52}
              onRequestClose={() => { setShow52(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/mardel3.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow52(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/mardel3.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Chapadmalal</Text>
                    <Text style={FontAdd.values}> Playa Paradise</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.chapadmalal)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>      
             <Modal            
              animationType='none'
              transparent={false}
              visible={show53}
              onRequestClose={() => { setShow53(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/chapa.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow53(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/chapa.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>       
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Miramar</Text>
                    <Text style={FontAdd.values}> C. 38</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.miramar_1)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>    
             <Modal            
              animationType='none'
              transparent={false}
              visible={show54}
              onRequestClose={() => { setShow54(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/miramar1.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow54(true)}><Text  style={{height:150}}>
                 <Image source={require('../../ImagesExample/BuenosAires/miramar1.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>         
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Miramar</Text>
                    <Text style={FontAdd.values}> C. 23</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.miramar_2)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>   
             <Modal            
              animationType='none'
              transparent={false}
              visible={show55}
              onRequestClose={() => { setShow55(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/miramar2.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow55(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/miramar2.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>          
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Necochea</Text>
                    <Text style={FontAdd.values}> C. 143 bis</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.necochea)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>  
             <Modal            
              animationType='none'
              transparent={false}
              visible={show56}
              onRequestClose={() => { setShow56(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/necochea.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow56(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/necochea.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>           
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Punta alta</Text>
                    <Text style={FontAdd.values}> Av Colon</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.punta_alta)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>   
             <Modal            
              animationType='none'
              transparent={false}
              visible={show57}
              onRequestClose={() => { setShow57(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={require('../../ImagesExample/BuenosAires/punta.jpg')}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow57(true)}><Text  style={{height:150}}> 
            <Image source={require('../../ImagesExample/BuenosAires/punta.jpg')}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>          
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Bahia Blanca</Text>
                    <Text style={FontAdd.values}> Parque de Mayo</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.bahia_blanca)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>     
             <Modal            
              animationType='none'
              transparent={false}
              visible={show58}
              onRequestClose={() => { setShow58(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow58(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>        
            </View>
            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Carmen de Patagones</Text>
                    <Text style={FontAdd.values}> Av Francisco de Viedma</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.carmen_de_patagones)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>   
             <Modal            
              animationType='none'
              transparent={false}
              visible={show59}
              onRequestClose={() => { setShow59(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow59(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>          
            </View>

            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Coronel Suarez</Text>
                    <Text style={FontAdd.values}> Antonio Bague</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.coronel_suarez)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>       
             <Modal            
              animationType='none'
              transparent={false}
              visible={show60}
              onRequestClose={() => { setShow60(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow60(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>      
            </View>

            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> La Prida</Text>
                    <Text style={FontAdd.values}> Plaza del Bicentenario</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.la_prida)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>        
             <Modal            
              animationType='none'
              transparent={false}
              visible={show61}
              onRequestClose={() => { setShow61(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow61(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>     
            </View>

            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Tandil</Text>
                    <Text style={FontAdd.values}> Buenos Aires 780</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.tandil_1)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>      
             <Modal            
              animationType='none'
              transparent={false}
              visible={show62}
              onRequestClose={() => { setShow62(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow62(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>       
            </View>

            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Tandil</Text>
                    <Text style={FontAdd.values}> Av del Valle</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.tandil_2)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>    
             <Modal            
              animationType='none'
              transparent={false}
              visible={show63}
              onRequestClose={() => { setShow63(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow63(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>         
            </View>

            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Balcarce</Text>
                    <Text style={FontAdd.values}> C. 40</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.balcarce)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>    
             <Modal            
              animationType='none'
              transparent={false}
              visible={show64}
              onRequestClose={() => { setShow64(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow64(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>         
            </View>

            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Nicaor Otamendi</Text>
                    <Text style={FontAdd.values}> Av Pueyrredon 2200</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.comandante_nicanor_otamendi)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>     
             <Modal            
              animationType='none'
              transparent={false}
              visible={show65}
              onRequestClose={() => { setShow65(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow65(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>        
            </View>

            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Olavarria</Text>
                    <Text style={FontAdd.values}> Velez Sarsfield 2149</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.olavarria)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>     
             <Modal            
              animationType='none'
              transparent={false}
              visible={show66}
              onRequestClose={() => { setShow66(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow66(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>        
            </View>

            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Azul</Text>
                    <Text style={FontAdd.values}> Av Bartolome mitre</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.azul)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>     
             <Modal            
              animationType='none'
              transparent={false}
              visible={show67}
              onRequestClose={() => { setShow67(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow67(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>        
            </View>

            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> San Carlos de Bolivar</Text>
                    <Text style={FontAdd.values}> Av San Martin</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.san_carlos_de_bolivar)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>    
             <Modal            
              animationType='none'
              transparent={false}
              visible={show68}
              onRequestClose={() => { setShow68(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow68(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>         
            </View>

            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Gral Alvear</Text>
                    <Text style={FontAdd.values}> Av 9 de Julio 850</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.general_alvear)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>       
             <Modal            
              animationType='none'
              transparent={false}
              visible={show69}
              onRequestClose={() => { setShow69(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow69(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>      
            </View>

            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Saladillo</Text>
                    <Text style={FontAdd.values}> Leandro Alem 3287</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.saladillo)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>    
             <Modal            
              animationType='none'
              transparent={false}
              visible={show70}
              onRequestClose={() => { setShow70(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow70(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>         
            </View>

            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> 15 de Mayo</Text>
                    <Text style={FontAdd.values}> Mariano Rondeau</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.veinticinco_de_mayo)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>     
             <Modal            
              animationType='none'
              transparent={false}
              visible={show71}
              onRequestClose={() => { setShow71(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow71(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>        
            </View>

            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Trenque Lauquen</Text>
                    <Text style={FontAdd.values}> Cuello</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.trenque_lauquen)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>      
             <Modal            
              animationType='none'
              transparent={false}
              visible={show72}
              onRequestClose={() => { setShow72(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow72(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>       
            </View>

            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Lincoln</Text>
                    <Text style={FontAdd.values}> Av 15 de Mayo 1300</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.lincoln)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>     
             <Modal            
              animationType='none'
              transparent={false}
              visible={show73}
              onRequestClose={() => { setShow73(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow73(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>        
            </View>

            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Marcos Paz</Text>
                    <Text style={FontAdd.values}> Carlos Pellegrini</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.marcos_paz)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>     
             <Modal            
              animationType='none'
              transparent={false}
              visible={show74}
              onRequestClose={() => { setShow74(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow74(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>        
            </View>

            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Merlo</Text>
                    <Text style={FontAdd.values}> Av Julian M. Castro 222</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.merlo)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>        
             <Modal            
              animationType='none'
              transparent={false}
              visible={show75}
              onRequestClose={() => { setShow75(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow75(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>     
            </View>

            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> San Antonio de Pauda</Text>
                    <Text style={FontAdd.values}> Bartolome Mitre 2350</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.san_antonio_de_pauda)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>   
             <Modal            
              animationType='none'
              transparent={false}
              visible={show76}
              onRequestClose={() => { setShow76(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow76(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>          
            </View>

            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Ituzaingo</Text>
                    <Text style={FontAdd.values}> Polideportivo Gorki</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.ituzaingo)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>     
             <Modal            
              animationType='none'
              transparent={false}
              visible={show77}
              onRequestClose={() => { setShow77(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow77(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{height:80,width:80,}} /> </Text></TouchableOpacity>        
            </View>

            <View style={ViewBox.card}>
                    <Text style={TextUbication.values}>
                <View style={CardInfo.values}>
                    <Text style={FontAdd.values}> Caseros</Text>
                    <Text style={FontAdd.values}> Bouchard 3350</Text> 
                    <TouchableOpacity style={TextUbication.btn} onPress={()=>OpenMap(BikeParksData.caseros)}><Text style={FontAdd.values}> Ubicacion</Text></TouchableOpacity>
            </View>  
             </Text>       
             <Modal            
              animationType='none'
              transparent={false}
              visible={show78}
              onRequestClose={() => { setShow78(false); } }
              >
                <View style={ImgSite.imageposition} >
             <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={ImgSite.values} />  
                </View>
            </Modal>
            <TouchableOpacity style={{position:'absolute',bottom:'-25%',right:15}} onPress={()=>setShow78(true)}><Text  style={{height:150}}> <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
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

