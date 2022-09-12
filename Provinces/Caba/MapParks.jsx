import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
    villa_real:'https://maps.app.goo.gl/AmSfSSHjzMDuFATw8',
    villa_del_parque:'https://maps.app.goo.gl/2YqnrwzmfcegGDKw9',
    nuñez:'https://maps.app.goo.gl/M7trNa3jziL9vTBUA',
    palermno_1:'https://maps.app.goo.gl/SUi6sjVyYQsPfBRQ9',
    palermno_2:'https://maps.app.goo.gl/urGs8Z9iaefvpAjF6',
    palermno_3:'https://maps.app.goo.gl/5Cr4zfb6eLSBXHYC6',
    palermno_4:'https://maps.app.goo.gl/qvpguYQB5fhKa2Du6',
    barrio_norte:'https://maps.app.goo.gl/CJQahdA5C4y5frgf9',
    barracas:'https://maps.app.goo.gl/hw2jzsdx2tYwXaTJA',
    parque_patricios:'https://maps.app.goo.gl/T84eRHgiTCykjnAz7',
    nueva_pompeya:'https://maps.app.goo.gl/ETMeXPBNK6NxDAAx9',
    barrio_general_savio:'https://maps.app.goo.gl/YAggQSdPLND8G4hF9',
    mataderos:'https://maps.app.goo.gl/APV8QAqPuevAchzw9',
    alamgro:'https://maps.app.goo.gl/4ET2j2cEKPkZuFWS7',    
}
module.exports={
    OpenMap,
    BikeParksData,
}