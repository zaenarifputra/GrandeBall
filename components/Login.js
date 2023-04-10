import react from 'react';
import { Text, View, Image, Button, TextInput, StyleSheet, TouchableOpacity, ImageBackground, } from 'react-native';

import CustomButtonRegister from './CustomButtonRegister'
import CustomButtonLogin from './CustomButtonLogin'
import CustomTextInputSecur from './CustomTextInputSecur'
import CustomTextInput from './CustomTextInput'


const Login = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_log_sign.png')}>
    <View style={{marginTop:50 , height:230}}>
       <Image source={require('../assets/logo_ic_log_reg.png')}/>
    </View>
    <Text style={{fontFamily:'Poppins', fontSize:24, color:'black', fontWeight:'bold', marginStart:30 , marginTop:60}}>Email/Username</Text>
    <CustomTextInput/>
    <Text style={{fontFamily:'Poppins', fontSize:24, color:'black', fontWeight:'bold', marginStart:30 , marginTop:15}}>Password</Text>
    <CustomTextInputSecur />
    <Text 
        style={{color:'black', fontWeight:'bold', marginTop:15, marginStart:75}}>Belum Punya Akun?
            <Text onPress={()=> navigation.navigate('Register')} style={{color:'#6495ED', marginLeft:5}}>Daftar</Text>
    </Text>

    <View> 
          <CustomButtonLogin onPress={()=> navigation.navigate('Home')}/>
        </View>
    </ImageBackground>
    );
  }
  
export default Login;