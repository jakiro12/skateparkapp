import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    chilecito:'https://maps.app.goo.gl/FDENuQbz29scK6v38', 
    la_rioja_1:'https://maps.app.goo.gl/U7AfK1J6Y6aaiJ54A',
    la_rioja_2:'https://maps.app.goo.gl/6sSj4yusumHY8GYF9',
    el_milagro:'https://maps.app.goo.gl/YihvpnEpkxzZTuvC9',
}
module.exports={
    OpenMap,
    BikeParksData,
}