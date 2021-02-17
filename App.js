import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Button } from 'react-native';


export default App = () => {
  const { width, height } = Dimensions.get('window')
  const [todo, setTodo] = useState('')
  const [hastext, setHastext] = useState(false)
  const [todoList, setTodoList] = useState([])
  const [number, setNumber] = useState(1)

  const ChangeToDo = (text) => {
    if (!hastext) {
      setTodo(number + '. ' + text)
      setNumber(number+1)
      setHastext(true)
    }
    else
      setTodo(text)
    if (text.length <= 0) {
      setHastext(false)
    }
  }

  
  return (
    <View style={styles.container}>
      <StatusBar styles="auto" />

      <Text style={{ marginTop: 80, marginBottom: 30,fontSize: 25, padding: 20, width: 250, textAlign: 'center' }}>
        Welcome to your To-Do List!</Text>

      <View style={{padding:10, width: width - 30, alignItems: 'flex-start' }}>

        <TextInput
          style={{ borderBottomWidth: 1, width: width - 50 }}
          placeholder={'Enter your task here'}
          onChangeText={ChangeToDo}
          value={todo}>
        </TextInput>
        
      </View>

      <View style={{ flex: 1, padding:10, width: width - 30, alignItems: 'flex-start', backgroundColor:'red'}}>
        <Text style={{fontSize: 20, marginBottom: 10}}>TO-DO List:
          
        </Text>
        {
          todoList.map((item, index) =>
          {
            return (
              <Text style={{fontSize: 15, marginBottom:7}} key={index}>{item}</Text>
            )
          })
        }
  
      </View>

      <View style={{ justifyContent: 'center', height: 200, width: 150 }}>
        <Button title={'Add Task'} onPress={() =>
          {
            if(todo === "")
            {
              
            }else{
            setTodoList([...todoList, todo])
            setHastext(false)
            setTodo("")
            }
          } }></Button>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //% of screen you are in control of
    flexDirection: 'column', //change orientation of default
    // backgroundColor: 'blue',//color of selected content
    alignItems: 'center', //horizontal axis (row)
    justifyContent: 'flex-start', //default, vertical axis (column)
  },
});
