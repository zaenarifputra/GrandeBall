import react from 'react';
import { Text, View, Image, Button, TextInput, StyleSheet, TouchableOpacity, ImageBackground, } from 'react-native';

import CustomButtonRegister from './CustomButtonRegister'
import CustomButtonLogin from './CustomButtonLogin'
import CustomTextInputSecur from './CustomTextInputSecur'
import CustomTextInput from './CustomTextInput'


const Register = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_log_reg.png')}> 
    <View style={{height:200}}>
       <Image source={require('../assets/logo_ic_log_reg.png')}/>
    </View>
    <Text style={{fontFamily:'Poppins', fontSize:24, color:'#FC6701', fontWeight:'bold', marginStart:30 ,marginTop:60}}>Email</Text>
    <CustomTextInput/>
    <Text style={{fontFamily:'Poppins', fontSize:24, color:'#FC6701', fontWeight:'bold', marginStart:30 , marginTop:20}}>Username</Text>
    <CustomTextInput/>
    <Text style={{fontFamily:'Poppins', fontSize:24, color:'#FC6701', fontWeight:'bold', marginStart:30 , marginTop:15}}>Password</Text>
    <CustomTextInputSecur />
    <Text 
        style={{color:'black', fontWeight:'bold', marginTop:15, marginStart:75}}>Sudah Punya Akun?
            <Text onPress={()=> navigation.navigate('Login')} style={{color:'#6495ED', marginLeft:5}}>Login</Text>
    </Text>

    <View> 
          <CustomButtonRegister onPress={()=> navigation.navigate('Login')}/>
        </View>
    </ImageBackground>
    );
  }
  
export default Register;