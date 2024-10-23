
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenHeight } from "utils/Scaling";

const Livemap = () => {
  return (
    <View style={styles.container}>
      <Text>Livemap</Text>
    </View>
  );
};

export default Livemap;

const styles = StyleSheet.create({
    container:{
        height: screenHeight * 0.35,
        width:'100%',
        borderRadius:15,
        backgroundColor:'#fff',
        overflow:'hidden',
        borderWidth:1,
        position:'relative'
    }
});
