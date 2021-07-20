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

  useEffect(() => {}, []);
  if (showAddTodoScreen) {
    return <AddTodo />;
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
            backgroundColor="green"
            onPress={() => setShowAddTodoScreen(true)}>
            Add Todo
          </Button>
        </Box>
        <TodoList todoList={todoList}></TodoList>
      </VStack>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#313D5A',
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
