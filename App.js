import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import {
  NativeBaseProvider,
  Container,
  Text,
  Box,
  Button,
  SimpleGrid,
  VStack,
  HStack,
} from 'native-base';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [showAddTodoScreen, setShowAddTodoScreen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [counter, setCounter] = useState(3);
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: 'First Item',
      completed: false,
    },
    {
      id: 2,
      title: 'Second Item',
      completed: false,
    },
  ]);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const addTodoItem = text => {
    const todoItem = {
      id: counter,
      title: text,
      completed: false,
    };
    setCounter(counter + 1);
    setTodoList([...todoList, todoItem]);
    setShowAddTodoScreen(false);
  };

  useEffect(() => {}, []);
  if (showAddTodoScreen) {
    return <AddTodo addTodoItem={addTodoItem} />;
  }
  return (
    <NativeBaseProvider>
      <VStack>
        <Box style={styles.header} py={5} pl={2}>
          <Text style={styles.headerText}>Hello Todo</Text>
        </Box>
        <Text>Hello Todo</Text>
        <Box mx={7} my={4}>
          <Button
            danger
            backgroundColor="#B980F0"
            onPress={() => setShowAddTodoScreen(true)}>
            Add Todo
          </Button>
        </Box>
        <TodoList todoList={todoList} setTodoList={setTodoList}></TodoList>
      </VStack>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#B980F0',
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
