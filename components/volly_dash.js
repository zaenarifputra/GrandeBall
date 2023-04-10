import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Volly_dash = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_dash_mat/bg_dash_volly.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:75, fontSize:30, fontWeight:'bold'}}>BOLA VOLI</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Sejarah_volly')}>
      <Image source={require('../assets/ic_mat/ic_soccer_mat_sej.png')} style={{width:280, borderRadius:10, height:40, marginStart:30, marginTop:40}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('Teknik_volly')}>
      <Image source={require('../assets/ic_mat/ic_soccer_mat_dasar.png')} style={{width:280, borderRadius:10, height:40, marginStart:30, marginTop:30}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('Peraturan_volly')}>
      <Image source={require('../assets/ic_mat/ic_soccer_mat_peratur.png')} style={{width:280, borderRadius:10, height:40, marginStart:30, marginTop:30}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('Organisasi_volly')}>
      <Image source={require('../assets/ic_mat/ic_soccer_mat_organi.png')} style={{width:280, borderRadius:10, height:40, marginStart:30, marginTop:30}}/>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Volly_dash;