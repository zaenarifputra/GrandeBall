import react from 'react';
import {Text, View, TouchableOpacity} from 'react-native';


const CustomButtonRegister = (props) =>{
  return(
    <View>
      <TouchableOpacity onPress={props.onPress} style={{backgroundColor:'#FC6701', padding:12, 
      marginHorizontal:25, borderRadius:15,  marginTop:20}} >
        <Text style={{textAlign:'center', color:'#FFFFFF', 
        fontWeight:'bold',fontFamily:'',}}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomButtonRegister;