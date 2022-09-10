import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    formosa_plaza:'https://maps.app.goo.gl/Ajs6hyyUCARKBkDN9',
    formosa_ciudad:'https://maps.app.goo.gl/YzybsbknHg58Pvpx9'
}
module.exports={
    OpenMap,
    BikeParksData,
}