import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Privacy = () => {
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
                </View>
                <View className="p-5 bg-blue-100 h-auto">
                    <View>
                        <Text className="text-3xl text-gray-900">Privacy Policy</Text>
                    </View>
                    <View className="mt-5">
                        <Text className="text-gray-600 text-base text-justify">We never sell your personal information to third parties.</Text>
                    </View>
                    <View className="mt-4">
                        <Text className="text-gray-600 text-base text-justify">We may use your IP address to help diagnose any problem with our service and to provide better services for our visitors.</Text>
                    </View>
                    <View className="mt-4">
                        <Text className="text-gray-600 text-base text-justify">We use third-party advertising companies to serve ads when you visit our website. The ads may contain cookies which may be used by the advertising companies to better understand a visitor’s preferences and help them to display related ads. However, the cookies received with the advertisements are collected by the advertising company and we do not have access to that information.These companies may use information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
                            Email Addresses – We never share your email addresses with anyone.</Text>
                    </View>
                    <View>
                        <Text className="text-gray-600 text-base text-justify">Log Files – As with most other websites, we collect and use the data contained in log files. The information in the log files include your IP (internet protocol) address, your ISP (airtel, bsnl, mtnl, tata etc…), the browser you used to visit our site (such as Internet Explorer or Firefox), the time you visited our site and which pages you visited throughout our site.</Text>
                    </View>
                    <View>
                        <Text className="text-gray-600 text-base text-justify">Cookies and Web Beacons – We use third-party advertising companies to serve ads when you visit our website. These companies may use information (not including your name, address, email address or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you. If you would like more information about this practice and would like to know your options in relation to·not having this information used by these companies.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Privacy