import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    parque_de_las_naciones:'https://maps.app.goo.gl/xQvbcKn2ReEpUWp48',
    villa_mercedes:'https://maps.app.goo.gl/mmFokdfoC5RXHFbj7',
}
module.exports={
    OpenMap,
    BikeParksData,
}