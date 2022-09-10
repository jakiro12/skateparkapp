import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    salta_capital:'https://maps.app.goo.gl/cSiHHr1bSPhsocMK9',
    parque_bicentenario:'https://maps.app.goo.gl/a15HEVWsLZ9JRL2dA',    
}
module.exports={
    OpenMap,
    BikeParksData,
}