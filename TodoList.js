import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  NativeBaseProvider,
  Container,
  Text,
  FlatList,
  Box,
  Button,
  SimpleGrid,
  VStack,
  HStack,
  List,
} from 'native-base';
import {} from 'react-native/Libraries/NewAppScreen';

const Todo = ({todoList}) => {
  const isDarkMode = useColorScheme() === 'dark';
  
  return (
    <List spacing={2} my={2}>
      {todoList.map((ele)=>{
        return(
          <List.Item key={ele.id}>{ele.title}</List.Item>
        )   
      })}
    </List>
  );
};

const styles = StyleSheet.create({});

export default Todo;
