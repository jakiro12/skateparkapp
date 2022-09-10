import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    resistencia:'https://maps.app.goo.gl/1q8yj4ggYta3oqwY8',
    saenz_peña:'https://maps.app.goo.gl/u2QRHsBfmsyYJGKS7',
    las_breñas:'https://maps.app.goo.gl/dRh8UtvrDbXMwS1B6',
    charata:'https://maps.app.goo.gl/mGKsLjGji3aXAA1A7',
}
module.exports={
    OpenMap,
    BikeParksData,
}