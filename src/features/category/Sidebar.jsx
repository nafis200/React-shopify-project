

import { StyleSheet, Text, View, ScrollView, Animated, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import CustomText from "components/ui/CustomText";
import { RFValue } from "react-native-responsive-fontsize";


const Sidebar = ({ selectedCategories, categories, onCategoryPress }) => {
  const scrollVireRef = useRef(null)
  return (
    <View style={styles.sidebar}>
      <ScrollView ref={scrollVireRef} contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >

        <Animated.View>

          {categories?.map((category, index) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={1}
                style={styles.categoryBtn}
                onPress={() => onCategoryPress(category)}
              >
                <View style={styles.imageContainer}>

                  <Animated.Image
                    source={{ uri: category.image }}
                    style={[styles.image]}
                  />
                </View>
                <CustomText fontSize={RFValue(7)}
                  style={{ textAlign: 'center', color: 'black' }}
                >
                  {category?.name}
                </CustomText>

              </TouchableOpacity>
            )
          })}

        </Animated.View>

      </ScrollView>
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  sidebar: {
    width: '24%',
    backgroundColor: '#fff',
    borderRightWidth: 0.8,
    borderRightColor: '#eee',
    position: 'relative',
    color: 'text'
  },
  categoryBtn: {

  }
});
