import * as React from 'react';
import { View,Text,StyleSheet } from 'react-native';

export default function ParksInLaRioja(){
    return(
        <View style={ViewContainer.values}>
            <Text>Santa fe</Text>
        </View>
    )
}

const ViewContainer=StyleSheet.create({
    values:{
        backgroundColor:'red',
    }
})