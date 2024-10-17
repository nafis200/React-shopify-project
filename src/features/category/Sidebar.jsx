

import { StyleSheet, Text, View, ScrollView, Animated, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import CustomText from "components/ui/CustomText";
import { RFValue } from "react-native-responsive-fontsize";
import { useSharedValue } from "react-native-reanimated";


const Sidebar = ({ selectedCategories, categories, onCategoryPress }) => {
  const scrollVireRef = useRef(null)
  const indicatorPosition = useSharedValue(0)

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
    padding: 10,
    height: 100,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain'
  },
  imageContainer: {
    borderRadius: 100,
    height: '50%',
    marginBottom: 10,
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F7',
    overflow: 'hidden'
  },
  selectedImageContainer: {
    backgroundColor: '#CFFFDB'
  },
  indicator: {
    position: 'absolute',
    right: 0,
    width: 4,
    height: 80,
    top: 10,
    alignSelf: 'center',
    backgroundColor: 'yellow',
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15
  }
});