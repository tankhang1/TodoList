import React ,{useState} from 'react'
import { Keyboard, StyleSheet, Text, View,Alert } from 'react-native';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import Task from './component/Task/task'
// import Taskk1 from './component/Task';
import Form1 from './component/Form/form';
import { AntDesign } from '@expo/vector-icons';
export default function App() {
  const [texxt, setTexxt] = React.useState('');
  const [tasklist,setTaskList] = React.useState([]);
  const handleAddList=(value)=>{
    setTaskList([...tasklist,value])
  };
  const handledeleltetask=(index)=>{
    Alert.alert(
      "Cảnh báo",
      "Bạn có chắc chắn muốn xóa!!!",
      [
        {
          text: "Không",
          onPress: () => {},
          style: "cancel"
        },
        { text: "Chắc chắn", onPress: () => {
            let listtmp= [...tasklist];
            //ham xoa
            listtmp.splice(index,1);
            setTaskList(listtmp);} 
        }
      ]
    );
      
  }
  return (
    <View style={styles.container}>
        <View style={styles.body}>  
          <Text style={styles.header_text}>Todo List</Text>
          <ScrollView style={styles.items}>
            {
              tasklist.map((items,index) =>{
                return <Task key={index} onTask={index+1} onAddText={items} onList={()=>handledeleltetask(index)}/>
              })
            }

          </ScrollView>
        </View>
      <Form1 onAddList={handleAddList}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ecf6f7',
  },
  
  header_text:
  {
    marginTop: 40,
    marginLeft: 20,
    fontSize: 25,
    fontWeight:'bold',
    color: '#3797b0',
  },
  body:
  {
    flex:1,
  },
});
