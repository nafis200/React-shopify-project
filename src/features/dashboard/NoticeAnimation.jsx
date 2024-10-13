import { StyleSheet, View, Animated as RNAnimated } from "react-native";
import React from "react";
import Notice from "./Notice";
import { NoticeHeight } from './../../utils/Scaling';

const Notice_HEIGHT = -(NoticeHeight + 12);

const NoticeAnimation = ({ noticePosition, children }) => {
  return (
    <View style={styles.container}>
      <RNAnimated.View 
        style={[
          styles.noticeContainer, 
          {
            transform: [{ translateY: noticePosition }]  
          }
        ]}
      >
        <Notice/>
      </RNAnimated.View>

      <RNAnimated.View 
        style={[
          styles.contentContainer, 
          {
            paddingTop: noticePosition.interpolate({
              inputRange: [Notice_HEIGHT, 0], 
              outputRange: [0, Notice_HEIGHT + 20]
            }),
          }
        ]}
      >
        {children}
      </RNAnimated.View>
    </View>
  );
};

export default NoticeAnimation;

const styles = StyleSheet.create({
  noticeContainer: {
    width: '100%',
    zIndex: 999,
    position: 'absolute',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
