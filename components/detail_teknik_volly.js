import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Teknik_volly = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_voly.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Volly')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:75, fontSize:30, fontWeight:'bold'}}>BOLA VOLI</Text>
      <Text style={{marginTop:25, marginStart:40, fontSize:20, fontWeight:'bold'}}>Teknik Dasar</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Teknik Dasar Bola Voli Untuk bermain bola voli dengan baik, terdapat beberapa
            teknik dasar yang mesti dipahami dan dikuasai, yakni servis, passing, smash, dan bendungan.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>- Servis</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Servis adalah pukulan bola yang dilakukan dari belakang garis akhir lapangan
            permainan sampai melewati net ke daerah lawan.Teknik ini biasanya dilakukan dengan pukulan keras dan kecepatan tinggi. Tujuannya agar pemain lawan
            tidak dapat mengendalikan bola serta mendapatkan angka.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>- Passing</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Passing adalah mengoperkan bola kepada pasangan main untuk dimainkan di dalam
            area tim sendiri. Passing dibedakan menjadi dua macam, yaitu passing atas dan passing bawah.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>- Smash atau Spike</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Teknik penyerangan dalam permainan bola voli disebut smash. Smash atau spike
            adalah teknik serangan atau pukulan bola di udara sambil meloncat. Pukulan dilakukan dengan keras dan menukik yang diarahkan ke area lawan.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>- Smash</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>merupakan suatu teknik yang mempunyai gerakan kompleks. Dalam teknik smash,
            seorang spiker (penyerang) harus memperhatikan empat langkah dasar dalam melakukan spike, yaitu langkah awalan (approach), lompatan, memukul bola dan
            posisi mendarat. Pemukulan bola pada saat melakukan spike dilakukan di udara.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>- Block atau Bendungan</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Block atau bendungan merupakan teknik bertahan yang dilakukan di atas net.
            Teknik ini digunakan untuk menahan smash dari lawan. Adapun cara melakukan block, yaitu:
            Menahan serangan lawan agar bola tidak mampu menyeberangi net dan tetap berada di area lawan.
            Memperlambat gerakan bola yang telah di-smash oleh pemain lawan, sehingga lebih mudah untuk di kendalikan.</Text>
      
    </ImageBackground>
  );
};

export default Teknik_volly;