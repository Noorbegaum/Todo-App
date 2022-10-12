//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Button from '../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {add, remove,edit} from '../redux/actions/TodoAction';
import Icon from 'react-native-vector-icons/AntDesign';

const ToDoScreen = () => {
  const [todoValue, setTodoValue] = useState(' ');
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  const todos = data.todos.todos;

  const addTodo = event => {
    event.preventDefault();
    setTodoValue(todoValue);
    if (todoValue == ' ') {
      alert('Please enter the task');
    } else if (todos && !todos.includes(todoValue)) {
      dispatch(add(todoValue));
      setTodoValue(' ');
    } else {
      alert(`${todoValue} already added in Todo List`);
    }
  };

  const removeTodo = item => {
    const todoIndex = todos.indexOf(item);
    if (todoIndex > -1) {
      dispatch(remove(item));
    } else {
      alert(`${todoValue} is not in the Todo List`);
    }
  };

  const editTodo = item =>{
    dispatch(edit(item));
  }

  const renderTodoList = () => {
    return (
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <View style={styles.todoView}>
            <View style={styles.todoList}>
              <Text>{item}</Text>
            </View>
            <Button
              style={styles.removeTodo}
              onPress={() => removeTodo(item)}
              label={<Icon name="delete" size={20} color="white" />}
            />
            <Button
              onPress={() => editTodo(item)} label={<Icon name="edit" size={20} color="white" />} style={styles.editTodo}
            />
          </View>
        )}></FlatList>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Todo App</Text>
      <View style={styles.fields}>
        <TextInput
          style={styles.input}
          placeholder="Add a task"
          showSoftInputOnFocus={false}
          value={todoValue}
          onChangeText={setTodoValue}
        />
        <Button onPress={addTodo} label={<Icon name="plus" size={30} color="white" />} color="#900" style={styles.button}/>

        
      </View>
      {renderTodoList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  fields: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
  },
  text: {
    color:'black',
    marginTop:90,
    fontSize: 30,
    fontWeight: 'bold',
  },
  textin:{
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
  },
  button: {
      backgroundColor: 'green',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 4,
      padding:5,
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    height: 50,
    width: 250,
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  todoList: {
    height: '100%',
    justifyContent: 'center',
    width: '75%',
  },
  todoView: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    // borderWidth: 1,
    borderBottomWidth: 1,
    // borderRadius: 10,
    // borderBottomEndRadius:10,
  },
  removeTodo: {
    backgroundColor: '#E33D3D',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    padding:5,
  },
  editTodo: {
    backgroundColor: '#FFD206',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    padding:5,
  },
});

export default ToDoScreen;
