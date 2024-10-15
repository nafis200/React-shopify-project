
import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";
import { screenWidth } from "../../utils/Scaling";
import Carousel from 'react-native-reanimated-carousel';
import img from '../../assets/image1/279358489_102996742407844_2843731233420424889_n.jpg'

const AdCarousel = ({imageData}) => {

  const images = [
    { id: 1, uri: 'https://i.postimg.cc/hvNySLBT/01.png' },
    { id: 2, uri: 'https://i.postimg.cc/hvNySLBT/01.png' },
    { id: 3, uri: 'https://i.postimg.cc/hvNySLBT/01.png' },
  ];
  
    const baseOptions= {
        vertical:false,
        width:screenWidth,
        height:screenWidth * 0.5
    }

  return (
    <View style={{left:-10,marginVertical:20}}>
      <Text>AdCarousel</Text>
      <Carousel
        loop
        width={300} // Set your desired width
        height={200} // Set your desired height
        autoPlay={true}
        data={images}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={img} />
            <Text style={styles.text}>Image {item.id}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AdCarousel;

const styles = StyleSheet.create({
    imageContainer:{
        width:'100%',
        height:'100%'
    },
    img:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        borderRadius:20
    },
    
});
