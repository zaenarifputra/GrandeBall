import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Teknik_futsal = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_fs.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Futsal')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:110, fontSize:30, fontWeight:'bold'}}>FUTSAL</Text>
      <Text style={{marginTop:25, marginStart:40, fontSize:20, fontWeight:'bold'}}>Teknik Dasar</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Teknik dasar futsal menyerupai teknik dasar olahraga sepak bola yakni :</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>1. Passing atau mengumpan ialah sebuah teknik dasar yang wajib dikuasai oleh
            para pemain dalam olahraga futsal. Adapun, teknik ini dilakukan dengan cara mengayunkan sekaligus mengarahkan kaki hingga mengenai bola. Passing dapat
            dilakukan dengan menggunakan kaki pada bagian luar, dalam, punggung, maupun sisi samping.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>2. Controlling merupakan tindakan dari pemain saat tengaj menerima bola
            ataupun menghalau gerakan lain dari grup lawan. Teknik ini dapat dikatakan sebagai salah satu teknik yang paling dasar dalam penyesuaian pemain untuk
            menahan ataupun mengontrol bola. Controlling juga dapat dinamakan berdasarkan pada berbagai fungsinya di dalam lapangan ketika sedang mengumpan,
            menggiring, maupun menembak bola ke arah gawang lawan. Dalam melakukan kontrol pada bola dianjurkan untuk menggunakan kaki bagian dalam. Luar, dan
            telapak kaki seakan memanfaatkan situasi seperti sedang menari diiringi dengan bola yang tengah dikuasai.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>3. Teknik dribbling dapat dikatakan sebagai salah satu hal yang paling utama
            bagi para pemain futsal untuk menguasai bolo. Sebelum mengarahkan sepakan ke arah gawang lawan, umumnya seseorang harus melakukan dribbling pada bola
            tersebut dibantu dengan kemampuan gocekan ketika tengah berlaga. Walau begitu, ketika sedang melakukan aksi dribbling supaya mendapatkan hasil yang
            diharapkan, alangkah baiknya untuk menggunakan kaki oada area bagian dalam maupun luar pada sela punggung kaki.
            Perihal cara melakukan dribbling supaya mendapatkan hasil yang diinginkan tentu saja yang wajib untuk diperhatikan ialah pemain harus menguasai bola
            dengan baik, lalu saat ketika sedang berada di dalam penguasaan bola, pemain harus pandai untuk memberikan jangkauan jarak terhadap tim lawan.
            Tak lupa untuk selalu menjaga kesimbangan ketika sedang berada di lapangan serta terus melatih kelenturan gestur badan guna supaya tetap akurat dalam
            melakukan dribbling.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>4. Teknik yang berikutnya yakni shooting atau menembak bola, teknik ini dapat
            dikatakan sebagai pengujung akhir dari aksi gerakan dalam futsal. Misalnya, ketika pemain berada di dalam posisi aman dan jauh dari jangkauan lawan
            maka sepakan bola dengan keras pun perlu untuk dilakukan ke arah jaring gawang lawan dengan akurat sehingga tercipta kemungkinan untuk mendapatkan
            sebuah gol. Cara menembak bola dengan benar sepatutnya dengan menggunakan punggung kaki ketika saat sedang menembak, bola pun tampak sangat cepat dan
            berada pada arah yang lurus.</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>5. Tackling atau sliding bola merupakan salah satu teknik dasar yang dapat
            digunakan untuk merebut bola dari lawan. Meski demikian, untuk melakukan tackling haruslah untuk tetap waspada dan berhati-hati.
            Hal ini demi mengurangi risiko cedera dari seluruh pemain baik ketika dari pelaku maupun target. Tackling bisa dilakukan ketika sedang berdiri
            (standing) atau pun ketika meluncur (sliding tackle).</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>6. Tak sekadar memainkan bola dengan menggunakan kaki, setiap pemain futsal
            juga dapat memanfaatkan kepalanya di dalam permainan futsal. Dalam permainannya, umumnya heading berfungsi untuk mengoper bola atau menembak gol ke
            gawang lawan. Caranya ialah pemain menyundul bola dengan menggunakan kepala bagian depan atau dahi supaya bola bisa meluncur dengan terarah dan bertenaga.</Text>
    </ImageBackground>
  );
};

export default Teknik_futsal;