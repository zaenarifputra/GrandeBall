import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

const Peraturan_takraw = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_tr.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Takraw')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:45, fontSize:30, fontWeight:'bold'}}>SEPAK TAKRAW</Text>
      <Text style={{marginTop:25, marginStart:40, fontSize:20, fontWeight:'bold'}}>Organisasi</Text>
      <ScrollView>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Sama seperti olahraga lainnya, sepak takraw juga memiliki induk organisasi di
            level internasional maupun nasional, yaitu International Sepak Takraw Federation (ISTAF) dan Persatuan Sepak Takraw Indonesia (PSTI). Sepak takraw
            sudah ada sejak zaman Kesultanan Melayu, sekitar 500 tahun lalu.</Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default Peraturan_takraw;