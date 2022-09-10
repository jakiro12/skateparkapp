import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    maipu:'https://maps.app.goo.gl/WcAixrGDmf2qz86j7',
    godoy_cruz:'https://maps.app.goo.gl/jPnqU5F6x3yMtBBz7',
    parque_higgins:'https://maps.app.goo.gl/asfCssqxzPWJR3Ri9',
    plaza_irigoyen:'https://maps.app.goo.gl/SKBLwLia41DXWGx67',
    junin:'https://maps.app.goo.gl/dZ7HbkT1e332UjF19',
    rivadavia:'https://maps.app.goo.gl/rJDSG6B7bs66L8SWA',
    general_alvear:'https://maps.app.goo.gl/fX4xKzUFa831n2ZK9',
}
module.exports={
    OpenMap,
    BikeParksData,
}