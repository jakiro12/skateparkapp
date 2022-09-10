import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    san_miguel_de_tucuman:'https://maps.app.goo.gl/gVHf1eUjrXyyqD4w5',
    
}
module.exports={
    OpenMap,
    BikeParksData,
}