import { View, Animated as RNAnimated, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef, useEffect } from "react";
import { NoticeHeight } from "../../utils/Scaling";
import NoticeAnimation from "./NoticeAnimation";
import Visual from "./Visual";
import AnimatedHeader from "./AnimatedHeader";
import StickySearchbar from "./StickySearchbar";
import ContentContainer from "./ContentContainer";
import CustomText from "../../components/ui/CustomText";
import { RFValue } from "react-native-responsive-fontsize";

import {
  CollapsibleContainer,
  CollapsibleHeaderContainer,
  CollapsibleScrollView,
  useCollapsibleContext,
  withCollapsibleContext
} from '@r0b0t3d/react-native-collapsible';
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import Icon from 'react-native-vector-icons/Ionicons';
import withCart from "features/cart/WithCart";
import withLiveStatus from "features/map/WithLiveStatus";

const Notice_Height = -(NoticeHeight + 12);

const ProductDashboard = () => {
  const noticePosition = useRef(new RNAnimated.Value(NoticeHeight)).current;

  const { scrollY, expand } = useCollapsibleContext();
  const previousScroll = useRef(0);

  const backToTopStyle = useAnimatedStyle(() => {
    const isScrollingUp = scrollY.value < previousScroll.current && scrollY.value > 180;
    const opacity = withTiming(isScrollingUp ? 1 : 0, { duration: 300 });
    const translateY = withTiming(isScrollingUp ? 0 : 10, { duration: 300 });
    previousScroll.current = scrollY.value;

    return {
      opacity,
      transform: [{ translateY }]
    };
  });

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
        
        <Animated.View style={[styles.backToTopBtn, backToTopStyle]}>
          <TouchableOpacity
            onPress={() => {
              scrollY.value = 0; 
              expand(); 
            }}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}
          >
            <Icon name="arrow-up-circle-outline" color="white" size={24} />
            <CustomText variant="h9" style={{ color: 'white' }}>
              Back to Top
            </CustomText>
          </TouchableOpacity>
        </Animated.View>

        <CollapsibleContainer style={styles.panelContainer}>
          <CollapsibleHeaderContainer containerStyle={styles.transparent}>
            <AnimatedHeader
              showNotice={() => {
                slideDown();
                const timeoutId = setTimeout(() => {
                  slideUp();
                }, 3500);
                return () => clearTimeout(timeoutId);
              }}
            />
            <StickySearchbar />
          </CollapsibleHeaderContainer>

          <CollapsibleScrollView
            nestedScrollEnabled
            style={styles.panelContainer}
            showsVerticalScrollIndicator={false}
          >
            <ContentContainer />

            <View style={{ backgroundColor: '#F8F8F8', padding: 20 }}>
              <CustomText fontSize={RFValue(32)} style={{ opacity: 0.2, color: 'black' }}>
                Our shop last min
              </CustomText>
              <CustomText fontSize={RFValue(32)} style={{ opacity: 0.2, color: 'black', marginTop: 10, paddingBottom: 100 }}>
                Developed by
              </CustomText>
            </View>
          </CollapsibleScrollView>
        </CollapsibleContainer>
      </>
    </NoticeAnimation>
  );
};

const styles = StyleSheet.create({
  panelContainer: {
    flex: 1,
  },
  transparent: {
    backgroundColor: "transparent",
  },
  backToTopBtn: {
    position: 'absolute',
    alignSelf: 'center',
    top: 100,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'black',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    zIndex: 999,
  }
});

export default withLiveStatus(withCart(withCollapsibleContext(ProductDashboard)));
