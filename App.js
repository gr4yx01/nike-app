import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsScreen from "./src/screens/ProductsScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import ShoppingCart from "./src/screens/ShoppingCart";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Product" component={ProductsScreen} />
          <Stack.Screen
            name="Product Detail"
            component={ProductDetailsScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <Pressable
                  onPress={() => navigation.navigate("Cart")}
                  style={{ flexDirection: "row" }}
                >
                  <FontAwesome5 name="shopping-cart" size={18} color="black" />
                  <Text style={styles.cartItems}>5</Text>
                </Pressable>
              ),
            })}
          />
          <Stack.Screen name="Cart" component={ShoppingCart} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
