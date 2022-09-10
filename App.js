import Province from './components/initButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from './components/provinceList';
import ParksInSantaFe from './Provinces/SantaFe/SantaFe';
import ParksInBuenosAires from './Provinces/BuenosAires/BuenosAires';
import ParksInCaba from './Provinces/Caba/Caba';
import ParksInCatamarca from './Provinces/Catamarca/Catamarca';
import ParksInChaco from './Provinces/Chaco/Chaco';
import ParksInChubut from './Provinces/Chubut/Chubut';
import ParksInCordoba from './Provinces/Cordoba/Cordoba';
import ParksInCorrientes from './Provinces/Corrientes/Corrientes';
import ParksInEntreRios from './Provinces/EntreRios/EntreRios';
import ParksInFormosa from './Provinces/Formosa/Formosa';
import ParksInJujuy from './Provinces/Jujuy/Jujuy';
import ParksInLaPampa from './Provinces/LaPampa/LaPampa';
import ParksInLaRioja from './Provinces/LaRioja/LaRioja';
import ParksInMendoza from './Provinces/Mendoza/Mendoza';
import ParksInMisiones from './Provinces/Misiones/Misiones';
import ParksInNeuquen from './Provinces/Neuquen/Neuquen';
import ParksInRioNegro from './Provinces/RioNegro/RioNegro';
import ParksInSalta from './Provinces/Salta/Salta';
import ParksInSanJuan from './Provinces/SanJuan/SanJuan';
import ParksInSanLuis from './Provinces/SanLuis/SanLuis';
import ParksInSantaCruz from './Provinces/SantaCruz/SantaCruz';
import ParksInSantiagoDelEstero from './Provinces/SantiagoDelEstero/SantiagoDelEstero';
import ParksInTierraDelFuego from './Provinces/TierraDelFuego/TierraDelFuego';
import ParksInTucuman from './Provinces/Tucuman/Tucuman';



const Stack=createNativeStackNavigator()
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>  
      <Stack.Screen  name='init' component={Province}/>
      <Stack.Screen name='allprovinces' component={List} />
      <Stack.Screen name='buenosaires' component={ParksInBuenosAires}/>
      <Stack.Screen name='caba' component={ParksInCaba}/>
      <Stack.Screen name='catamarca' component={ParksInCatamarca}/>
      <Stack.Screen name='chaco' component={ParksInChaco}/>
      <Stack.Screen name='chubut' component={ParksInChubut}/>
      <Stack.Screen name='cordoba' component={ParksInCordoba}/>
      <Stack.Screen name='corrientes' component={ParksInCorrientes}/>
      <Stack.Screen name='entrerios' component={ParksInEntreRios}/>      
      <Stack.Screen name='formosa' component={ParksInFormosa}/>
      <Stack.Screen name='jujuy' component={ParksInJujuy}/>
      <Stack.Screen name='lapampa' component={ParksInLaPampa}/>
      <Stack.Screen name='larioja' component={ParksInLaRioja}/>
      <Stack.Screen name='mendoza' component={ParksInMendoza}/>
      <Stack.Screen name='misiones' component={ParksInMisiones}/>
      <Stack.Screen name='neuquen' component={ParksInNeuquen}/>
      <Stack.Screen name='rionegro' component={ParksInRioNegro}/>
      <Stack.Screen name='salta' component={ParksInSalta}/>
      <Stack.Screen name='sanjuan' component={ParksInSanJuan}/>
      <Stack.Screen name='sanluis' component={ParksInSanLuis}/>
      <Stack.Screen name='santacruz' component={ParksInSantaCruz}/>
      <Stack.Screen name='santafe' component={ParksInSantaFe}/>
      <Stack.Screen name='santiagodelestero' component={ParksInSantiagoDelEstero}/>
      <Stack.Screen name='tierradelfuego' component={ParksInTierraDelFuego}/>
      <Stack.Screen name='tucuman' component={ParksInTucuman}/>
    
    </Stack.Navigator>
    </NavigationContainer>
  );
}



