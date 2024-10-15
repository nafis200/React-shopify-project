
import { StyleSheet, Text, ScrollView, Animated } from "react-native";
import React from "react";
import SearchBar from "./SearchBar";

const StickySearchbar = () => {
  return (
    <ScrollView style={[styles.container,styles.backgroundColors]}>
      <SearchBar/>
      <Animated.View style={[styles.shadow]}>

      </Animated.View>
    </ScrollView>
  );
};

export default StickySearchbar;

const styles = StyleSheet.create({
    container:{
        marginTop:20,
    },
    backgroundColors:{
        backgroundColor: 'rgba(255, 255, 255)',
        transform:[{translateY:10}]
    }
});
