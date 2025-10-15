import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="CoffeePage" options={{headerShown:false}} />
      <Stack.Screen name="CoffeeDetail" options={{headerShown:false}} />
      <Stack.Screen name="ShoppingCard" options={{headerShown:false}} />
    </Stack>
  );
}
