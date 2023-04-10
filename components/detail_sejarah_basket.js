import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Sejarah_basket = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_bs.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Basket')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:75, fontSize:30, fontWeight:'bold'}}>BOLA BASKET</Text>
      <Text style={{marginTop:25, marginStart:40, fontSize:20, fontWeight:'bold'}}>Sejarah Singkat</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Olahraga bola basket diciptakan pada tahun 1891 oleh Dr. James Naismith,
            seorang guru olahraga asal Kanada yang mengajar di sebuah perguruan tinggi Springfield, Massachusetts, Amerika Serikat..</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Pada saat itu, ia harus membuat suatu permainan olahraga di ruang tertutup
            untuk mengisi waktu para siswa pada masa liburan musim dingin. Terinspirasi dari permainan yang pernah ia mainkan saat kecil di Kanada, lalu tercipta
            lah permainan yang sekarang dikenal sebagai olahraga bola basket pada 15 Desember 1891.</Text>
    </ImageBackground>
  );
};

export default Sejarah_basket;