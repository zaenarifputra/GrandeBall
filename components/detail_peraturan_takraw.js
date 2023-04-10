import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

const Peraturan_takraw = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_detail_mat/bg_detail_tr.png')}>
      <TouchableOpacity onPress={()=> navigation.navigate('Takraw')}>
       <Image source={require('../assets/ic_back.png')} style={{marginStart:25, marginTop:25}}/>
      </TouchableOpacity>
      <Text style={{marginTop:15, marginStart:45, fontSize:30, fontWeight:'bold'}}>SEPAK TAKRAW</Text>
      <Text style={{marginTop:25, marginStart:40, fontSize:20, fontWeight:'bold'}}>Peraturan</Text>
      <ScrollView>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>Berikut adalah aturan-aturan yang ada dalam permainan sepak takraw: </Text>
      <Text style={{marginTop:5, marginStart:40, fontSize:14, fontWeight:'lighter'}}>- Permainan sepak takraw dilakukan oleh dua regu atau tim secara berlawanan.
      </Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>- Dalam pertandingan resmi sepak takraw, jumlah pemain dalam setiap regu
            adalah tiga orang.</Text>
      <Text style={{marginTop:10, marginStart:40, fontSize:14, fontWeight:'lighter'}}>- Regu yang memilih sepak mula pada waktu undian akan memulai permainan
            pada set pertama.</Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default Peraturan_takraw;