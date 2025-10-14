import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function CoffeePage() {
  const categories = [
    { id: 1, name: "Cappuccino", active: true },
    { id: 2, name: "Coffee" },
    { id: 3, name: "Expresso" },
    { id: 4, name: "Cocoa" },
  ];

  const coffees = [
    { id: 1, name: "Cappuccino", desc: "With Sugar", price: "Rp50.000", image: require("../assets/images/cuppo1.png") },
    { id: 2, name: "Cappuccino", desc: "With Sugar", price: "Rp50.000", image: require("../assets/images/cuppo2.png") },
  ];

  const specialOffers = [
    { id: 3, name: "Coffee", desc: "With Sugar", price: "Rp50.000", image: require("../assets/images/cuppo3.png") },
    { id: 4, name: "Cappuccino", desc: "With Sugar", price: "Rp50.000", image: require("../assets/images/cuppo4.png") },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center justify-between mt-3">
          <View className="flex-row items-center space-x-2">
            <Image source={require("../assets/images/profile.png")} className="w-10 h-10 rounded-full" />
            <View>
              <Text className="text-gray-500 text-xs">
                 <Image source={require("../assets/images/map-marker-solid.png")} />
                Jakarta, Indonesia</Text>
              <Text className="text-lg font-semibold">Good morning, Yudi</Text>
            </View>
          </View>
          <Ionicons name="notifications-outline" size={22} color="#00512C" />
        </View>

        <View className="mt-4 bg-gray-100 flex-row items-center rounded-full px-4 py-2">
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            placeholder="Search Coffee ..."
            className="flex-1 ml-2 text-gray-700"
          />
          <Ionicons name="options-outline" size={20} color="gray" />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-5">
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              className={`px-4 py-2 rounded-full mr-2 flex-row items-center ${cat.active ? "bg-green-900" : "bg-gray-100"}`}
            >
              <Ionicons name="cafe" size={16} color={cat.active ? "white" : "#555"} />
              <Text className={`ml-1 text-sm ${cat.active ? "text-white" : "text-gray-700"}`}>
                {cat.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View className="mt-8 flex-row flex-wrap justify-between">
          {coffees.map((item) => (
            <View key={item.id} className="w-[48%] bg-white rounded-2xl shadow p-3 mb-3">
              <Image source={item.image} className="w-full h-28 rounded-xl" resizeMode="cover" />
              <Text className="mt-2 font-semibold">{item.name} </Text>
              <Text className="text-gray-500 text-xs">{item.desc}</Text>
              <View className="flex-row justify-between items-center mt-2">
                <Text className="text-gray-800 font-semibold">{item.price}</Text>
                <TouchableOpacity className="bg-green-900 rounded-full p-2">
                  <Ionicons name="add" size={18} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <Text className="font-semibold text-base mt-12">Special Offer</Text>
        <View className="mt-2 flex-row flex-wrap justify-between">
          {specialOffers.map((item) => (
            <View key={item.id} className="w-[48%] bg-white rounded-2xl shadow p-3 mb-3">
              <Image source={item.image} className="w-full h-28 rounded-xl" resizeMode="cover" />
              <Text className="mt-2 font-semibold flex justify-between">{item.name} </Text>
              <Text className="text-gray-500 text-xs">{item.desc}</Text>
              <View className="flex-row justify-between items-center mt-2">
                <Text className="text-gray-800 font-semibold">{item.price}</Text>
                <TouchableOpacity className="bg-green-900 rounded-full p-2">
                  <Ionicons name="add" size={18} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View className="flex-row justify-between bg-white py-3 px-10 rounded-t-3xl shadow-lg">
        <Ionicons name="home" size={24} color="#00512C" />
        <Ionicons name="heart-outline" size={24} color="#00512C" />
        <Ionicons name="cart-outline" size={24} color="#00512C" />
        <Ionicons name="person-outline" size={24} color="#00512C" />
      </View>
    </SafeAreaView>
  );
}
