import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    zapala:'https://maps.app.goo.gl/C3ZctvP4hEgfghXr7',
    san_patricio_del_chañar:'https://maps.app.goo.gl/nPWhbpJH8XSAf6rX9',
    neuquen_1:'https://maps.app.goo.gl/M2e3HqFEaxqtaFXD8',
    neuquen_2:'https://maps.app.goo.gl/grMNBeL9nZc7kzgt7',
}
module.exports={
    OpenMap,
    BikeParksData,
}