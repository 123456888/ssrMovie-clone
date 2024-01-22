import { View, Text, TextInput, Image, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Bollywood from "../../api/Bollywood";
import { useNavigation } from '@react-navigation/native';

const BollywoodList = () => {

  const navigation = useNavigation();

  function handleAdd(item) {
    navigation.navigate("Movie Details", item)
  }

  const [input, setInput] = useState("");

  const AllCard = ({ item }) => {
    if (input === "") {
      return (
        <View>
          <View className="border bg-blue-100 border-blue-50 items-center w-auto">
            <Image className="mt-5 w-80 h-96" source={item.Image}></Image>
            <View className="items-center">
              <View className="font-bold text-xl p-1 w-80 mb-5">
                <Text className="text-gray-900 text-base font-bold">{item.name}</Text>
                <View className="flex-row items-center">
                  <Text className="font-bold text-gray-700 text-base">Language: </Text><Text className="text-gray-700 text-base">{item.language}</Text>
                </View>
                <View className="flex-row items-center">
                  <Text className="font-bold text-gray-700 text-base">IMDB: </Text><Text className="text-gray-700 text-base">{item.imdb}</Text>
                </View>
                <View className="items-center py-3 mt-4 px-7 border border-red-400 bg-red-400">
                  <TouchableOpacity onPress={() => handleAdd(item)}>
                    <Text className="font-bold text-gray-50">WATCH</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View >
      )
    }

    if (item.name.toLowerCase().includes(input.toLowerCase())) {
      return (
        <View>
          <View className="border bg-blue-100 border-blue-50 items-center w-auto">
            <Image className="mt-5 w-80 h-96" source={item.Image}></Image>
            <View className="items-center">
              <View className="font-bold text-xl p-1 w-80 mb-5">
                <Text className="text-gray-900 text-base font-bold">{item.name}</Text>
                <View className="flex-row items-center">
                  <Text className="font-bold text-gray-700 text-base">Language: </Text><Text className="text-gray-700 text-base">{item.language}</Text>
                </View>
                <View className="flex-row items-center">
                  <Text className="font-bold text-gray-700 text-base">IMDB: </Text><Text className="text-gray-700 text-base">{item.imdb}</Text>
                </View>
                <View className="items-center py-3 mt-4 px-7 border border-red-400 bg-red-400">
                  <TouchableOpacity onPress={() => handleAdd(item)}>
                    <Text className="font-bold text-gray-50">WATCH</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View >
      )
    }
  }
  return (
    <View>
      <View>
        <View className="mb-10 mt-5 items-center">
          <TouchableOpacity onPress={() => navigation.navigate("SSR MOVIES")}>
            <Image className="" source={require("../../assets/images/ssr.png")}></Image>
          </TouchableOpacity>
          <SafeAreaView className="flex-row mt-5">
            <TextInput
              type="search"
              className="p-2 w-64 border border-blue-300 bg-blue-100"
              placeholder="What are you looking for?"
              value={input}
              onChangeText={(data) => setInput(data)}
              required></TextInput>
            <View className="p-2 h-11.1 w-10 bg-orange-400">
              <Image className="h-5 w-5 my-1 mx-0.6" source={require("../../assets/images/search.png")}></Image>
            </View>
          </SafeAreaView>
          <View className="flex-row mt-5">
            <View className="p-2 mx-1 h-10 w-10 bg-blue-700">
              <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/")}>
                <Image className="h-5 w-5 my-0.5 mx-0.5" source={require("../../assets/images/insta.png")}></Image>
              </TouchableOpacity>
            </View>
            <View className="p-2 mx-1 h-10 w-10 bg-blue-500">
              <TouchableOpacity onPress={() => Linking.openURL("https://web.telegram.org/a/")}>
                <Image className="h-5 w-5 my-0.5 mx-0.5" source={require("../../assets/images/telegram.png")}></Image>
              </TouchableOpacity>
            </View>
            <View className="p-2 mx-1 h-10 w-10 bg-orange-500">
              <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D")}>
                <Image className="h-5 w-5 my-0.5 mx-0.5" source={require("../../assets/images/twitter.png")}></Image>
              </TouchableOpacity>
            </View>
            <View className="p-2 mx-1 h-10 w-10 bg-pink-500">
              <TouchableOpacity onPress={() => Linking.openURL("https://web.whatsapp.com/")}>
                <Image className="h-5 w-5 my-0.5 mx-0.5" source={require("../../assets/images/whats.png")}></Image>
              </TouchableOpacity>
            </View>
            <View className="p-2 mx-1 h-10 w-10 bg-gray-400">
              <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjk4OTU3MzU5LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D")}>
                <Image className="h-5 w-5 my-0.5 mx-0.5" source={require("../../assets/images/faceOne.png")}></Image>
              </TouchableOpacity>
            </View>
          </View >
        </View >
      </View >
      <FlatList
        keyExtraction={(item) => item.id}
        data={Bollywood}
        renderItem={AllCard}
      ></FlatList>
    </View>
  )
}

export default BollywoodList