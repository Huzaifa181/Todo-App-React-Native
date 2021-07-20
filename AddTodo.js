import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
// import {Icon} from 'react-native-elements';
import {
  NativeBaseProvider,
  Container,
  Text,
  FlatList,
  Box,
  Button,
  SimpleGrid,
  IconButton,
  Checkbox,
  VStack,
  HStack,
  Icon,
  List,
} from 'native-base';
import {} from 'react-native/Libraries/NewAppScreen';

const AddTodo = ({todoList}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NativeBaseProvider>
      <VStack>
        <Box style={styles.header} py={5} pl={2}>
          <Text style={styles.headerText}>Hello Todo</Text>
        </Box>
        <Text>Hello Todo</Text>
        <Text>Add todo screen</Text>
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

export default AddTodo;
