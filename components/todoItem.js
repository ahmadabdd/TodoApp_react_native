import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
 return (
    <View style={styles.item}>
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
         <MaterialIcons name='delete' size={18} color='#333'/>
     </TouchableOpacity>
    <Text style={styles.itemText}>{item.text}</Text>
 </View>
     
 )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
    }
});