import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body_items:
    {
      flexDirection: 'row',
      marginLeft: 20,
      marginRight:10,
      padding: 10,
      marginVertical:10,
      backgroundColor:'white',
      alignItems:'center',
    },
    body_item_block_blue:
    {
      width:50,
      height:40,
      backgroundColor:'#40d0eb',
      borderRadius: 10,
      justifyContent:'center',
      alignItems:'center',
    },
    body_item_block_text:{
        color: '#c9fff9',
        fontSize:16,
        fontWeight:'700',
    },
    body_item_text:{
        marginLeft: 10,
        fontSize: 20,
    },
    body_item_block_green:
  {
    width:50,
    height:40,
    backgroundColor:'#4cef48',
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
  },
})
export default styles;