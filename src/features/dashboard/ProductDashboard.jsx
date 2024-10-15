import { View, Text, Animated as RNAnimated, SafeAreaView, ScrollView } from "react-native";
import React, { useRef, useEffect } from "react";
import { NoticeHeight } from "../../utils/Scaling";
import NoticeAnimation from "./NoticeAnimation";
import Visual from "./Visual";
import AnimatedHeader from "./AnimatedHeader";
import StickySearchbar from "./StickySearchbar";
import ContentContainer from "./ContentContainer";
import CustomText from "../../components/ui/CustomText";
import { RFValue } from "react-native-responsive-fontsize";

const Notice_Height = -(NoticeHeight + 12);
// 12 change 50 then many is support
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
        <Visual />
        <SafeAreaView />
        <ScrollView>
          <AnimatedHeader
            showNotice={() => {
              slideDown()
              const timeoutId = setTimeout(() => {
                slideUp()
              }, 3500)
              return () => clearTimeout(timeoutId)
            }}
          />
          <StickySearchbar />

          <ContentContainer />

          <View style={{ backgroundColor: '#F8F8F8', padding: 20 }}>
            <CustomText fontSize={RFValue(32)} style={{ opacity: 0.2, color: 'black', marginTop: 10, paddingBottom: 100 }} >Our shop last min</CustomText>
          </View>

        </ScrollView>

      </>
    </NoticeAnimation>
  );
};

export default ProductDashboard;