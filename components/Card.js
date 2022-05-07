import React,{useEffect,useState,useLayoutEffect} from 'react'
import { Text, View, StyleSheet,Image,Button,TouchableOpacity,TextInput,SafeAreaView,FlatList } from 'react-native';
import { Villa_API } from '../utils/data';
import {DetailsPage} from '../layout/DetailsPage'

const CardItem = ({item}) => {
  const borderNumber = item.length - 1 
  useEffect(()=> {
      console.log(item)
  })
    return(
    <View style={{flexDirection:'column'}}>
     <View style={{
         flex:1,
         flexDirection:'row',
         backgroundColor:'white',
         justifyContent:'space-between',
         height:60,
         alignContent:'center',
         alignItems:'center',
         borderRadius:6,
      
        
         }}>
       <View style={{flexDirection:'row',alignItems:'center'}}>
         <View style={{padding:10}}>
             <Text>{item.firstIcon}</Text>
         </View>
         <View style={{marginLeft:20}}>
             <Text>{item.description}</Text>
         </View>
       </View>
         {item.currency || item.language ? <>
          <View><Text>{item.currency}</Text></View>
          <View><Text>{item.language}</Text></View>
          </>
         
         : null}
         <View style={{
             backgroundColor:'#edede9',
             borderRadius:50,
             width:25,
             height:25,
             alignItems:'center',
             justifyContent:'center',
             marginRight:10
             }}>
             <Text>{item.rightIcon}</Text>
         </View>
        
     </View>
     {item.description !== 'Feedback' || item.description === 'Feedback' ? <View style={{justifyContent:'center',flexDirection:'row'}}>
        <View style={{width:'30%',height:1, backgroundColor:'white',alignSelf:'flex-start'}}></View>
        <View style={{width:'70%',height:1, backgroundColor:'gray',alignSelf:'flex-end'}}></View>
     </View>
     :
     null
     }
     </View>
    )
}


export const Card = ({ item }) => {
  
   return (
    <View>
        <FlatList
          data={item}
          renderItem={({ item }) => <CardItem item={item}/>}
          
          keyExtractor={item => item.id}
          
      />
        
    </View>
  )
}