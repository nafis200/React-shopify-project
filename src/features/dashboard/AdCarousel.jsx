import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";
import { screenHeight, screenWidth } from "../../utils/Scaling";
import Carousel from 'react-native-reanimated-carousel';
import { useSharedValue } from "react-native-reanimated";
import Scalepress from "components/ui/Scalepress";


const AdCarousel = ({imageData}) => {

  const progressValue = useSharedValue(0) 
  const baseOption = {
      vertical:false,
      width:screenWidth,
      height:screenHeight * 0.5
  }  

  
  
    const baseOptions= {
        vertical:false,
        width:screenWidth,
        height:screenWidth * 0.5
    }

  return (
    <View style={{left:-20,marginVertical:20}}>
     <Carousel 
     {...baseOption}
     loop
     pagingEnabled 
     snapEnabled 
     autoPlay 
     autoPlayInterval={3000} 
     mode="parallax"
     data={imageData}
     modeConfig={{
       parallaxScrollingOffset: 0,
       parallaxScrollingScale: 0.94
     }}
     renderItem={({item})=>{
       return(
        <Scalepress style={styles.imageContainer}>
           <Image 
         source={item}
         style={styles.img}
         />
        </Scalepress>
       )
     }}
     />
     
    </View>
  );
};

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
   }
})

export default AdCarousel;