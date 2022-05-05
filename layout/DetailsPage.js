import React, { useEffect} from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import {
    useFonts,
    Montserrat_500Medium,
    Montserrat_700Bold,
  } from "@expo-google-fonts/montserrat";

import Icon from "react-native-vector-icons/Ionicons";


export const DetailsPage = ({item}) => {
  
  return (
    <View style={styles.container}>
      <View style={{justifyContent:'center',alignItems:'center'}}>
         <Image source={item.image} style={styles.image}/>
      </View>
       
       
        <View style={styles.cardBottom}>
       
        <TouchableOpacity 
           style={styles.button}
           
           >
            <Text style={{
               fontFamily:'Montserrat_500Medium',
               color:'gray'
               }}>
                Amiantus
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={{
               fontFamily:'Montserrat_500Medium',
               color:'gray'
               }}>
               Details
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={{
               fontFamily:'Montserrat_500Medium',
               color:'gray'
               }}>
               Reviews
            </Text>
        </TouchableOpacity>
        </View> 
        
     
    
        
    </View>
    
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    marginVertical: 8
     
    },
    headerTitle: {
      fontSize: 45,
      textAlign: "center",
      paddingTop: 30,
      color: "#B2002D",
      fontFamily: "Montserrat_700Bold",
    },
    image: {
      margin:2,
      marginTop:80,
      height:250,
      width:"98%",
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 2,
      resizeMode:'cover'
    },
    button: {
      height: 30,
      width: 100,
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center",
      
    },
   
    cardBottom:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        alignContent:'flex-end'
    }
  });