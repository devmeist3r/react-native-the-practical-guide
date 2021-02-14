import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Goalitem(props) {
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 5,
  },
});
