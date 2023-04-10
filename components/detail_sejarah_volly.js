import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Sejarah_volly = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_voly.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Volly')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:75, fontSize:30, fontWeight:'bold'}}>BOLA VOLI</Text>
      <Text style={{marginTop:25, marginStart:40, fontSize:20, fontWeight:'bold'}}>Sejarah Singkat</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Sejarah Bola Voli
            Mengutip buku ajar “Permainan Bola Voli” oleh Drs. Syahrizal, permainan bola voli diciptakan oleh William C. Morgan, seorang direktur pendidikan
            jasmani pada organisasi Young Man Christian Assosiation (YMCA) pada 1895 di Holyoke, Massachusetts, Amerika Serikat.
            Bola voli diciptakan awalnya bertujuan mengembangkan kesegaran jasmani para buruh di samping bersenam umum. Permainan bola voli dicanangkan untuk
            menggantikan olahraga basket yang dianggap terlalu melelahkan.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Di awal kelahirannya, permainan bola voli diberi nama Mintonette, dengan
            jumlah pemain yang tidak ditentukan. Hingga pada 1896, Alfred T. Halstead mengubah nama Mintonette menjadi bola vola. Menurutnya, nama tersebut lebih
            cocok, sebab mengacu pada ciri permainan, yakni melambungkan bola sebelum menyentuh tanah (volleying).
            Di Indonesia, bola voli sudah diperkenalkan dan diajarkan oleh seorang guru pendidikan jasmani Belanda yang bertugas di sekolah lanjutan (HBS dan AMS).
            Hanya saja, saat itu bola voli belum mendapat tempat di hati masyarakat.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Menjelang kemerdekaan Indonesia, barulah bola voli mulai dikenal luas dan
            digemari. Hingga pada 1951, permainan bola voli secara resmi dipertandingkan  dalam PON II di Jakarta. Pertengahan 1954, pengurus Ikatan Perhimpunan
            Volley Ball Seorabaja (IPVOS) dalam rapatnya antara lain memutuskan untuk membentuk suatu induk organisasi bola voli di Indonesia.</Text>
    </ImageBackground>
  );
};

export default Sejarah_volly;