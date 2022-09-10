import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    veinticinco_de_mayo:'https://maps.app.goo.gl/oCY6LTXUHdmi63PTA',
    catriel:'https://maps.app.goo.gl/XSC5ZUcUsX8dMS1p8',
    relmo:'https://maps.app.goo.gl/Tjn8t8PxRPnzDi6N7',
    general_pico:'https://maps.app.goo.gl/HNG8RPzc2dRJcAzq9',
}
module.exports={
    OpenMap,
    BikeParksData,
}