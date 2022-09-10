import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const caba={
    caseros:'https://maps.app.goo.gl/QAk6FMYDivWEoRrx5',
    villa_real:'https://maps.app.goo.gl/AmSfSSHjzMDuFATw8',
    villa_del_parque:'https://maps.app.goo.gl/2YqnrwzmfcegGDKw9',
}

const BikeParksData={
    san_nicolas_de_los_arroyos:'https://maps.app.goo.gl/7qWaPAUJ3xqRCeYd7',
    san_pedro:'https://maps.app.goo.gl/XEgAbo3zBBsS2rhq8',
    pergamino:'https://maps.app.goo.gl/Jk6amCQ43TfNaPhg7',
    zarate:'https://maps.app.goo.gl/bgWNX55YQNFn39zw7',
    campana:'https://maps.app.goo.gl/tnHPAiJnPwKuxtms5',
    garin:'https://maps.app.goo.gl/YXKaaUigXdPC9bMh9',
    tortuguitas:'https://maps.app.goo.gl/m7ScusU41uMv3vBHA',
    grand_bourg:'https://maps.app.goo.gl/XQeWSogPAbcSQo5Y9',
    presidente_derqui:'https://maps.app.goo.gl/Y4HeAyNdemu6m1AGA',
    los_polvorines:'https://maps.app.goo.gl/22N6R4gzYWFVQ5mEA',
    villa_de_mayo:'https://maps.app.goo.gl/XxCpZCXvwbwhfM9f6',
    victoria:'https://maps.app.goo.gl/AxGJkUppEQF4KeEb6',
    acassuso:'https://maps.app.goo.gl/YacnP4vDGofnTTDMA',
    tecnopolis:'https://maps.app.goo.gl/PrfybjEFjEu4TeK67',
    ramos_mejia:'https://maps.app.goo.gl/d5r2DvTtiuAt5Nam6',
    gregorio_de_laferre:'https://maps.app.goo.gl/9Kdwxk9qfiaJ6axZ6',
    ciudad_evita:'https://maps.app.goo.gl/jTUF3xdAqgMhbkvq8',
    valentin_alsina:'https://maps.app.goo.gl/McNTCJZ8cyomp7iZ9',
    lobos:'https://maps.app.goo.gl/eGMyYazJUS8RawUP7',
    cañuelas:'https://maps.app.goo.gl/3VeQWzCAnKLNPvV36',
    ezeiza:'https://maps.app.goo.gl/QvJLgrhet1cNCdYV8',
    monte_grande:'https://maps.app.goo.gl/1uNUDNktYD97McLe9',
    avellaneda:'https://maps.app.goo.gl/TnAZ6qkP5i171BDq7',
    alto_avellaneda:'https://maps.app.goo.gl/c1ij96XwfvBCMKou5',
    wilde:'https://maps.app.goo.gl/ZevG5DwFL2g9vFdw7',
    bernal:'https://maps.app.goo.gl/Kpe9f4WN7BnQyJum8',
    quilmes:'https://maps.app.goo.gl/yYVCqbA5g2RiEZ7J6',
    berazategui:'https://maps.app.goo.gl/ZwaA7P8g94e42WPT6',
    ranelagh:'https://maps.app.goo.gl/rjPKLY8QeMf54h868',
    berazategui_oeste:'https://maps.app.goo.gl/9y4V7XdcnXC3YQwt8',
    florencio_varela:'https://maps.app.goo.gl/vAt3MR5mk2aJSv7e8',
    claypole:'https://maps.app.goo.gl/mJ4kMtSW79KB3FBk7',
    burzaco:'https://maps.app.goo.gl/Fs7JbxFy6kPwyW3z5',
    san_jose:'https://maps.app.goo.gl/M3KroW4kLp8yepe89',
    remedios_de_escalada:'https://maps.app.goo.gl/jp1GdRbtCh72AtoU8',
    lanus:'https://maps.app.goo.gl/NhaRDRCbR8uUf7jL7',
    la_plata_1:'https://maps.app.goo.gl/GerDU9SbZ5BksVxu6',
    la_plata_2:'https://maps.app.goo.gl/L8kfjxS4Rwe6yvnM6',
    la_plata_3:'https://maps.app.goo.gl/St8SNT9qBd3jLZZ86',
    la_plata_4:'https://maps.app.goo.gl/5135b28Q6eLgsJww6',
    la_plata_5:'https://maps.app.goo.gl/usbUb9pbHTqzo36U9',
    la_plata_6:'https://maps.app.goo.gl/ZoPGk4YyxmM5zCxv6',    
    general_belgrano:'https://maps.app.goo.gl/5oPMD4i3pJWyXPHV6',
    san_clemente_de_tuyu:'https://maps.app.goo.gl/t9jEjyRDZ2WsQpkU8',

}
module.exports={
    OpenMap,
    BikeParksData,
}