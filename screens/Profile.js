import React, { useState,useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import BookIcon from "react-native-vector-icons/MaterialIcons";

import CloseIcon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { Card } from "../components/Card";

import ListIcon from "react-native-vector-icons/MaterialCommunityIcons";
import ParachuteIcon from "react-native-vector-icons/FontAwesome5";
import WalletIcon from "react-native-vector-icons/Ionicons";
import StarIcon from "react-native-vector-icons/AntDesign";
import MoreIcon from "react-native-vector-icons/MaterialIcons";
export const Profile = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [reloadModal,setReloadModal] = useState(false)
  const navigation = useNavigation();
  useEffect(()=> {
    setModalVisible(true)
  },[reloadModal])
  return (
    <View style={styles.centeredView}>
     
        
           
      <View style={{width:"100%",marginTop:20}}>
               <Card item={[
                 {id:1,firstIcon:<ListIcon name="format-list-checkbox" color ='gray' size={26}/>,description:'All My Booking',rightIcon:<MoreIcon name='arrow-forward-ios' size={15} color='#2f3e46'/>},
                 {id:2,firstIcon:<ParachuteIcon name='parachute-box' color ='gray' size={26}/>,description:'Pending Visits',rightIcon:<MoreIcon name='arrow-forward-ios' size={15} color='#2f3e46'/>},
                 {id:3,firstIcon:<WalletIcon name="wallet-outline" color="gray" size={26}/>,description:'Pending Payments',rightIcon:<MoreIcon name='arrow-forward-ios' size={15} color='#2f3e46'/>},
                 {id:4,firstIcon:<StarIcon name="staro" color="gray" size={26}/>,description:'Feedback',rightIcon:<MoreIcon name='arrow-forward-ios' size={18} color='#2f3e46'/>}
               ]}/>
       </View>
         
   
       
 
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex:1,
    width:'100%',
    height:'80%',
    backgroundColor: "#edede9",
    padding: 30,
    paddingLeft:10,
    paddingRight:10,
    alignItems: "center",
  },

   
 textStyle: {
  marginBottom: 15,
  textAlign: "center",
  fontFamily:'Montserrat_500Medium',
  fontSize: 15,
  width:'100%',
  color: "#B2002D",
  },

});

;

