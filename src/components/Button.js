import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';



const Button = ({addTodo}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={addTodo}>
      <Text style={styles.text}>Add</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    height:'50%',
    borderRadius:5,
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Button;
