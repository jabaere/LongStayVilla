import React,{useState,useEffect} from 'react'
import { Text, View, StyleSheet,Image,Button,TouchableOpacity,TextInput,SafeAreaView,FlatList} from 'react-native';
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_700Bold,
  
} from "@expo-google-fonts/montserrat";
import { useNavigation } from '@react-navigation/native';
import { Villa_API } from '../api/data';
import FilterIcon from "react-native-vector-icons/Feather";

var data = []
export const FilteredData = ({item}) => {
  return(
    <View style={{width:'100%',alignItems:'center',alignContent:'center',justifyContent:'center'}}>
       <View style={{justifyContent:'center',alignItems:'center'}}>
         <Image source={item.image} style={styles.image}/>
        </View>
    </View> 
  )
}

export const SearchBar = () => {
  const [search,setSearch] = useState('')
  useState(()=> {
    console.log(search + "dsadda")
  },[setSearch])
  data = Villa_API.filter(item=> item.location.includes(search)).map(item => item)
  return(
    <View style={{alignItems:'center',alignContent:'center',justifyContent:'flex-start',flexDirection:'row'}}>
        <TextInput style={{width:'100%',height:30,borderRadius:50,backgroundColor:'gray'}} onChangeText={text => setSearch(text)} defaultValue={search}/>
        <FilterIcon name='filter' size={24} color='gray'/>
    </View>
  )
}

export const Location = () => {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
    <FlatList
    data={data}
    renderItem={({ item }) => <FilteredData item={item}/>}
    
    keyExtractor={item => item.id}
    
    />
    <SearchBar />
    <FlatList/>
    </View>
  )
}


              