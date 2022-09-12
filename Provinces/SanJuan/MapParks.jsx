import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    san_juan:'https://maps.app.goo.gl/xzxVvvj3VvKoneEt8',
    caucete:'https://maps.app.goo.gl/RRiqb5HQK8ym2ZoK9',
}
module.exports={
    OpenMap,
    BikeParksData,
}