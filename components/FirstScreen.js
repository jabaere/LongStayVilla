import React,{useEffect,useNavigate} from 'react'
import { Text, View, StyleSheet,Image,Button,TouchableOpacity } from 'react-native';
import { Image_data  } from '../utils/data';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_700Bold,
  
} from "@expo-google-fonts/montserrat";
//AiOutlineArrowRight
//import { Navigate, useNavigate,Router } from 'react-router';


export const FirstScreen = () => {

  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
  });
    useEffect(()=> {
    
    })

    const navigation = useNavigation();
  return (
   

       <View style={[styles.container, {
      
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1.5}}>
          {fontsLoaded ? <Text style={styles.headerTitle}>LongStay Villa</Text> : null}
      </View>
      <View style={{ flex: 7}} >

      <Image style={styles.image} source={Image_data.Image}/>

      </View>
      <View style={{ flex: 1.5,justifyContent:'center',alignItems:'flex-end', }}>
         <TouchableOpacity 
            style={styles.button}
            onPress={()=> navigation.navigate('Login',{ name: 'Login' })}
            >
            <View style={{flexDirection:'row',alignItems:'center'}}>
                    {fontsLoaded?<Text style={{color:'white',fontFamily:'Montserrat_500Medium',fontSize:12}}>GET STARTED</Text>:null}
            <Icon name="arrowright" size={20} color="white" />
            </View>
         </TouchableOpacity>
      </View>
    </View>
        
  
  )
}


/*
 <View style={styles.container}>
         
       <View style={styles.headerContainer}>
           <Text style={styles.headerTitle}>LongStay Villa</Text>
       </View>
       <View style={styles.imageContainer}>
       <Image style={styles.image} source={Image_data.Image} />
       </View>
       <View style={styles.buttonContainer}>
          <TouchableOpacity>
              <Text style={styles.button}>GET STARTED</Text>
          </TouchableOpacity>
       </View>


*/

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    headerTitle:{
        fontSize:45,
        textAlign:'center',
        paddingTop:30,
        color:'#B2002D',
        fontFamily:'Montserrat_700Bold',
        
    },
    image:{
        height:'100%'
    },
    button:{
        height:50,
        width:130,
        backgroundColor:'#B2002D',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius:50,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center'
    }
  });