import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Organisasi_volly = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_voly.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Volly')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:75, fontSize:30, fontWeight:'bold'}}>BOLA VOLI</Text>
      <Text style={{marginTop:25, marginStart:40, fontSize:20, fontWeight:'bold'}}>Organisasi</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Induk organisasi bola Voli</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Olahraga Bola Voli dinaungi FIVB (Federation Internationale de Volleyball)
            sebagai induk organisasi internasional, sedangkan di Indonesia, olahraga bola Voli dinaungi oleh PBVSI (Persatuan Bola Voli Seluruh Indonesia).</Text>
    </ImageBackground>
  );
};

export default Organisasi_volly;