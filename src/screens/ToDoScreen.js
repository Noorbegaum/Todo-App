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
import {add, remove} from '../redux/actions/TodoAction';

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

  const renderTodoList = () => {
    return (
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <View style={styles.todoView}>
            <View style={styles.todoList}>
              <Text>{item}</Text>
            </View>
            <TouchableOpacity
              style={styles.removeTodo}
              onPress={() => removeTodo(item)}>
              <Text> Del </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.editTodo}
              onPress={() => editTodo(item)}>
              <Text> Edit </Text>
            </TouchableOpacity>
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
        <Button addTodo={addTodo} />
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
    margin: 10,
    fontSize: 30,
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
    height: 40,
    justifyContent: 'center',
    width: '70%',
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
    backgroundColor: 'red',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  editTodo: {
    backgroundColor: 'yellow',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
});

export default ToDoScreen;
