import {View, Text} from 'react-native'
import styles from './sty'
import Dapp from './component/dapp';
import Ins from './component/inscrip';
import Conn from './component/connec';
import Comd from './component/command';
import Peya from './component/paiement';
import Home from './component/HomePage';
import Serre from './component/serrecheck';
import Market from './component/onglets/market';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Slide" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Dapp" component={Dapp} />
        <Stack.Screen name="Conn" component={Conn} />
        <Stack.Screen name="Insc" component={Ins} />
        <Stack.Screen name="Peya" component={Peya} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Comd" component={Comd} />
        <Stack.Screen name="Serre" component={Serre} />
        <Stack.Screen name="Market" component={Market} />
      </Stack.Navigator>
    </NavigationContainer>
      
  )
}

export default App;