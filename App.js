import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')
export default App = () => {
  return (
    <View style={styles.container}>

      <View style={{ flexDirection: 'row' }}>

        <View style={{ flex: 1, backgroundColor: 'white', height: 100, width: 100, justifyContent: 'center', alignItems: 'center' }}>
          <Text>This is the Header</Text>
        </View>

      </View>

      <View style={{ flex:1, flexDirection: 'row', width: width, justifyContent: 'space-evenly', alignItems:'center' }}>
        <View style={{  backgroundColor: 'pink', height: 100, width, width: 100, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Level 1</Text>
        </View>
        <View style={{  backgroundColor: 'blue', height: 100, width, width: 100, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Level 2</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>

        <View style={{ flex: 1, backgroundColor: 'orange', height: 100, width, width: 100, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Start</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'yellow', height: 100, width, width: 100,justifyContent: 'center', alignItems: 'center' }}>
        <Text>Options</Text>
        </View>
      </View>



    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //% of screen you are in control of
    flexDirection: 'column', //change orientation of default
    backgroundColor: 'red',//color of selected content
    alignItems: 'flex-start', //horizontal axis (row)
    justifyContent: 'space-between', //default, vertical axis (column)
  },
});
