import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    corrientes:'https://maps.app.goo.gl/431jzoxt5ETNuYw46',
}
module.exports={
    OpenMap,
    BikeParksData,
}