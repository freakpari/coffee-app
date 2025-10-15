import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";

export default function Cart() {
    const { coffee } = useLocalSearchParams();
    const router = useRouter();

    const item = coffee ? JSON.parse(coffee as string) : null;

    const [quantity, setQuantity] = useState(1);

    if (!item) return <Text>No items in cart</Text>;

    const subtotal = quantity * parseInt(item.price.replace("Rp", "").replace(".", ""));
    const discount = 25000;
    const total = subtotal - discount;

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="px-5">
                <Text className="text-lg font-semibold mt-5 mb-3">Cart</Text>
                <View className="bg-white rounded-2xl shadow p-3 mb-3 mt-8 flex-row">
                    <Image
                        source={{ uri: item.image }}
                        className="w-24 h-24 rounded-xl"
                        resizeMode="cover"
                    />
                    <View className="ml-4 flex-1">
                        <Text className="font-semibold text-base">{item.name}</Text>
                        <Text className="text-gray-500">{item.desc}</Text>
                        <Text className="text-gray-500 text-sm">Cap Size: {item.size}</Text>
                        <Text className="text-gray-500 text-sm">Level Sugar: {item.sugar}</Text>
                        <Text className="text-gray-800 font-semibold mt-1">{item.price}</Text>
                    </View>
                    <View className="justify-center items-center">
                        <TouchableOpacity onPress={() => setQuantity(q => q + 1)} className="bg-green-900 p-2 rounded-full">
                            <Ionicons name="add" size={20} color="white" />
                        </TouchableOpacity>
                        <Text className="text-center mt-1">{quantity}</Text>
                    </View>
                </View>

                <View className="mt-12">
                    <View className="flex-row justify-between">
                        <Text>Subtotal</Text>
                        <Text>Rp {subtotal}</Text>
                    </View>
                    <View className="flex-row justify-between mt-2">
                        <Text>Discount</Text>
                        <Text>Rp {discount}</Text>
                    </View>
                    <View className="flex-row justify-between mt-2 font-semibold">
                        <Text>Total</Text>
                        <Text>Rp {total}</Text>
                    </View>
                </View>

                <View className="mt-12">
                    <Text className="font-semibold text-base mb-2">Payment</Text>
                    <View className="flex-row gap-2 space-x-3">
                        <Image source={require("../assets/images/visa.png")} className="w-16 h-10 rounded-xl"/>
                        <Image source={require("../assets/images/paypal.png")} className="w-16 h-10 rounded-xl"/>
                        <Image source={require("../assets/images/master.png")} className="w-16 h-10 rounded-xl"/>
                    </View>
                    <TouchableOpacity className="bg-green-900 mt-12 py-3 rounded-2xl">
                        <Text className="text-center text-white font-semibold">Buy</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
