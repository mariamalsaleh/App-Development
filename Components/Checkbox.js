import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Button, TouchableHighlight, ProgressViewIOSComponent } from 'react-native';
    const { width, height } = Dimensions.get('window')


export default Checkbox = (props) => {
  
const [check, setCheck] = useState(false)

  
  return (
    <View style={styles.container}>

      

        <TouchableHighlight style={ {...styles.box, backgroundColor: check === true? 'green' :'transparent' }} onPress={()=>
        {
            if(check)
            {
              setCheck(false)
               props.unCheck()

            }else{
              setCheck(true)
                props.Check()
            }
            
        } 
        
        } >

            <View></View>
        </TouchableHighlight>
    <Text style={{margin: 5, textDecorationLine: check === true ?'line-through': 'none', textDecorationStyle: 'solid'}} >{props.text}</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
   width: width,
   height:40,
   flexDirection:'row',
    alignItems: 'center',
  },
  box:{
      borderWidth: 2,
    width:20,
    height: 20,
    flexDirection:'column',
    alignItems: 'center',
    marginLeft: 20


  }
});
