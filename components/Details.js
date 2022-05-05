import React,{useEffect,useState,useLayoutEffect} from 'react'
import { Text, View, StyleSheet,Image,Button,TouchableOpacity,TextInput,SafeAreaView,FlatList } from 'react-native';
import { Villa_API } from '../utils/data';
import {DetailsPage} from '../layout/DetailsPage'


export const Details = ({ route, navigation}) => {
    const { itemId } = route.params;
    
    useLayoutEffect(() => {
       console.log(itemId)
       
    })

 
  return (
    <View>
        <FlatList
          data={Villa_API.filter(item=> item.id ===itemId)}
          renderItem={({ item }) => <DetailsPage item={item}/>}
          
          keyExtractor={item => item.id}
          
      />
        
    </View>
  )
}
