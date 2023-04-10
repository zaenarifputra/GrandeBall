import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Organisasi_rugby = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_ru.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Rugby')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:110, fontSize:30, fontWeight:'bold'}}>RUGBY</Text>
      <Text style={{marginTop:25, marginStart:40, fontSize:20, fontWeight:'bold'}}>Organisasi</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Rugbi Dunia (bahasa Inggris: World Rugby) adalah badan pengendali
            internasional olahraga uni rugbi. Rugbi Dunia menyelenggarakan kompetisi uni rugbi empat tahunan paling terkenal, Piala Dunia Rugbi.</Text>
      
    </ImageBackground>
  );
};

export default Organisasi_rugby;