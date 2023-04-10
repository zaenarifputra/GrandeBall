import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Organisasi_basket = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_bs.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Basket')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:75, fontSize:30, fontWeight:'bold'}}>BOLA BASKET</Text>
      <Text style={{marginTop:25, marginStart:40, fontSize:20, fontWeight:'bold'}}>Organisasi</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Induk organisasi bola basket</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>- Persatuan Bola Basket Seluruh Indonesia disingkat 'Perbasi' merupakan
            organisasi pengatur olahraga bola basket di Indonesia. Saat keberadaan olahraga basket sudah </Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>- Saat keberadaan olahraga basket sudah mendunia, akhirnya terbentuklah
            sebuah wadah atau induk organisasi yang dinamakan FIBA atau Federation Internationale de Basketball. FIBA secara resmi berdiri pada tahun 1932 di
            Jenewa, Swiss, sekitar dua tahun setelah Komite Olimpiade Internasional (IOC) mengakui keberadaan olahraga ini.</Text>
    </ImageBackground>
  );
};

export default Organisasi_basket;