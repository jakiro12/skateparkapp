import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    rio_grande:'https://maps.google.com/?cid=7478980314729359687&entry=gps',
    ushuaia:'https://maps.app.goo.gl/QUDXSX6rjMingJQM8',
}
module.exports={
    OpenMap,
    BikeParksData,
}