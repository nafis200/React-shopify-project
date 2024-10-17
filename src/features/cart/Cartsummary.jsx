
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenHeight, screenWidth } from "utils/Scaling";
import CustomText from "components/ui/CustomText";

const Cartsummary = ({ cartCount, cartImage }) => {
  return (
    <View style={styles.container}>

      <View style={styles.flexRowGap}>
        <Image source={cartImage === null ? require('@assets/icons/bucket.png') : { uri: cartImage }}
          style={styles.image}
        />
        <CustomText style={{ color: 'black' }}>Item {cartCount > 1 ? '$' : ''} </CustomText>
      </View>

    </View>
  );
};

export default Cartsummary;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: screenHeight * 0.05,
    paddingBottom: screenHeight * 0.03,
    paddingTop: screenHeight * 0.014
  },

  flexRowGap: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: screenWidth * 0.03,
  },
  image: {
    width: screenWidth * 0.1,
    height: screenWidth * 0.1,
    borderRadius: screenWidth * 0.025,
    borderWidth: 1
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: screenHeight * 0.01,
    borderRadius: screenWidth * 0.025,
    paddingHorizontal: screenWidth * 0.1
  },
  btnText: {
    marginLeft: screenWidth * 0.02,
    color: '#fff'
  }
});
