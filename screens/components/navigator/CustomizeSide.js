import { SafeAreaView, View, Text, Button, StatusBar, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';

const CustomizeSide = (props) => {
    return (
        <SafeAreaView className="flex-1 mt-10 h-60 bg-red-100">
            <View className="items-center bg-red-200 h-28 justify-center">
                <View>
                    <Image className="h-10 w-52" source={require("../../../assets/images/ssr.png")}></Image>
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props}></DrawerItemList>
            </DrawerContentScrollView>
        </SafeAreaView>
    )
}

export default CustomizeSide;