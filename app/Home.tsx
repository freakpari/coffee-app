import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';

const Home = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={require("../assets/images/back-ground.png")}
        resizeMode="cover"
        className="flex-1"
      >
        <View className="flex-1 justify-start items-center px-4 mt-32">
          <Image
            source={require("../assets/images/coffee-cup.png")}
            resizeMode="contain"
            className="w-[350px] h-[300px]"
          />
        </View>

        <View className="absolute inset-0 justify-center items-center px-6 pt-48 ">
          <Text className="text-center text-xl font-bold  text-white mb-2 leading-tight">
            Coffee so good,
          </Text>
          <Text className="text-center text-xl font-bold  text-white mb-2 leading-tight">
            your taste buds
          </Text>
         <Text className="text-center text-xl font-bold  text-white mb-6 leading-tight">
           will love it     
         </Text>
          <Text className="text-center text-base text-white mb-8 leading-relaxed">
           The best grain, the finest roas, the most powerful flavor.
          </Text>
        </View>

       <View className="absolute bottom-40 left-1/2 -translate-x-1/2 w-[235px] h-[54px]">
        <TouchableOpacity className="bg-[#00512C] rounded-full py-4 px-8 items-center justify-center shadow-lg">
          <Text className="text-white font-semibold text-lg">Get started</Text>
        </TouchableOpacity>
       </View>
      </ImageBackground>
    </View>
  );
};

export default Home;