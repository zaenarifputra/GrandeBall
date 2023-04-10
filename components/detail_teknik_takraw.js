import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

const Teknik_takraw = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_tr.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Takraw')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:45, fontSize:30, fontWeight:'bold'}}>SEPAK TAKRAW</Text>
      <Text style={{marginTop:7, marginStart:40, fontSize:20, fontWeight:'bold'}}>Teknik Dasar</Text>
      <ScrollView>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Berikut ini adalah macam macam teknik dasar sepak
            takraw yang perlu diketahui pemula:</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>1. Menyepak Menyepak merupakan gerakan utama dan
            paling banyak digunakan dalam
            permainan sepak takraw, berhubung kaki menjadi bagian tubuh yang paling dominan untuk memainkan olahraga ini. Ada tujuh
            gerakan menyepak, yaitu:
            Sepak sila Sepak kura/kuda, Sepak cungkil, Sepak simpuh/badeg, Sepak mula (servis) & Sepak tapak (menapak)</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>2. Memaha/Kontrol Paha Memaha adalah gerakan
            memainkan bola dengan paha
            untuk mengontrol bola. Bola dikenai dengan tungkai bagian atas bagian tengah paha, bukan pada ujung (lutut) atau pangkal
            paha. Gerakan ini biasanya digunakan untuk menahan dan menerima bola dari serangan lawan, atau untuk membentuk dan menyusun
            serangan.</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>3. Mendada/Kontrol Dada
            Mendada adalah gerakan dasar memainkan bola dengan dada. Perkenaan bola adalah pada bidang yang lebar, baik pada dada kiri
            maupun kanan, kemudian bukan pada bagian tengah dada. Gerakan ini biasa digunakan untuk mengontrol bola.</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>4. Membahu/Kontrol Bahu Permainan Sepak Takraw
            (Sumber: Rules of Sport) zoom-in-white Perbesar Permainan Sepak Takraw (Sumber: Rules of Sport)
            Gerakan ini menggunakan bahu, bagian badan antara batas lengan dengan leher, untuk mempertahankan serangan dari pihak
            lawan. Membahu biasanya digunakan untuk bertahan dari serangan lawan yang mendadak.</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>5. Menyundul dilakukan dengan menggunakan kepala.
            Gerakan ini digunakan untuk bertahan, mengoper bola kepada teman, dan melakukan smash ke arah lawan.
            Menyundul bola dapat dilakukan dengan berdiri di tempat atau melompat. Jika dilakukan untuk bertahan diri, menyundul bola
            dilakukan dengan berdiri di tempat, sedangkan jika tujuannya untuk menyerang dilakukan dengan melompat.</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>6. Menahan Bola dengan Dada
            Teknik ini dilakukan apabila bola yang datang setinggi dada. Ada pun cara untuk melakukannya, di antaranya adalah:
            Berdiri dengan sikap kuda-kuda.
            Badan dicondongkan ke arah bagian belakang semabri membusungkan dada.
            Pada saat badan menyentuh bola, badan dikeraskan dan kemudian didorong ke depan hingga bola memantul dengan baik.
            Pandangan fokus diarahkan menuju bola dan juga sasaran.
            Menahan Bola dengan Paha Bola dapat ditahan dengan menggunakan paha apabila datangnya bola setinggi perut atau pinggang.
            Ada pun cara untuk melakukannya adalah sebagai berikut: Berdiri dengan menggunakan satu kaki dengan lutut posisinya sedikit
            ditekuk.Kaki yang lain diangkat dengan diikuti paha yang naik ke atas.Menahan bola dengan menggunakan paha bagian atas.
            Pandangan fokus ke arah bola dan juga sasaran.</Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default Teknik_takraw;