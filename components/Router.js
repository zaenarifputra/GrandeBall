import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './Login'
import home from './Home'
import register from './Register'
import soccer from './soccer_dash'
import basket from './basket_dash'
import volly from './volly_dash'
import takraw from './takraw_dash'
import futsal from './futsal_dash'
import rugby from './rugby_dash'
import sejarah_soccer from './detail_sejarah_soccer'
import sejarah_basket from './detail_sejarah_basket'
import sejarah_volly from './detail_sejarah_volly'
import sejarah_takraw from './detail_sejarah_takraw'
import sejarah_futsal from './detail_sejarah_futsal'
import sejarah_rugby from './detail_sejarah_rugby'
import teknik_soccer from './detail_teknik_soccer'
import teknik_basket from './detail_teknik_basket'
import teknik_volly from './detail_teknik_volly'
import teknik_takraw from './detail_teknik_takraw'
import teknik_futsal from './detail_teknik_futsal'
import teknik_rugby from './detail_teknik_rugby'
import peraturan_soccer from './detail_peraturan_soccer'
import peraturan_basket from './detail_peraturan_basket'
import peraturan_volly from './detail_peraturan_volly'
import peraturan_takraw from './detail_peraturan_takraw'
import peraturan_futsal from  './detail_peraturan_futsal'
import peraturan_rugby from './detail_peraturan_rugby'
import organisasi_soccer from './detail_organisasi_soccer'
import organisasi_basket from './detail_organisasi_basket'
import organisasi_volly from './detail_organisasi_volly'
import organisasi_takraw from './detail_organisasi_takraw'
import organisasi_futsal from './detail_organisasi_futsal'
import organisasi_rugby from './detail_organisasi_rugby'
import quiz_soccer from './quiz_soccer'

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"  >
        <Stack.Screen name="Login" component={login} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={home} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={register} options={{headerShown:false}} />
        <Stack.Screen name="Soccer" component={soccer} options={{headerShown:false}} />
        <Stack.Screen name="Basket" component={basket} options={{headerShown:false}} />
        <Stack.Screen name="Volly" component={volly} options={{headerShown:false}} />
        <Stack.Screen name="Takraw" component={takraw} options={{headerShown:false}} />
        <Stack.Screen name="Futsal" component={futsal} options={{headerShown:false}} />
        <Stack.Screen name="Rugby" component={rugby} options={{headerShown:false}} />
        <Stack.Screen name="Sejarah_soccer" component={sejarah_soccer} options={{headerShown:false}} />
        <Stack.Screen name="Teknik_soccer" component={teknik_soccer} options={{headerShown:false}} />
        <Stack.Screen name="Peraturan_soccer" component={peraturan_soccer} options={{headerShown:false}} />
        <Stack.Screen name="Organisasi_soccer" component={organisasi_soccer} options={{headerShown:false}} />
        <Stack.Screen name="Sejarah_basket" component={sejarah_basket} options={{headerShown:false}} />
        <Stack.Screen name="Teknik_basket" component={teknik_basket} options={{headerShown:false}} />
        <Stack.Screen name="Peraturan_basket" component={peraturan_basket} options={{headerShown:false}} />
        <Stack.Screen name="Organisasi_basket" component={organisasi_basket} options={{headerShown:false}} />
        <Stack.Screen name="Sejarah_volly" component={sejarah_volly} options={{headerShown:false}} />
        <Stack.Screen name="Teknik_volly" component={teknik_volly} options={{headerShown:false}} />
        <Stack.Screen name="Peraturan_volly" component={peraturan_volly} options={{headerShown:false}} />
        <Stack.Screen name="Organisasi_volly" component={organisasi_volly} options={{headerShown:false}} />
        <Stack.Screen name="Sejarah_takraw" component={sejarah_takraw} options={{headerShown:false}} />
        <Stack.Screen name="Teknik_takraw" component={teknik_takraw} options={{headerShown:false}} />
        <Stack.Screen name="Peraturan_takraw" component={peraturan_takraw} options={{headerShown:false}} />
        <Stack.Screen name="Organisasi_takraw" component={organisasi_takraw} options={{headerShown:false}} />
        <Stack.Screen name="Sejarah_futsal" component={sejarah_futsal} options={{headerShown:false}} />
        <Stack.Screen name="Teknik_futsal" component={teknik_futsal} options={{headerShown:false}} />
        <Stack.Screen name="Peraturan_futsal" component={peraturan_futsal} options={{headerShown:false}} />
        <Stack.Screen name="Organisasi_futsal" component={organisasi_futsal} options={{headerShown:false}} />
        <Stack.Screen name="Sejarah_rugby" component={sejarah_rugby} options={{headerShown:false}} />
        <Stack.Screen name="Teknik_rugby" component={teknik_rugby} options={{headerShown:false}} />
        <Stack.Screen name="Peraturan_rugby" component={peraturan_rugby} options={{headerShown:false}} />
        <Stack.Screen name="Organisasi_rugby" component={organisasi_rugby} options={{headerShown:false}} />
        <Stack.Screen name="Quiz_Soccer" component={quiz_soccer} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;