import React from 'react';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {TaskField} from '../components/item';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {todoCreate} from '../redux/todoSlice';

import {useDispatch} from 'react-redux';
import {todoDelete, todoComplete} from '../redux/todoSlice';

const Completed = () => {
  const value = useSelector(state => state.todo.value);
  const dispatch = useDispatch();

  // return value.map(todo => todo.state && <TaskField>{todo.task}</TaskField>)

  return (
    <FlatList
      data={value}
      style={styles.flat}
      renderItem={({item}) =>
        item.state && (
          <View style={styles.body}>
            <Text style={styles.input}>{item.task}</Text>
            <View style={styles.iconbody}>
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
    borderColor: 'black',
    padding: 5,
    marginHorizontal: 12,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: '#0a001a',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  flat:{
    backgroundColor: '#f2e6ff',
    paddingTop:8,
  },
  input: {
    width: 250,
    height: 30,
    marginHorizontal: 10,
    marginVertical: 10,
    alignContent: 'center',
    alignItems: 'baseline',
   
  },

  iconbody: {
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 3,
  },
});

export default Completed;
