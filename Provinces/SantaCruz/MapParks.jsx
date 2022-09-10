import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    rio_gallegos:'https://maps.app.goo.gl/6tY7vGfVdVb2Nrf37',
}
module.exports={
    OpenMap,
    BikeParksData,
}