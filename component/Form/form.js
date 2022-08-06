import React from "react";
import { View,TextInput,TouchableOpacity,Keyboard } from "react-native";
import styles from "./style"
import { AntDesign } from '@expo/vector-icons';
const Form1 =(props)=>{
    const [value, setText] = React.useState('');
    const handleText=()=>
    {
        Keyboard.dismiss();
        alert(value);
        setText('');
    }
    const handleAddList =()=>{
        if (value.length===0)
            alert('Xin vui long nhap thong tin!');
        else
        {
            Keyboard.dismiss();
            alert('Ban vua nhap cong viec moi la : '+value);
            setText('');
        }
        props.onAddList(value);
    }
    return(
        <View style={styles.footer}>
          <TextInput
            value={value}
            onChangeText={(text) => setText(text)}
            style={styles.footer_input}
            placeholder="Your task"
            keyboardType='default'
          />
          <TouchableOpacity style={styles.icontouch} onPress={handleAddList}>
            <AntDesign name="pluscircle" size={40} color="#117090" style={styles.iconfix}/>
          </TouchableOpacity>
        </View>
    )
}
export default Form1;