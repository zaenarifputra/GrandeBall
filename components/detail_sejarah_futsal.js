import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Sejarah_futsal = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_fs.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Futsal')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:110, fontSize:30, fontWeight:'bold'}}>FUTSAL</Text>
      <Text style={{marginTop:25, marginStart:40, fontSize:20, fontWeight:'bold'}}>Sejarah Singkat</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Permainan futsal pada mulanya dipopulerkan di kota Montevideo, Uruguay pada
            tahun 1930, oleh Juan Carlos Ceriani. Keunikan dari futsal memperolah perhatian yang positif di seluruh Negara Bagian Amerika Selatan, terutama di
            Negara Brasil. Ketrampilan yang dikembangkan dalam permainan ini bisa dilihat melalui berbagao gaya terkenal dunia yang telah diperlihatkan oleh para
            pemain Brasil di luar ruangan atau yang lebih tepatnya berada di lapangan berukuran biasa.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Contohnya ialah Pele, seorang bintang terkenal yang berasal Brasil, 
            mengembangkan bakatnya melalui olahraga permainan futsal. Sementara, Negara Brasil terus dainggap sebagai pusat permaian futsal dunia, pada era
            sekarang, permainan ini dikompetisikan di bawah naungan dari Fédération Internationale de Football Association (FIFA) di seluruh dunia, di mulai dari
            Eropa hingga Amerika Tengah serta Amerika Utara, Afrika, Asia, dan juga Oseania.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Pertandingan tingkat internasional pertama kali digelar pada tahun 1965,
            Negara Paraguay menjadi juara dari Piala Amerika Selatan untuk yang pertama kalinya. Enam perebutan Piala Amerika Selatan yang selanjutnya
            diselenggarakan hingga pada tahun 1979, dan seluruh gelaran juara disapu habis oleh Brasil. Brasil, berhasil meneruskan dominasinya dengan menjuarai
            Piala Pan Amerika yang pertama yang diselenggarakan pada tahun 1980 dan memenangkannya kembali pada perebutan yang berikutnya yakni pada tahun 1984.
            </Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Futsal World Cup Championsip pertama kali diadakan dengan bantuan dari FIFUSA
            (sebelum seluruh anggotanya bergabung dengan organisasi FIFA pada tahun 1989) di Kota Sao Paulo, Brasil, pada tahun 1982, berakhir dengan Brasil
            berhasil berada di posisi pertama dan menjuarai kompetisi tersebut. Brasil mengulangi kemenangannya di Kejuaraan Dunia yang kedua yang diselenggarakan
            pada tahun 1985 di Spanyol, tetapi dalam Kejuaraan Dunia ketiga tahun 1988 di Australia, Brasil mendapatkan kekalahan dari Paraguay.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Pertandingan futsal internasional pertama diadakan di Amerika Serikat pada
            bukan Desember 1985, di Universitas Negeri Sonoma di Rohnert Park, Kota California.</Text>
    </ImageBackground>
  );
};

export default Sejarah_futsal;