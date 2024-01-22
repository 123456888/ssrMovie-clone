import { View, TextInput, Text, Image, ScrollView, Linking, SafeAreaView } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const Details = (item) => {
  const data = item.route.params;

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const navigation = useNavigation();


  return (
    <ScrollView>
      <View>
        <View>
          <View className="mb-10 mt-5 items-center">
            <TouchableOpacity onPress={() => navigation.navigate("SSR MOVIES")}>
              <Image className="" source={require("../../assets/images/ssr.png")}></Image>
            </TouchableOpacity>
            <SafeAreaView className="flex-row mt-5">
              <TextInput type="search" className="p-2 w-64 border border-blue-300 bg-blue-100" placeholder="What are you looking for?" required></TextInput>
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
        <View className="bg-blue-100">
          <View className="mt-5">
            <View className="p-1 w-80 items-center mx-5">
              <Text className="text-gray-900 text-xl font-bold text-justify">{data.name}</Text>
            </View>
            <View className="items-center">
              <Image className="mt-2 w-80 rounded-lg" source={data.Image}></Image>
            </View>
            <View className="mt-2 w-72 mx-3">
              <View className="flex-row items-center mt-3">
                <Text className="font-bold text-lg text-gray-600">IMBDb:</Text><Text className="text-base text-gray-600"> {data.imdb}</Text>
              </View>
              <View className="flex-row items-center">
                <Text className="font-bold text-lg text-gray-600">Language:</Text><Text className="text-base text-gray-600"> {data.language}</Text>
              </View>
              <View className="flex-row items-center">
                <Text className="font-bold text-lg text-gray-600">Genres:</Text><Text className="text-base text-gray-600"> {data.geners}</Text>
              </View>
              <View className="flex-row items-center">
                <Text className="font-bold text-lg text-gray-600">Director:</Text><Text className="text-base text-gray-600"> {data.director}</Text>
              </View>
              <View className="flex-row">
                <Text className="font-bold text-lg text-gray-600">Writers:</Text><Text className="text-base text-gray-600 mt-0.5"> {data.writers}</Text>
              </View>
              <View className="flex-row">
                <Text className="font-bold text-lg text-gray-600">Stars:</Text><Text className="text-base text-gray-600 mt-1"> {data.star}</Text>
              </View>
              <View className="flex-row">
                <Text className="font-bold text-lg text-gray-600">Story:</Text><Text className="text-base text-gray-600 mt-1 text-justify"> {data.story}</Text>
              </View>
            </View>
            <View className="items-center mt-5">
              <Image source={require("../../assets/images/screenShot.png")}></Image>
            </View>
            <View className="items-center mt-3">
              <Image className="w-80" source={data.screenShot}></Image>
            </View>
            <View className="mt-8 items-center">
              <Image className="w-80" source={require("../../assets/images/line-gif.gif")}></Image>
            </View>
            <View className="mt-8 mx-3 items-center">
              <Text className="text-gray-600 font-bold text-2xl">Full Movie Download Link</Text>
            </View>
            <View className="items-center mt-4">
              <TouchableOpacity className="py-2 px-4 w-60 border border-gray-500 items-center bg-red-400" onPress={() => Linking.openURL(data.movieLink)}>
                <Text className="text-gray-100 text-xl font-bold">Download Link</Text>
              </TouchableOpacity>
            </View>
            <View className="items-center mt-10">
              <Image className="w-80" source={require("../../assets/images/line-gif.gif")}></Image>
            </View>
            <View className="items-center mt-5">
              <Text className="text-gray-600 text-xl font-bold">How To Download Movie?</Text>
            </View>
            <View className="items-center mt-3">
              <Video
                className="h-96 w-60"
                ref={video}
                source={require("../../assets/images/video.mp4")}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
              />
            </View>
            <View className="">
              <View>
                <View className="mt-8">
                  <Text className="text-gray-800 text-xl mx-5">Add Comment</Text>
                </View>
                <View className="items-center mt-3">
                  <TextInput type="text" className="w-80 h-28 px-2 text-gray-800 border border-gray-300 rounded-lg bg-white sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder="Message" />
                  <TextInput type="text" className="mt-3 w-80 p-2 text-gray-800 border border-gray-300 rounded-lg bg-white sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder="Name" />
                  <TextInput type="text" className="mt-3 w-80 p-2 text-gray-800 border border-gray-300 rounded-lg bg-white sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder="Email-Id" />
                  <TextInput type="text" className="mt-3 w-80 p-2 text-gray-800 border border-gray-300 rounded-lg bg-white sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder="Website" />
                  <TouchableOpacity className="mt-6 py-2 px-4 border mb-6 border-red-400 rounded-sm bg-red-400">
                    <Text className="font-bold text-gray-100 text-base">SUBMIT COMMENT</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Details;