import React from "react";
import { StyleSheet, Text, View,TouchableOpacity,Alert,TouchableHighlight } from 'react-native';
import styles from "./style";
const Task =(props)=>{
    let number = props.onTask;
    let texxt = props.onAddText;
    if (number <10)
        number='0'+number;
    if (props.onTask%2===0)
    {
    return(
            <TouchableOpacity onLongPress={props.onList}>
                  <View style={styles.body_items}>
                      <View style={styles.body_item_block_blue}>
                          <Text style={styles.body_item_block_text}>{number}</Text>
                      </View>
                      <Text style={styles.body_item_text}>{texxt}</Text>
                  </View>
            </TouchableOpacity>
    )}
    else
    { 
        return(
            <TouchableOpacity onLongPress={props.onList}>
                <View style={styles.body_items}>
                    <View style={styles.body_item_block_green}>
                        <Text style={styles.body_item_block_text}>{number}</Text>
                    </View>
                    <Text style={styles.body_item_text}>{texxt}</Text>
                </View>
            </TouchableOpacity>
)}
}
export default Task;