

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AdCarousel from "./AdCarousel";
import { imageData } from './../../Dummydata/Dummydata';

const ContentContainer = () => {
  return (
    <View style={styles.container}>
        <AdCarousel imageData={imageData} />
    </View>
  );
};

export default ContentContainer;

const styles = StyleSheet.create({
   container:{
      paddingHorizontal:20
   }
});
