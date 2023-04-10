import react from 'react';
import { View, TextInput } from 'react-native'

const CustomTextInputSecur = (props) => {
  return(
    <View>
      <TextInput secureTextEntry={true} placeholder = {props.ph} style={{backgroundColor:'#dcdada', padding:12,
      marginHorizontal:25, borderRadius:10, color:'black', marginVertical:5}}/>
    </View>
  );
}

export default CustomTextInputSecur;