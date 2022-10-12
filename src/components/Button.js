import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-vector-icons/';

const Button = ({label,onPress,style}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Button;
