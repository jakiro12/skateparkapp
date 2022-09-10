import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    la_banda:'https://maps.app.goo.gl/vQEdAsMSRw9t4yqUA',
    
}
module.exports={
    OpenMap,
    BikeParksData,
}