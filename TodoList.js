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

const Todo = ({todoList}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <List spacing={2} my={2}>
      {todoList.map(ele => {
        return (
          <List.Item key={ele.id}>
            <Text style={{flex: 1}}>{ele.id}</Text>
            <View style={{flex: 1}}>
              <Checkbox
                value="test"
                accessibilityLabel="This is a dummy checkbox"
                defaultIsChecked
              />
            </View>
            <Text style={{flex: 6}}>{ele.title}</Text>
            <Icon name="trash" style={{flex: 1}} />
          </List.Item>
        );
      })}
    </List>
  );
};

const styles = StyleSheet.create({});

export default Todo;
