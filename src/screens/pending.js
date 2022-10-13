import React, {useState} from 'react';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {TaskField} from '../components/item';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {todoDelete, todoComplete, todoEdit} from '../redux/todoSlice';
import {useDispatch} from 'react-redux';

const Incompleted = ({navigation}) => {
  const value = useSelector(state => state.todo.value);
  const dispatch = useDispatch();
  const [itemId, setItemId] = useState('');
  const [inputValue, setInputValue] = useState('');
  const handelChange = value => {
    setInputValue(value);
  };

  const handelSubmit = () => {
    if (inputValue !== '') {
      const todoObj = {
        id: itemId,
        task: inputValue,
      };
      dispatch(todoEdit(todoObj));
      setInputValue('');
      setItemId('');
    } else {
      alert('Please Enter the Task');
    }
  };

  const handleComplete =()=>{
    dispatch(todoComplete(item.id))
    navigation.navigate('Completed')
  }

  // return value.map(todo => !todo.state && <TaskField>{todo.task}</TaskField>);
  return (
    <FlatList
      data={value}
      style={styles.flat}
      renderItem={({item}) =>
        itemId === item.id
          ? !item.state && (
              <View style={styles.body}>
               
                <TextInput
                  style={styles.inputfield}
                  placeholder="Enter your Task "
                  keyboardType="default"
                  onChangeText={value => handelChange(value)}
                  defaultValue={item.task}
                />
                <View style={styles.iconbody}>
                  <Icon
                    name="plus-square"
                    size={25}
                    color="green"
                    style={styles.iconid}
                    onPress={() => handelSubmit()}
                  />
                </View>
              </View>
            )
          : !item.state && (
              <View style={styles.body}>
                <Text style={styles.input}>{item.task}</Text>
                <View style={styles.iconbody}>
                  <Icon
                    name="edit"
                    size={25}
                    color="#007acc"
                    style={styles.icon}
                    onPress={() => {
                      setItemId(item.id);
                    }}
                  />
                  <Icon
                    name="check"
                    size={25}
                    color="green"
                    style={styles.icon}
                    onPress={() => dispatch(todoComplete(item.id))}
                  />
                  <Icon
                    name="trash-o"
                    size={25}
                    color="red"
                    style={styles.icon}
                    onPress={() => {
                      dispatch(todoDelete({id: item.id}));
                    }}
                  />
                </View>
              </View>
            )
      }
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
    // alignContent: 'space-around',
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    // backgroundColor:"#a9d6e5",
  },
  input: {
    width: 250,
    height: 30,
    marginVertical: 10,
    alignContent: 'center',
    alignItems: 'baseline',
  },
  flat:{
    // backgroundColor:'#89c2d9'
  },

  iconbody: {
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
  
  },
  icon: {
    padding:5,
  },
  inputfield: {
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    width: 260,
    height: 30,
    borderRadius: 5,
  },
  iconid: {
    marginLeft: 24,
  },
});

export default Incompleted;
