import { View, Text, StyleSheet, Image } from "react-native";
import products from "../data/products";

const ProductDetailsScreen = () => {
  const product = products[0];

  return (
    <View>
          {/* <Image source={{ uri: product.image }} style={styles.image} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        aspectRatio: 1
    }
});

export default ProductDetailsScreen;
