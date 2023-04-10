import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Peraturan_soccer = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_sc.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Soccer')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:75, fontSize:30, fontWeight:'bold'}}>SEPAK BOLA</Text>
      <Text style={{marginTop:3, marginStart:40, fontSize:20, fontWeight:'bold'}}>Peraturan</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Durasi -> Total durasinya adalah 90 menit dan dimainkan dalam dua babak.
            Setiap babak berlangsung selama 45 menit, sedangkan waktu istirahat diberikan sekitar 15 menit. Jika skor seri, 
            diberlakukan perpanjangan waktu 2×15 menit.</Text>
      <Text style={{marginTop:15, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Kick Off -> Kick off dilakukan untuk memulai pertandingan pada setiap babak
            atau setelah terjadinya gol.
      </Text>
      <Text style={{marginTop:15, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Gol ->Gol dinyatakan sah ketika bola masuk dan melewati garis gawang
            Keputusan sah atau tidaknya sebuah gol ada di tangan wasit.</Text>
      <Text style={{marginTop:15, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Offside -> Offside terjadi ketika pemain menerima umpan bola, sedangkan
            posisinya lebih dekat ke gawang lawan ketimbang oponennya.</Text>
      <Text style={{marginTop:15, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Bola Keluar (out) -> Bola dinyatakan out apabila keluar melewati garis
            lapangan. Bila terjadi hal demikian, pemain akan melakukan lemparan ke dalam atau throw in.</Text>
      <Text style={{marginTop:15, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Tendangan Sudut -> Tendangan ini dilakukan ketika bola keluar dan melewati
            garis gawang. Sesuai namanya, tendangan ini dilakukan di pojok lapangan yang berada dekat dengan gawang dan dilakukan oleh pihak lawan.</Text>
      <Text style={{marginTop:15, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Tendangan Penalti -> Penalti terjadi ketika pemain yang sedang bertahan
            melakukan pelanggaran di wilayah penjaga gawang. Tendangan ini dilakukan oleh tim lawan dan punya peluang untuk mencetak gol. Tendangan penalti
            juga dilakukan apabila permainan berakhir seri/imbang.</Text>
    </ImageBackground>
  );
};

export default Peraturan_soccer;