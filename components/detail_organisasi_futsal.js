import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Organisasi_futsal = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_fs.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Futsal')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:110, fontSize:30, fontWeight:'bold'}}>FUTSAL</Text>
      <Text style={{marginTop:25, marginStart:40, fontSize:20, fontWeight:'bold'}}>Organisasi</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Induk Olahraga Futsal
            Awalnya, FFI (Federasi Futsal Indonesia) merupakan induk olahraga yang menaungi berbagai aktivitas futsal di Indonesia. Organisasi ini berada dalam
            naungan PSSI karena olahraga futsal masih sejenis dengan sepak bola.</Text>
    </ImageBackground>
  );
};

export default Organisasi_futsal;