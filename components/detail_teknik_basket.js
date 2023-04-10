import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Teknik_basket = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_bs.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Basket')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:10}}/>
      </TouchableOpacity>
      <Text style={{marginTop:5, marginStart:75, fontSize:30, fontWeight:'bold'}}>BOLA BASKET</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:20, fontWeight:'bold'}}>Teknik Dasar</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Ada lima dasar teknik permainan bola basket, yaitu:</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>1. Dribbling
            Teknik yang paling sering dilakukan dalam permainan bola basket adalah dribbling. Metodenya yaitu membawa bola dengan cara memantul-mantulkannya ke
            lantai dengan satu tangan atau secara bergantian sambil berjalan atau berlari.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>2. Catching & Passing
            Passing adalah mengoper atau memberikan bola ke kawan dalam permainan bola basket. Sementara catching adalah menangkap bola basket dari tim maupun
            lawan. Teknik ini pada umumnya dilakukan dengan 2 bahkan 1 tangan. Gerakannya harus cepat, tepat dan keras, tetapi tidak tergesa-gesa sehingga dapat
            dikuasai oleh kawan yang menerimanya.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>3. Shooting
            Teknik dasar berikut ini sangat menentukan kemenangan.  Butuh akurasi yang tepat agar bola bisa masuk ke dalam ring. Untuk menjadi shooter yang handal,
            permain perlu menjaga keseimbangan badan dan koordinasi yang baik, konsentrasi penuh, serta punya rasa sensitivitas tinggi.</Text>
    <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>4. Pivot Istilah pivot dalam bola basket adalah gerakan memutar badan dengan
          bertumpu pada satu kaki sebagai porosnya sambil memegang bolabasket. Gerakan putaran pivot sebaiknya tidak sampai menggeser letak kaki (poros) yang
          dipakai berputar. Jika sampai geser maka sudah termasuk pelanggaran. Gerakan berputar tersebut bisa sampai 380 derajat. </Text>
    <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>5. Rebound Pengertian rebound adalah pemain mendapatkan bola pantul yang gagal
          masuk ring. Para pemain yang biasanya melakukan rebound adalah mereka yang berada di posisi depan dan tengah atau pemain yang memiliki tinggi badan lebih
          tinggi daripada pemain lain.</Text>
    </ImageBackground>
  );
};

export default Teknik_basket;