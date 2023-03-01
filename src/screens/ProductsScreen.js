import { View, FlatList, Image, StyleSheet, Pressable } from "react-native";
import products from "./../data/products";
import { productsSlice } from "../store/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductsScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            dispatch(productsSlice.actions.setSelectedProduct(item.id));
            navigation.navigate("Product Details");
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductsScreen;
