import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    lago_pueblo:'https://maps.app.goo.gl/NBDJUXuJV1bDSuLT9',
    esquel:'https://maps.app.goo.gl/7Uz4GVA2qUQ2n3Ev9',
    trevelin:'https://maps.app.goo.gl/Z9Nyht962vAJGMoGA',
    trelew:'https://maps.app.goo.gl/XTXePbrCijzp9rmD8',
    comodoro_rivadavia_1:'https://maps.app.goo.gl/fRcDTpfWcFKTgQfb6',
    comodoro_rivadavia_2:'https://maps.app.goo.gl/dWgo3iqeRQD4sZ159',
    rada_tilly:'https://maps.app.goo.gl/qK9g99Vn83zmRoWw6',
}
module.exports={
    OpenMap,
    BikeParksData,
}