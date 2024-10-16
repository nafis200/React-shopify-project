
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomHeader from "components/ui/CustomHeader";


const ProductCategory = () => {
  const [categories,SetCategories] = useState([])
  const [selectedCategory,SetSelectedCategory] = useState(null)
  const [products,SetProducts] = useState([])
  const [categoriesLoading,SetCategoriesLoading] = useState(true)
  const [productsLoading,SetProductsLoading] = useState(false)
  return (
    <View style={styles.mainContainer}>
      <CustomHeader title={selectedCategory?.name || "categories"} search />
    </View>
  );
};

export default ProductCategory;

const styles = StyleSheet.create({
  mainContainer:{
      flex:1,
      backgroundColor:'white'
  },
  subContainer:{
      flex:1,
      flexDirection:'row',
      alignItems:'center'
  },
  center:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
  }
});
   