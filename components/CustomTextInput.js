import react from 'react';
import { View, TextInput } from 'react-native'

const CustomTextInput = (props) => {
  return(
    <View>
      <TextInput placeholder = {props.ph} style={{backgroundColor:'#dcdada', padding:12,
      marginHorizontal:25, borderRadius:15, borderWidth:'#CF5500', marginVertical:5}}/>
    </View>
  );
}

export default CustomTextInput;