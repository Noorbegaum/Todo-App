import React, {useState} from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';

import Tabnav from '../navigation/tabnav';
import {todoCreate} from '../redux/todoSlice';
import {useDispatch} from 'react-redux';
import uuid from 'react-native-uuid';

const ToDoRedux = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const handelChange = value => {
    setInputValue(value);
  };

  const handelSubmit = () => {
    if (inputValue !== '') {
      const todoObj = {
        id: uuid.v4(),
        task: inputValue,
        state: false,
      };
      dispatch(todoCreate(todoObj));
      setInputValue('');
    } else {
      alert('Please Enter the Task');
    }
  };
  return (
    <SafeAreaView style={styles.body}>
    <View style={styles.textbody}>
    <Text style={styles.text}>Todo App</Text>
    </View>
    <View style={styles.input}>
    <View >
          <TextInput
            style={styles.inputfield}
            placeholder="✍🏼 Enter Task"
            keyboardType="default"
            onChangeText={value => handelChange(value)}
            value={inputValue}
          ></TextInput>
        </View>
        <Pressable style={styles.loginButton} onPress={handelSubmit}>
        <Text
            style={styles.btntxt}>
            Add Task
          </Text>
        </Pressable>
    </View>
    <View style={styles.container}>
        <Tabnav />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textbody: {
    flex: 1,
    alignContent: 'center',
  },
  btntxt:{
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    marginTop: 8,
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    padding: 20,
    fontWeight:'bold',
    fontFamily:'Times New Roman'
  },

  input: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
   
  },
  body: {
    flex: 1,
    // backgroundColor:'#89c2d9'
  },
  container: {
    flex: 8,
  },
  loginButton: {
    backgroundColor: '#00ccff',
    marginVertical: 20,
    marginHorizontal: 10,
    height: 35,
    width: 20,
    borderRadius: 5,
    flex: 1,
  },
  inputfield: {
    height: 20,
    width: 250,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius:9,
    padding: 10,
    flex: 1,
    // backgroundColor:"#a9d6e5",
  },
});

export default ToDoRedux;
