import { View, FlatList, Image } from "react-native";
import products from "./../data/products";

const ProductsScreen = () => {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={{ width: "50%", padding: 1 }}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default ProductsScreen;
