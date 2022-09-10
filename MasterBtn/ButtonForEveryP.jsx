import * as React from 'react';
import { TouchableOpacity,Text, View,StyleSheet} from 'react-native';
import { _myColors } from '../colors/paletColors';
import { useNavigation } from '@react-navigation/native';



export default function EachProvince(){
    const navigation=useNavigation()
    const style_btn={
        width:150,
        height:53,
        backgroundColor:_myColors.primary,
        alignItems:'center',
        opacity: 0.9,
        justifyContent:'center', 
        paddingHorizontal:16,
        paddingVertical:8,
        borderRadius:15,
        margin:5,
    }
  
    return(<View style={styleDisplayBtn.values}>        
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('buenosaires')}>Buenos Aires</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('caba')}>C.A.B.A.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('catamarca')}>Catamarca</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('chaco')}>Chaco</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('chubut')}>Chubut</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('cordoba')}>Córdoba</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('corrientes')}>Corrientes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('entrerios')}>Entre Rios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('formosa')}>Formosa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('jujuy')}>Jujuy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('lapampa')}>La Pampa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('larioja')}>La Rioja</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('mendoza')}>Mendoza</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('misiones')}>Misiones</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('neuquen')}>Neuquén</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('rionegro')}>Rio Negro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('salta')}>Salta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('sanjuan')}>San Juan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('sanluis')}>San Luis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('santacruz')}>Santa Cruz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('santafe')}>Santa Fe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('santiagodelestero')}>Santiago del Estero</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('tierradelfuego')}>Tierra del Fuego</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style_btn}>
            <Text onPress={()=>navigation.navigate('tucuman')}>Tucuman</Text>
        </TouchableOpacity>    
            
        </View>
    )
}

const styleDisplayBtn=StyleSheet.create({
    values:{
        display: 'flex',
        marginTop:0,
        alignItems:'center',
        marginLeft:'1%',        
    }

})