import { View, FlatList, Image, StyleSheet, Pressable } from "react-native";
import products from "./../data/products";

const ProductsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <PressablePlease make sure you have the correct access rights
            onPress={() => {
              navigation.navigate("Product Detail");
            }}
            style={styles.container}
          >
              <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductsScreen;
