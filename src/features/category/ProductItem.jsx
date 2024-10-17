
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenHeight } from "utils/Scaling";

const ProductItem = ({item,index}) => { 
  const isSecondColumn = index % 2 != 0
  return (
    <View style={[styles.container,{
        marginRight: isSecondColumn ? 10 : 0
    }]}>
      
      <View style={styles.imageContainer}>
        <Image source={{uri: item.image}} style={styles.image}  />
      </View>

    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
    container:{
        width:'45%',
        borderRadius:10,
        backgroundColor:'#fff',
        marginBottom:10,
        marginLeft:10,
        overflow:'hidden'
    },
    imageContainer:{
         height:screenHeight * 0.14,
         width:'100%',
         justifyContent:'center'
    },
    image:{
        height:'100%',
        width:'100%',
        aspectRatio:1/1,
        resizeMode:'contain'
    }
});
