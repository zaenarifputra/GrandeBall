import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Peraturan_futsal = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_fs.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Futsal')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:110, fontSize:30, fontWeight:'bold'}}>FUTSAL</Text>
      <Text style={{marginTop:25, marginStart:40, fontSize:20, fontWeight:'bold'}}>Peraturan</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Tiap-tiap cabang olahraga tentu saja mempunya kategori pelanggaran serta
            sanksi yang diberlakukan, begitupun dengan permainan futsal. Sehingga pemain tak dapat berlaku curang maupun ugal-ugalan di dalam lapangan. Berikut,
            contoh sanksi beserta pelanggaran dalam futsal :</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>1. Tendangan Bebas Langsung
            Tendangan bebas langsung merupakan salah satu jenis dari sanksi yang dikeluarkan oleh wasit bagi pemain yang telah melanggar aturan dan berlaku ketika
            laga tengah berlangsung.Tendangan bebas oleh tim lawan dilakukan dari tempat pelanggaran tersebut terjadi, tetapi tetap disesuaikan dengan ketentuan
            mengenai posisi tendangan bebas. Berikut pelanggaran yang sanksi diberikan merupakan tendangan bebas diantaranya :</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>- Mendorong secara sengaja kepada kubu lawan
            Memegang bola dengan sengaja (tidak berlaku bagi penjaga gawang yang berada di daerah pinaltinya sendiri)</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>- Bertindak secara kasar di area fisik, misalnya seperti memukul ataupun
            berusaha untuk menendang pemain dari tim lawan Mendorong secara sengaja kepada pemain dari tim lawan</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>- Melakukan tackle terhadap pemain dari tim lawan baik disengaja maupun tidak
            Mencoba untuk menahan, memegang, maupun menarik sehingga mengganggu pemain dari tim lawan</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>2. Tendangan bebas secara tidak langsung dapat diberikan apabila misalnya ada
            tim yang melakukan sebuah kesalahan baik itu dari sang kiper maupun pemain yang lainnya.Berikut sederet sanksi dari tendangan bebas tak langsung
            sebagai akibat dari terjadi pelanggaran atau kesalahan bagi pemain, misalnya yakni :</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>- Melakukan tindakan menendang maupun memukul pemain dari pihak lawan secara
            berlebihan (hal ini tergolong dalam pelanggaran keras dan dapat dikenakan peraturan yang berlaku seperti diskualifikasi)</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>- Pemain menggunakan tangan baik disengaja maupun tidak ketika sedang berusaha
            untuk mengontrol bola</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>- Bagi kiper yang dalam mengontrol bola menggunakan kaki atau tangan harus
            memakan waktu paling lama sekitar empat detik.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>3. Pada bagian ini akan berlaku apabila pemain melakukan kesalahan di area
            dalam pinalti. Bagi jenis pelanggaran dan kesalahannya serupa dengan tendangan langsung maupun tidak langsung.Untuk sanksi dari tendangan pinalti ini,
            wasit harus terlibat dan memberikan ketentuan dalam peraturan yang berlaku pada permainan futsal.</Text>
    </ImageBackground>
  );
};

export default Peraturan_futsal;