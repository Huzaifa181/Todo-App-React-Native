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
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from 'native-base';
import {} from 'react-native/Libraries/NewAppScreen';

const AddTodo = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, setText] = useState('');
  return (
    <NativeBaseProvider>
      <VStack>
        <Box style={styles.header} py={5} pl={2}>
          <Text style={styles.headerText}>Hello Todo</Text>
        </Box>
        <Box p={4} w="90%" mx="auto">
          <Heading size="lg" color="primary.500">
            Add Todo
          </Heading>
          <VStack space={2} mt={5}>
            <FormControl>
              <FormControl.Label
                _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
                Add Title
              </FormControl.Label>
              <Input onChangeText={setText} />
            </FormControl>
            <Text>{text}</Text>
            <Button colorScheme="cyan" _text={{color: 'white'}}>
              Login
            </Button>
          </VStack>
        </Box>
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

export default AddTodo;
