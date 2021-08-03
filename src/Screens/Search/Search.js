import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Sound from './../../Components/Sound/Sound';
import SearchSound from './../../Components/SearchSound/SearchSound'
export default function Search(props) {
    const [search, onChangeSearch] = React.useState("");
    useEffect(() => {
        StatusBar.setHidden(true);
    }, [])

    return (
        <View style={styles.container}>
            {/* <==========================> --- <==========================> */}
            <ImageBackground
                source={require("./../../Img/homeHeader.png")}
                style={styles._image}
            >
                <Sound />
                <View style={styles._menu_main}>
                    <TouchableOpacity style={styles._menu_icon} onPress={() => props.navigation.openDrawer()}>
                        <Ionicons name="menu" size={30} color="white" />
                    </TouchableOpacity>
                    <View style={styles._menu_center_main}>
                        <TouchableOpacity style={styles._menu_icon} onPress={() => props.navigation.navigate("Home")}>
                            <Ionicons name="home-sharp" size={30} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._menu_icon} onPress={() => props.navigation.navigate("SlumberTime")}>
                            <Ionicons name="moon" size={30} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._menu_icon} onPress={() => props.navigation.navigate("Search")}>
                            <Ionicons name="search" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles._menu_icon}>
                        <FontAwesome name="user-circle-o" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            {/* <==========================> --- <==========================> */}
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles._main}>

                    {/* <==========================> --- <==========================> */}

                    <View style={styles._input_main}>
                        <Ionicons name="search" size={30} color="#707070" />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeSearch}
                            value={search}
                            placeholder="Hör Lok"
                            placeholderTextColor="#4A95FA"
                            color="#4A95FA"
                        />
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("FollowInfo")}>
                            <SearchSound />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate("FollowInfo")}>
                            <SearchSound />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate("FollowInfo")}>
                            <SearchSound />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate("FollowInfo")}>
                            <SearchSound />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate("FollowInfo")}>
                            <SearchSound />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginBottom: 20 }}></View>
            </ScrollView>
            <View style={styles._tab_main}>
                <ImageBackground
                    source={require("./../../Img/footerBG.png")}
                    style={styles.footerBG}
                >
                    <View style={styles._tabs}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
                            <Image
                                source={require("./../../Img/home.png")}
                                style={styles.active1}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Premium")}>
                            <Image
                                source={require("./../../Img/seconttab.png")}
                                style={styles.active1}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Favorites")}>
                            <Image
                                source={require("./../../Img/thirdtab.png")}
                                style={styles.active1}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Notifications")}>
                            <Image
                                source={require("./../../Img/fourthtab.png")}
                                style={styles.active1}
                            />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    _image: {
        resizeMode: "cover",
        height: 220,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    footerBG: {
        resizeMode: "cover",
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
        marginHorizontal: 20,
    },
    _menu_center_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "45%"
    },
    _main: {
    },
    _tab_main: {
    },
    _tabs: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 10
    },
    _input_main: {
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        backgroundColor: "#E4F0FF",
        width: "90%",
        borderRadius: 50,
        paddingHorizontal: 10
    },
    input: {
        paddingHorizontal: 10,
        fontSize: 18,
        fontWeight: "bold",
        width: "90%"
    },

});