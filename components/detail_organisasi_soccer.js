import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Organisasi_soccer = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_sc.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Soccer')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:75, fontSize:30, fontWeight:'bold'}}>SEPAK BOLA</Text>
      <Text style={{marginTop:25, marginStart:40, fontSize:20, fontWeight:'bold'}}>Organisasi</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>-Induk organisasi sepakbola</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Persatuan Sepak Bola Seluruh Indonesia (PSSI) adalah organisasi induk yang
            bertugas mengatur kegiatan olah raga sepak bola di Indonesia. PSSI berdiri pada 19 April 1930 dengan nama awal Persatuan Sepak Raga 
            Seluruh Indonesia. Federation of International Football Association (FIFA) selaku induk organisasi sepak bola dunia.</Text>
    </ImageBackground>
  );
};

export default Organisasi_soccer;