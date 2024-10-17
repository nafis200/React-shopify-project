
import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { renderer } from 'react-test-renderer';
import ProductItem from "./ProductItem";

const ProductList = ({data}) => {
    
    const renderItem = ({ item, index }) => {
        return (
          <ProductItem item={item} index={index} />
        );
      };
      

  return (
    <FlatList
    data={data}
    keyExtractor={(item)=>item._id} 
    renderItem={renderItem}
    contentContainerStyle={styles.content}
    numColumns={2}
    >


    </FlatList>
  );
};

export default ProductList;

const styles = StyleSheet.create({
     container:{
        flex:1,
        height:'100%'
     },
     content:{
         paddingVertical:10,
         paddingBottom:100
     }
});
