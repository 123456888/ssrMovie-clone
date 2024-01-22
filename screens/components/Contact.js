import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Button } from 'react-native';
import React from 'react';

const Contact = () => {
    return (
        <ScrollView>
            <View>
                <View>
                    <View className="mb-10 mt-5 items-center">
                        <TouchableOpacity onPress={() => navigation.navigate("SSR MOVIES")}>
                            <Image className="" source={require("../../assets/images/ssr.png")}></Image>
                        </TouchableOpacity>
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
                <View className="bg-blue-100 h-full">
                    <View className="items-center">
                        <Text className="font-bold text-3xl text-gray-900 mt-4">Contact Us</Text>
                    </View>
                    <View className="p-3 mt-3">
                        <Text className="text-gray-600 text-base">Your Name (Required)</Text>
                        <TextInput type="input" className="h-9 rounded-lg bg-white mt-2"></TextInput>
                    </View>
                    <View className="p-3">
                        <Text className="text-gray-600 text-base">Your Email (Required)</Text>
                        <TextInput type="input" className="h-9 rounded-lg bg-white mt-2"></TextInput>
                    </View>
                    <View className="p-3">
                        <Text className="text-gray-600 text-base">Subject</Text>
                        <TextInput type="input" className="h-9 rounded-lg bg-white mt-2"></TextInput>
                    </View>
                    <View className="p-3">
                        <Text className="text-gray-600 text-base">Your Message</Text>
                        <TextInput type="input" className="h-24 rounded-lg bg-white mt-2"></TextInput>
                    </View>
                    <View className="p-5">
                        <Button title="Submit"></Button>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Contact