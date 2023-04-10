import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const Peraturan_basket = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_bs.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Basket')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:10}}/>
      </TouchableOpacity>
      <Text style={{marginTop:5, marginStart:75, fontSize:30, fontWeight:'bold'}}>BOLA BASKET</Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:20, fontWeight:'bold'}}>Peraturan</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Aturan Dasar Permainan Bola Basket
Bola dapat dilemparkan ke segala arah dengan menggunakan salah satu atau kedua tangan.
Bola hanya boleh digerakkan dengan menggiring (memantulkan) bola atau mengoper bola. Setelah pemain meletakkan dua tangan pada bola (tidak termasuk menangkap bola), mereka tidak dapat menggiring bola.
Bola harus ditembakkan. Bola harus dipegang di dalam atau di antara telapak tangan. Lengan atau anggota tubuh lainnya tidak diperbolehkan memegang bola.
Pemain basket tidak boleh menahan, mendorong, memukul, atau menjegal pemain lawan dengan berbagai cara.
Pelanggaran pertama akan dihitung sebagai kesalahan. Pelanggaran kedua adalah sanksi berupa diskualifikasi pemain pelanggar. Jika pelanggaran dilakukan untuk mencederai lawan, maka pemaian pelanggar tidak boleh ikut bermain sepanjang pertandingan.
Apabila salah satu pihak melakukan tiga kesalahan berturut-turut (dalam artian tanpa adanya pelanggaran balik oleh lawan), maka kesalahan itu akan dihitung sebagai gol untuk lawan.
Setiap tim memiliki 24 detik untuk menembak bola. Tembakan baik masuk keranjang atau memukul tepi keranjang. Jika bola gagal masuk ke keranjang, maka waktu tembakan kembali selama 24 menit.
Gol terjadi apabila bola yang dilemparkan atau dipukul dari lapangan masuk ke dalam keranjang, dalam hal ini pemain yang menjaga keranjang tidak menyentuh atau mengganggu gol tersebut. Apabila bola terhenti di pinggir keranjang atau pemain lawan menggerakkan keranjang, maka hal tersebut tidak akan dihitung sebagai sebuah gol.
Bila bola keluar lapangan pertandingan, bola akan dilemparkan kembali ke dalam dan dimainkan oleh pemain pertama yang menyentuhnya. Pelempar bola diberi waktu 5 detik untuk melemparkan bola dalam genggaman. Bila memegang lebih lama, maka kepemilikan bola berpindah.
Wasit berhak untuk memperhatikan permainan para pemain dan mencatat jumlah pelanggaran dan memberi tahu wasit pembantu bila terjadi pelanggaran berturut-turut.
Wasit pembantu (asisten wasit) memperhatikan bola dan mengambil keputusan apabila bola dianggap telah keluar lapangan, pergantian kepemilikan bola, serta menghitung waktu.</Text>
    </ImageBackground>
  );
};

export default Peraturan_basket;