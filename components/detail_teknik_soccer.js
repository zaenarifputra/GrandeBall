import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Teknik_soccer = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_sc.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Soccer')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:75, fontSize:30, fontWeight:'bold'}}>SEPAK BOLA</Text>
      <Text style={{marginTop:25, marginStart:40, fontSize:20, fontWeight:'bold'}}>Teknik Dasar</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Teknik Dasar Permainan Sepak Bola Untuk bermain 
            sepak bola dengan baik, maka kamu harus menguasai beberapa teknik dasar dalam permainan sepak bola. 
            Teknik dasar dalam permainan sepak bola adalah:</Text>
      <Text style={{marginTop:15, marginStart:40, fontSize:14, fontWeight:'lighter'}}>1. Menendang (Kicking): Melakukan umpan, menendang, 
            dan menembak bola ke gawang</Text>
      <Text style={{marginTop:15, marginStart:40, fontSize:14, fontWeight:'lighter'}}>2. Menghentikan (Stoping): Melakukan kontrol terhadap bola dan menghentikan
            bola dengan kaki dalam maupun luar</Text>
      <Text style={{marginTop:15, marginStart:40, fontSize:14, fontWeight:'lighter'}}>3. Menggiring (Dribbling): Melakukan 
            giringan terhadap bola untuk melewati lawan dan menghambat permainan</Text>
      <Text style={{marginTop:15, marginStart:40, fontSize:14, fontWeight:'lighter'}}>4. Menyundul (Heading): Melakukan umpan dan 
            mencetak gol dengan menggunakan kepala</Text>
      <Text style={{marginTop:15, marginStart:40, fontSize:14, fontWeight:'lighter'}}>5. Merampas (Tackling): Melakukan perebutan bola dari lawan</Text>
      <Text style={{marginTop:15, marginStart:40, fontSize:14, fontWeight:'lighter'}}>6. Menjaga Gawang (Keeper): Menangkap, menangis, 
            dan melempar bola yang akan masuk ke gawang</Text>
    </ImageBackground>
  );
};

export default Teknik_soccer;