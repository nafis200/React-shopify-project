
import { Animated, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { hocStyles } from "styles/globalStyles";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";

const CartAnimationWrapper = ({cartCount,children}) => {

    const slideAnimation = useRef(new Animated.Value(0)).current

    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(()=>{
    
         if(cartCount> 0 && !hasAnimated){
            Animated.timing(slideAnimation,{
                toValue:1,
                duration:300,
                useNativeDriver:true
            }).start(()=>{
                 setHasAnimated(true)
            })
         }
         else if(cartCount === 0 && hasAnimated){
            Animated.timing(slideAnimation,{
                toValue:0,
                duration:300,
                useNativeDriver:true
            }).start(()=>{
                 setHasAnimated(false)
            })
         }
    },[cartCount,hasAnimated])

    const slideUpStyle = {
        transform: [
            {
               translateY: slideAnimation.interpolate({
                inputRange:[0,1],
                outputRange:[100,0]
               })
            }
        ],
        opacity: slideAnimation
    }

  return (
    <Animated.View style={[hocStyles.cartContainer,slideUpStyle]}>
        {children}
    </Animated.View>
  );
};

export default CartAnimationWrapper;

