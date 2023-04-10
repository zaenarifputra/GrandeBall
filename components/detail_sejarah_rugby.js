import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Sejarah_rugby = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_ru.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Rugby')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:110, fontSize:30, fontWeight:'bold'}}>RUGBY</Text>
      <Text style={{marginTop:25, marginStart:40, fontSize:20, fontWeight:'bold'}}>Sejarah</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Sejarah sepak bola rugbi
            Ketika pertandingan sepak bola tingkat sekolah di England tahun 1823, William Webb Ellis mengambil bola dengan tangannya dan membawanya lari. Sejak
            itu, dimulailah pertandingan sepak bola rugbi. Olahraga ini dibuat berdasarkan sejarah yang terjadi secara spontan</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Kemudian Universitas Cambridge memodifikasi permainan ini, mempopulerkan dan
            membuat peraturan resmi rugbi. rugbi mulai populer tahun 1871 di sekolah-sekolah di England. Kemudian Klub rugbi mengumumkan peraturan resmi permainan
            rugbi di London sepuluh tahun kemudian.</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Tahun 1895 Liga Rugby (The Rugby League) telah didirikan dengan 13 permainan
            bersama dengan peraturan yang lebih profesional. Rugby mulai berkembang ke seluruh dunia dan pertandingan antara negara diadakan. Berbagai perubahan
            telah dilakukan. Tahun 1880 scrum telah dimodifikasi, berarti perbuatan atau metode memulai kembali permainan setelah suatu pelanggaran ketika kedua
            lawan kelompok ke depan bersama-sama dengan kepala ke bawah dan saling dan tekan untuk mendapatkan tanah sedangkan scrumhalf melemparkan bola dan
            pemain tengah (hooker) mencoba untuk rebut bola untuk tim mereka sendiri.pemain biasanya dipanggil oleh wasit (set banyak orang) tetapi bisa dibentuk
            secara spontan (longgar banyak orang).</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Pada tahun 1905 pertandingan antara Sarthmore dengan Pennsylvania telah
            memicu keributan. Presiden Amerika Serikat Theodore Roosevelt telah mengubah peraturan untuk mengurangi kekerasan dalam permainan rugby.</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Pada tahun 1906, akibat dari perubahan pada permainan rugby, muncullah
            American football di Amerika Serikat.</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Permainan rugby semakin mencoret nama terutama di Britania Raya, Selandia
            Baru, Australia dan Afrika Selatan. Jumlah klub bertambah dari 80 pada 1000 klub antara tahun 1964 sampai 1980. 1975 dibentuk Klub Sepak Bola Rugby di
            Amerika Serikat (The United States of America Rugby Football Union (USARFU). Kini permainan rugby berkembang hingga ke 80 negara di seluruh dunia.
            </Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Rugby adalah salah satu olahraga yang kasar dan lasak jika ia di lihat
            melalui mata kasar namun jika benar cara memainkan pemain tidak akan terluka. Sebaliknya, rugby adalah salah satu olahraga yang membentuk kepribadian
            seseorang malah membutuhkan disiplin yang tinggi. Rugby juga dianggap sebagai olahraga atau permainan yang dianggap pria sejati untuk beberapa pihak.
            Saat pertandingan, seseorang yang menjadi pemain rugby akan menganggap tim lawan mereka sebagai musuh bebuyutan yang perlu di kasari tetapi setelah
            pertandingan berakhir, kedua tim ini adalah sahabat yang baik.</Text>
    </ImageBackground>
  );
};

export default Sejarah_rugby;