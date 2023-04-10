import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Peraturan_rugby = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_ru.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Rugby')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:110, fontSize:30, fontWeight:'bold'}}>RUGBY</Text>
      <Text style={{marginTop:25, marginStart:40, fontSize:20, fontWeight:'bold'}}>Peraturan</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Aturan Bermain Rugby</Text>
      <Text style={{marginStart:40, fontSize:14, fontWeight:'lighter'}}>Skor</Text>
      <Text style={{marginTop:2, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Ada 4 cara untuk mencetak poin dalam olahraga rugby, yaitu percobaan,
            konversi, drop goal, dan tendangan penalti. </Text>
      <Text style={{marginTop:2, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Skor percobaan adalah ketika seorang pemain mendaratkan bola ke area gawang
            tim lawan. Setelah mencoba mencetak gol, tim yang mencetak gol bisa mencoba konversi untuk mendapatkan lebih banyak poin, dengan menendang bola
            melewati mistar gawang dan melalui uprights (tiang-tiang tegak rugbi). Drop goal terjadi ketika seorang pemain memantulkan bola ke tanah, kemudian
            menendangnya melewati gawang. Jika lawan melakukan penalti, tim bisa diberikan tendangan penalti dengan menendang bola melewati gawang.
            Jumlah poin yang diberikan untuk keempat metode ini tergantung pada jenis rugbi yang dimainkan. </Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Dalam rugby union, percobaan diberi skor 5 poin, konversi 2 poin, drop goal 3
            poin, dan tendangan penalti 3 poin. Sementara skor di liga rugby adalah 4 poin untuk percobaan, 2 poin untuk konversi, 1 poin untuk drop goal, dan 2
            poin untuk tendangan penalti.</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Durasi Pertandingan rugbi umumnya terdiri atas 2 babak 40 menit, waktu paruh
            5 menit, dan tanpa timeout. Permainan untuk kalangan remaja mungkin bisa kurang dari 40 menit per babak. </Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Pemain Satu tim untuk pertandingan rugby union terdiri atas 15 pemain (8 di
            depan dan 7 di belakang).</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Versi rugbi lain ada yang menggunakan 10 pemain dalam satu tim (5 di depan
            dan 5 di belakang), dan menggunakan 7 pemain di setiap tim (3 di depan dan 4 di belakang) – dikenal juga dengan rugby sevens dan ini sangat populer.
            </Text>
      
    </ImageBackground>
  );
};

export default Peraturan_rugby;