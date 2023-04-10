import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Teknik_rugby = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_ru.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Rugby')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:110, fontSize:30, fontWeight:'bold'}}>RUGBY</Text>
      <Text style={{marginTop:25, marginStart:40, fontSize:20, fontWeight:'bold'}}>Teknik Dasar</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Teknik dasar olahraga rugby</Text>
      <Text style={{marginTop:2, marginStart:40, fontSize:14, fontWeight:'lighter'}}>1. Berlari</Text>
      <Text style={{marginTop:2, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Keterampilan ini sangat penting dimiliki oleh pemain olahraga apapun. Bahkan,
            teknik berlari cepat akan sangat membantu Anda dalam menyerang atau bertahan.
            Lawan akan sulit mengejar saat Anda hendak mencetak skor, sedangkan Anda bisa menekel pemain lawan lebih cepat saat dalam posisi bertahan.</Text>
      <Text style={{marginTop:2, marginStart:40, fontSize:14, fontWeight:'lighter'}}>2. Mengoper bola</Text>
      <Text style={{marginTop:2, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Umumnya, teknik mengoper bola dalam olahraga rugby adalah dalam bentuk
            underhand. Itu artinya, bola dilempar dengan posisi tangan berada di bawah bahu.
            Kebanyakan operan dalam pertandingan rugby membuat bola berputar sehingga cukup mudah bagi penerima untuk menangkapnya.</Text>
      <Text style={{marginTop:2, marginStart:40, fontSize:14, fontWeight:'lighter'}}>3. Menangkap bola</Text>
      <Text style={{marginTop:2, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Setelah bola dilempar ke udara, tentu Anda harus menangkapnya. Mempelajari
            teknik dasar rugby ini sangat penting, baik dalam posisi menyerang atau bertahan. Anda bisa menguasai teknik dengan dengan main lempar-tangkap bersama
            rekan setim. Selain itu, Anda bisa meningkatkan keterampilan ini dengan berlatih tangkapan satu tangan.</Text>
      <Text style={{marginTop:2, marginStart:40, fontSize:14, fontWeight:'lighter'}}>4. Memegang bola</Text>
      <Text style={{marginTop:2, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Bola rugby memiliki bentuk memanjang, tidak bulat seperti bola sepak atau
            basket. Permainan juga kebanyakan dilakukan dengan memegang bola dan berlari untuk mencetak skor. Sebagian besar pemain memegang bola secara vertikal
            pada lengan agar lawan lebih sulit untuk menjatuhkan atau merebutnya.</Text>
      <Text style={{marginTop:2, marginStart:40, fontSize:14, fontWeight:'lighter'}}>5. Menendang bola</Text>
      <Text style={{marginTop:2, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Tendangan dalam olahraga rugby berfungsi untuk memulai pertandingan hingga
            mencetak skor. Karena bentuknya yang berbeda, tentu cara menendang bola rugby perlu teknik khusus. Anda perlu mengetahui karakteristik bola sebelum
            belajar keterampilan ini.</Text>
      <Text style={{marginTop:2, marginStart:40, fontSize:14, fontWeight:'lighter'}}>6. Menekel lawan</Text>
      <Text style={{marginTop:2, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Tekel perlu Anda lakukan untuk menghentikan dan mencegah lawan mencetak skor.
            Teknik ini dilakukan dengan melingkarkan tangan ke pinggang dan menarik tubuh lawan ke tanah. Saat melakukan tekel, Anda lebih perlu berhati-hati untuk
            mencegah cedera saat berolahraga.</Text>
      <Text style={{marginTop:2, marginStart:40, fontSize:14, fontWeight:'lighter'}}>7. Menentukan posisi</Text>
      <Text style={{marginTop:2, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Selain teknik individu seperti sebelumnya, Anda juga perlu belajar menentukan
            posisi sebagai bagian dari strategi pertandingan. Mengetahui posisi Anda akan sangat membantu saat melakukan serangan atau pertahanan.</Text>
      <Text style={{marginTop:2, marginStart:40, fontSize:14, fontWeight:'lighter'}}>8. Kerjasama tim</Text>
      <Text style={{marginTop:2, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Hal terpenting yang tak boleh terlewatkan dalam olahraga rugby adalah kerja
            sama tim. Hal ini akan membantu tim mengalahkan lawan secara lebih efektif.</Text>
      
    </ImageBackground>
  );
};

export default Teknik_rugby;