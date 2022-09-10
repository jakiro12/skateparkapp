import * as React from 'react';
import { View,Text,StyleSheet } from 'react-native';

export default function ParksInMisiones(){
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