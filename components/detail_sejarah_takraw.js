import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Sejarah_takraw = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_tr.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Takraw')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:45, fontSize:30, fontWeight:'bold'}}>SEPAK TAKRAW</Text>
      <Text style={{marginTop:25, marginStart:40, fontSize:20, fontWeight:'bold'}}>Sejarah Singkat</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Sepak takraw merupakan permainan atau olahraga yang cikal bakalnya berasal
            500 tahun lalu pada zaman Kesultanan Melayu pada 634-713 M. Pada saat itu, sepak takraw dikenal dalam bahasa Melayu sebagai sepak rago. Permainan atau
            olahraga ini sebagian besar sering dimainkan oleh orang-orang di istana kerajaan. Kemudian permainan sepak rago makin banyak dikenal dan tersebar di
            kawasan Asia Tenggara. Tidak ketinggalan bersamaan juga dibuat aturan formalnya pada era tahun 1940-an.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Secara bahasa, sepak takraw terdiri dari dua kata yang berasal dari bahasa
            Melayu yakni “sepak” dan “takraw”. Kata “sepak” memiliki arti menendang. Sedangkan “takraw” berasal dari bahasa Thailand yang artinya bola yang
            dianyam. Induk olahraga sepak takraw di Indonesia sendiri lahir di tahun 1971. Organisasi yang menjadi induk olahraga ini bernama PERSERASI. Kemudian
            baru pada tahun 1980 kejuaran nasional sepak takraw untuk pertama kalinya digelar di Indonesia yang terus berkembang dan mengalami pasang surut
            hingga saat ini.</Text>
    </ImageBackground>
  );
};

export default Sejarah_takraw;