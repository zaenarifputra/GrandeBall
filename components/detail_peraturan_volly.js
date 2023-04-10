import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Peraturan_volly = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_voly.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Volly')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:75, fontSize:30, fontWeight:'bold'}}>BOLA VOLI</Text>
      <Text style={{marginTop:25, marginStart:40, fontSize:20, fontWeight:'bold'}}>Peraturan</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Peraturan Bola Voli Pemenang dalam bola voli adalah tim yang pertama kali
            memperoleh skor 25 atau harus berselisih dua angka antar setiap regu. Bermain bola voli tidak harus dilakukan oleh enam orang, bisa dilakukan oleh
            empat orang dengan saling melakukan passing. Selain itu terdapat sejumlah prasarana standar yang telah ditentukan oleh Federation Internationale de
            Volleyball (FIVB), di antaranya ukuran lapangan, bola, net, dan rot. Ukuran Lapangan Menurut FIVB, ukuran lapangan bola voli yaitu 9 x 18 meter dengan
            garis batas serang pemain belakang berjarak 3 meter dari garis tengah (sejajar dengan jaring). Garis tepi lapangan harus berukuran 5 cm.
            Daerah serang adalah daerah yang dibatasi oleh garis tengah lapangan dengan garis serang seluas 9 x 3 meter. Panjang garis samping; 18 meter, lebar
            lapangan; 9 meter, dan lebar garis serang; 3 meter. Bola Adapun kriteria bola dalam permainan bola voli, yaitu: Bulat. Terbuat dari kulit lunak atau
            bahan sintetis. Memiliki kombinasi warna. Berdiameter 65-67 cm dengan massa 260-280 gram. Tekanan dalam dari bola sekitar 0.30-0.325 kg/cm2.
            Jaring/Net Jaring atau net dipasang untuk membagi wilayah kedua tim yang bermain. Tinggi net untuk permaian bola voli laki-laki yakni 2,43 meter.
            Sedangkan untuk bola voli perempuan setinggi 2,24 meter. Rod Antena Rod antena merupakan bagian dari jaring atau net bola voli. Antena ini merupakan
            tongkat lentur yang dijadikan sebagai batas samping dari area penyeberangan bola. Papan Skor Papan skor adalah sebuah papan khusus yang menjadi
            pencatat skor kedua tim saat bermain. Papan ini bergunan untuk memudahkan petugas melakukan pencatatan skor untuk kedua tim ketika pertandingan sedang
            berlangsung.</Text>
    </ImageBackground>
  );
};

export default Peraturan_volly;