
import React from "react";
import { StyleSheet, View } from "react-native";
import { useCartStore } from "state/cartStore";

const withCart = (WrappedComponent) => {
  const WithCartComponent = (props) => {
    const cart = useCartStore((state) => state.cart);
    const cartCount = cart.reduce((acc, item) => acc + item.count, 0);

    return (
      <View style={styles.container}>
        <WrappedComponent {...props} cart={cart} cartCount={cartCount}  />
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
