
import * as React from 'react';
import { StyleSheet,ScrollView } from 'react-native';
import EachProvince from '../MasterBtn/ButtonForEveryP';


export default function List(){
  
    return(<ScrollView style={styleAllBtns.values} disableIntervalMomentum={false} contentContainerStyle={style.values}>         
        <EachProvince  />
        </ScrollView>
    )
}


const styleAllBtns=StyleSheet.create({
    values:{
        fontWeight:'normal',
        paddingTop:'4%',       
    }
})
const style=StyleSheet.create({
    values:{
        paddingBottom:15,
    }
})