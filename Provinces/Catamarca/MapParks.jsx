import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    san_fernando_del_valle_de_catamarca:'https://maps.app.goo.gl/bHeb5ffMKf3zEoX17',
}
module.exports={
    OpenMap,
    BikeParksData,
}