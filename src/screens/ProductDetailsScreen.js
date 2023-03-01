import {
  Text,
  StyleSheet,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cartSlice } from "../store/cartSlice";

import { useSelector, useDispatch } from "react-redux";

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();

  const { width } = useWindowDimensions();

  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({ product }));
  };

  return (
    <>
      <FlatList
        data={product.images}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <ScrollView style={{ padding: 20 }}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </ScrollView>
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
      <Pressable style={styles.icon}>
        <Ionicons name="close" size={24} color="white" />
      </Pressable>
      {/* <Image source={{ uri: product.image }} style={styles.image} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  icon: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "#000000AA",
    borderRadius: 50,
    padding: 5,
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 100,
    position: "absolute",
    bottom: 30,
    width: "80%",
    padding: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    fontWeight: 500,
    fontSize: 16,
  },
});

export default ProductDetailsScreen;
