import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Sejarah_soccer = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_sc.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Soccer')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:75, fontSize:30, fontWeight:'bold'}}>SEPAK BOLA</Text>
      <Text style={{marginTop:25, marginStart:40, fontSize:20, fontWeight:'bold'}}>Sejarah Singkat</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Sepak bola berasal dari negara Tiongkok (China). 
            Sejarah sepak bola dimulai sejak abad ke-2 dan ke-3 sebelum Masehi pada masa Dinasti Han.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Ketika itu, masyarakat di sana mengadakan permainan 
            menggiring bola kulit dan menendangnya menuju jaring kecil.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Pertandingan sepak bola tersebut 
            dinamakan Tsu Chu (Cuju) dan digelar di sebuah lapangan terbuka.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Selain di China, sepak bola ternyata 
            juga menyebar ke Jepang dan diberi sebutan dengan Kemari. </Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Hanya saja sepak bola di Jepang dimainkan 
            dalam upacara dengan cara membentuk lingkaran dan saling menendang bola agar bola tidak jatuh ke tanah.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Sepak bola turut berkembang di masa Yunani Kuno, 
            menggunakan bola yang terbuat dari serpihan kulit yang diisi dengan rambut.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Sementara itu di Italia, permainan menendang dan 
            membawa bola pun digemari terutama mulai abad ke-16.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Namun, sejarah permainan sepak bola modern diakui berasal 
            dari Inggris pada abad ke-12 dengan cara yang cenderung lebih 'keras'.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Permainan sepak bola tersebut bukan hanya 
            melibatkan tendangan, melainkan juga pukulan dari kepalan tangan.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Karena menimbulkan banyak kekerasan 
            selama pertandingan, akhirnya Raja Edward III melarang olahraga ini dimainkan pada tahun 1365.</Text>
    </ImageBackground>
  );
};

export default Sejarah_soccer;