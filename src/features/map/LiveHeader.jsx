
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

import Icon from 'react-native-vector-icons/Ionicons'

const LiveHeader = ({title,secondTitle}) => {
  return (
    <SafeAreaView>
      
      <View style={styles.headerContainer}>
       
        <Pressable>
            
 
        </Pressable>

      </View>

    </SafeAreaView>
  );
};

export default LiveHeader;

const styles = StyleSheet.create({
    headerContainer:{
         justifyContent:'center',
         paddingVertical:10,
         alignItems:'center'
    },
    backButton:{
        position:'absolute',
        left:20
    },
    titleTextBlack:{
         color:'black'
    },
    titleTextWhite:{
        color:'white'
    }
});
