import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";

export default function CoffeeDetail() {
    const router = useRouter();
    const { name, desc, price, image } = useLocalSearchParams();

    const [selectedSize, setSelectedSize] = useState("Small");
    const [selectedSugar, setSelectedSugar] = useState("No Sugar");

    const sizes = ["Small", "Medium", "Large"];
    const sugarLevels = ["No Sugar", "Low", "Medium"];
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView>
                <View className="relative">
                    <Image
                        source={{ uri: image as string }}
                        className="w-full h-64"
                        resizeMode="cover"
                    />
                    <View className="absolute top-1 left-4 bg-white p-2 rounded-full">
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name="arrow-back" size={22} color="#00512C" />
                        </TouchableOpacity>
                    </View>
                    <View className="absolute top-1 right-4 bg-white p-2 rounded-full">
                        <Ionicons name="heart-outline" size={22} color="#00512C" />
                    </View>
                </View>

                <View className="px-5 mt-8 ">
                    <View className="flex-row justify-between items-center">
                        <View>
                            <Text className="text-2xl font-semibold">{name}</Text>
                            <Text className="text-gray-500">{desc}</Text>
                        </View>
                        <View className="bg-yellow-100 px-3 py-1 rounded-full flex-row items-center">
                            <Ionicons name="star" size={16} color="#b58900" />
                            <Text className="ml-1 text-sm text-yellow-700 font-semibold">4.8</Text>
                        </View>
                    </View>

                    <View className="mt-6">
                        <Text className="font-semibold text-base mb-2">Cup Size</Text>
                        <View className="flex-row gap-2 space-x-3">
                            {sizes.map((size) => (
                                <TouchableOpacity
                                    key={size}
                                    onPress={() => setSelectedSize(size)}
                                    className={`px-4 py-2 rounded-full ${
                                        selectedSize === size ? "bg-green-900" : "bg-gray-100"
                                    }`}
                                >
                                    <Text
                                        className={`${
                                            selectedSize === size ? "text-white" : "text-gray-700"
                                        }`}
                                    >
                                        {size}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <View className="mt-6">
                        <Text className="font-semibold text-base mb-2">Level Sugar</Text>
                        <View className="flex-row gap-2 space-x-3">
                            {sugarLevels.map((level) => (
                                <TouchableOpacity
                                    key={level}
                                    onPress={() => setSelectedSugar(level)}
                                    className={`px-4 py-2 rounded-full ${
                                        selectedSugar === level ? "bg-green-900" : "bg-gray-100"
                                    }`}
                                >
                                    <Text
                                        className={`${
                                            selectedSugar === level ? "text-white" : "text-gray-700"
                                        }`}
                                    >
                                        {level}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <View className="mt-6">
                        <Text className="font-semibold text-base mb-2">About</Text>
                        <Text className="text-gray-500 leading-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <View className="flex-row justify-between items-center bg-white py-12 px-6 shadow-lg border-t border-gray-200">
                <TouchableOpacity
                    className="bg-green-900 flex-1 py-3 rounded-2xl mr-2"
                    onPress={() =>
                        router.push({
                            pathname: "/ShoppingCard" as any ,
                            params: {
                                coffee: JSON.stringify({
                                    name,
                                    desc,
                                    price,
                                    image,
                                    size: selectedSize,
                                    sugar: selectedSugar,
                                }),
                            },
                        })
                    }
                >
                    <Text className="text-center text-white font-semibold">Add to cart | {price}</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}
