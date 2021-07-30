import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Sound from './../../Components/Sound/Sound'
export default function Home(props) {

    return (
        <View style={styles.container}>

            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="white"
                hidden={true}
                backgroundColor="transparent"
                translucent={true}
            />

            {/* <==========================> --- <==========================> */}
            <ImageBackground
                source={require("./../../Img/homeHeader.png")}
                style={styles._image}
            >
                <Sound/>
                <View style={styles._menu_main}>
                    <TouchableOpacity style={styles._menu_icon} onPress={() => props.navigation.openDrawer()}>
                        <Ionicons name="menu" size={30} color="white" />
                    </TouchableOpacity>
                    <View style={styles._menu_center_main}>
                        <TouchableOpacity style={styles._menu_icon}>
                            <Ionicons name="home-sharp" size={30} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._menu_icon}>
                            <Ionicons name="moon" size={30} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._menu_icon}>
                            <Ionicons name="search" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles._menu_icon}>
                        <FontAwesome name="user-circle-o" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            {/* <==========================> --- <==========================> */}

            {/* <==========================> --- <==========================> */}
            <ScrollView showsVerticalScrollIndicator={false}>


            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    _image: {
        flex: 1,
        resizeMode: "cover",
        height: "100%",
    },
    _menu_icon: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40 / 2,
    },
    _menu_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20
    },
    _menu_center_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "45%"
    }
});