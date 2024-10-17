
import React from "react";
import { StyleSheet, View } from "react-native";
import { useCartStore } from "state/cartStore";
import CartAnimationWrapper from "./CartAnimationWrapper";
import Cartsummary from "./Cartsummary";

const withCart = (WrappedComponent) => {
  const WithCartComponent = (props) => {
    const cart = useCartStore((state) => state.cart);
    const cartCount = cart.reduce((acc, item) => acc + item.count, 0);

    return (
      <View style={styles.container}>
        <WrappedComponent {...props} />
        <CartAnimationWrapper cartCount={cartCount}>
           
           <Cartsummary
           cartCount={cartCount}
           cartImage = {cart[0]?.item?.image || null }
           />

        </CartAnimationWrapper>
      </View>
    );
  };

  return WithCartComponent;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withCart;
