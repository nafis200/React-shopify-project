import { View, Text, Animated as RNAnimated, SafeAreaView } from "react-native";
import React, { useRef, useEffect } from "react";
import { NoticeHeight } from "../../utils/Scaling";
import NoticeAnimation from "./NoticeAnimation";

const Notice_Height = -(NoticeHeight + 12);

const ProductDashboard = () => {
  const noticePosition = useRef(new RNAnimated.Value(NoticeHeight)).current;

  const slideUp = () => {
    RNAnimated.timing(noticePosition, {
      toValue: Notice_Height,
      duration: 1200,
      useNativeDriver: false,
    }).start();
  };

  const slideDown = () => {
    RNAnimated.timing(noticePosition, {
      toValue: 0,
      duration: 1200,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    slideDown();
    const timeoutId = setTimeout(() => {
      slideUp();
    }, 3500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <NoticeAnimation noticePosition={noticePosition}>
      <>
        <SafeAreaView/>
          <View style={{ flex: 1 }}>
            <Text style={{ color: 'black',backgroundColor:'yellow' }}>ProductDashboard</Text>
          </View>
        
      </>
    </NoticeAnimation>
  );
};

export default ProductDashboard;