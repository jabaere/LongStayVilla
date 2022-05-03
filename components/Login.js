import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';

export const Login = () => {
  return (
    <View style={styles.container}>
        
       <Text>Login</Text> 
        
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
       
        //backgroundColor:'#B2002D',
        justifyContent:'center',
        alignItems:'center',
        padding:15
      
    },
    headerTitle:{
        fontSize:55,
        textAlign:'center',
        paddingTop:20
    },
    image:{
        height:'100%'
    },
    button:{
        height:50,
        width:130,
       // backgroundColor:'#B2002D',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius:50,
        alignItems:'center',
        padding:15
    }
  });
