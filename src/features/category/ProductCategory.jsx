
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import CustomHeader from "components/ui/CustomHeader";
import Sidebar from "./Sidebar";
import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "provider/hooks/useAxiospublic";
import ProductList from "./ProductList";


const ProductCategory = () => {
  const [categories, SetCategories] = useState([]);
  const [selectedCategory, SetSelectedCategory] = useState(null);
  const [products, SetProducts] = useState([])
  const [categoriesLoading, SetCategoriesLoading] = useState(true)
  const [productsLoading, SetProductsLoading] = useState(false)
  const axiosPublic = useAxiospublic();
  const { data: Data = [], isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/category`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Text style={{ color: 'black' }}>Loading......</Text>;
  }



  useEffect(() => {
    if (Data.length > 0) {
      SetCategories(Data);
      SetSelectedCategory(Data[0]);
      SetCategoriesLoading(false)
      SetProducts(Data)
    }
  }, [Data]);

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size='small' color='black' />
      </View>
    );
  }


  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: 'red' }}>Error occurred while fetching categories</Text>
      </View>
    );
  }
  return (
    <View style={styles.mainContainer}>
      <CustomHeader title={selectedCategory?.name || "categories"} search />
      <View style={styles.subContainer}>
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryPress={(category) => SetSelectedCategory(category)}
        />
        {productsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" /> 
        ) : (
          <ProductList data={products || []} /> 
        )}
      </View>
    </View>
  );
};

export default ProductCategory;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
