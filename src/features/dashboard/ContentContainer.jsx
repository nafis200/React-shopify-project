

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AdCarousel from "./AdCarousel";
import { imageData } from './../../Dummydata/Dummydata';
import CustomText from "components/ui/CustomText";
import CategoryContainer from "./CategoryContainer";
import { adData, categories } from "@assets/AllData";


const ContentContainer = () => {
  return (
    <View style={styles.container}>
      <AdCarousel imageData={adData} />
      <CustomText variant="h5" style={{ color: 'black' }} >Grocery & Kitchen</CustomText>
      <CategoryContainer data={categories} />
      
    </View>
  );
};

export default ContentContainer;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  }
});
