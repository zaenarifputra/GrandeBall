import react from 'react-native';
import { Text, View, Image, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

const Home = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/bg_db.png')} style={{marginStart:1.5, marginBottom:1.5}}>
    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
      <Image source={require('../assets/ic_pro_log.png')} style={{height:45, width:300, marginStart:17, marginTop:30}} />
    </TouchableOpacity>
      <Text style={{fontFamily:'Poppins', fontSize:20, color:'#FFFFFF', fontWeight:'bold', marginTop:20, marginStart:40}}>OLAHRAGA PERMAINAN </Text>
      <Text style={{fontFamily:'Poppins', fontSize:20, color:'#FFFFFF', fontWeight:'bold', marginTop:5, marginStart:100}}>BOLA BESAR</Text>
    <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={()=> navigation.navigate('Soccer')}>
        <Image source={require('../assets/soccer/ic_mat_bola.png')} style={{height:80, width:80, marginTop:60, marginStart:25}}/>
      </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Basket')}>
          <Image source={require('../assets/basket/ic_mat_basket.png')} style={{height:80, width:80, marginTop:60, marginStart:25}}/>
        </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('Volly')}>
            <Image source={require('../assets/volly/ic_mat_volly.png')} style={{height:80, width:80, marginTop:60, marginStart:25}}/>
          </TouchableOpacity>      
    </View>
    <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={()=> navigation.navigate('Takraw')}>
        <Image source={require('../assets/takraw/ic_mat_takraw.png')} style={{height:80, width:80, marginTop:30, marginStart:25}}/>
      </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Futsal')}>
          <Image source={require('../assets/futsal/ic_mat_futsal.png')} style={{height:80, width:80, marginTop:30, marginStart:25}}/>
        </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('Rugby')}>
            <Image source={require('../assets/rugby/ic_mat_rugby.png')} style={{height:80, width:80, marginTop:30, marginStart:25}}/>
          </TouchableOpacity>
    </View>
      <Text style={{fontFamily:'Poppins', fontSize:20, color:'#1B71A1', fontWeight:'bold', marginTop:20, marginStart:28}}>Tes ingatan kamu yuk !!! </Text>
    <ScrollView  showsHorizontalScrollIndicator={false} horizontal='true' >
      <TouchableOpacity onPress={()=> navigation.navigate('Quiz_Soccer')}>
      <Image source={require('../assets/btn_all_quiz.png')} style={{height:180, width:190, marginTop:30, marginStart:70}}/>
      </TouchableOpacity>
    </ScrollView>
    </ImageBackground>
  );
};

export default Home;