import { Linking } from "react-native";

function OpenMap(url){
    Linking.openURL(url)
}

const BikeParksData={
        san_francisco:'https://maps.app.goo.gl/GAVXH8W6xyBNQuay9',
        arroyito:'https://maps.app.goo.gl/yEpHEd65TpYfkVun8',
        villa_maria:'https://maps.app.goo.gl/V4roxKka3Z3X1sQn9',
        cordoba_1:'https://maps.app.goo.gl/is7h32Tov4wpV8uSA',
        cordoba_2:'https://maps.app.goo.gl/pZf129vRaoCepahK9',
        cordoba_3:'https://maps.app.goo.gl/G6EwakU3sZ5rEVL79',
        cordoba_4:'https://maps.app.goo.gl/V9zni5doTMAaDjs88',
        cordoba_5:'https://maps.app.goo.gl/a1NjkgtnhQzd1pVL8',
        cordoba_6:'https://maps.app.goo.gl/VYVmm61qzaYc5rrn6',
        la_calera:'https://maps.app.goo.gl/qj2CouHgEeSWSpJN8',
        villa_saldan:'https://maps.app.goo.gl/dsEUU1zCbDwujANb9',
        villa_allende:'https://maps.app.goo.gl/c2P6Xe4tp8LCATJ8A',
        unquillo:'https://maps.app.goo.gl/rV57x7eMSpDEdEtKA',
        jesus_maria:'https://maps.app.goo.gl/dCbVkEUt4ktkEHF9A',
        villa_carlos_paz:'https://maps.app.goo.gl/Z2YCU8AhjhweS8SX6',
        villa_parque_siquiman:'https://maps.app.goo.gl/Pua9SXrWQhKQ17UK7',
        tanti:'https://maps.app.goo.gl/rY2DH4nX3hkK3qVE9',
        villa_del_totoral:'https://maps.app.goo.gl/eug7JQzigc9ckWH39',
        general_deheza:'https://maps.app.goo.gl/59VDe27zmZAHCk2W9',
        rio_cuarto:'https://maps.app.goo.gl/CAHMDvC1GQoTQnPd8',

    }
module.exports={
    OpenMap,
    BikeParksData,
}