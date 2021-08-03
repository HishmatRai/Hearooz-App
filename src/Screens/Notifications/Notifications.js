import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Sound from './../../Components/Sound/Sound';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import CoverSound from './../../Components/CoverSound/CoverSound'
export default function Notifications(props) {
    useEffect(() => {
        StatusBar.setHidden(true);
    }, [])
    let CardData = [
        { img: require("./../../Img/Notifications1.png"), heading: "Neuer Titel eingeführt", subHeading: "Traumgeschichte", time: "Vor 5 Minuten" },
        { img: require("./../../Img/Notifications2.png"), heading: "Neuer Titel eingeführt", subHeading: "Traumgeschichte", time: "Vor 5 Minuten" },
        { img: require("./../../Img/Notifications3.png"), heading: "Programm aktualisieren", subHeading: "nicht verpassen", time: "Vor 5 Minuten" },
        { img: require("./../../Img/Notifications1.png"), heading: "Neuer Titel eingeführt", subHeading: "Traumgeschichte", time: "Vor 5 Minuten" },
        { img: require("./../../Img/Notifications2.png"), heading: "Neuer Titel eingeführt", subHeading: "Traumgeschichte", time: "Vor 5 Minuten" },
        { img: require("./../../Img/Notifications3.png"), heading: "Programm aktualisieren", subHeading: "nicht verpassen", time: "Vor 5 Minuten" },
        { img: require("./../../Img/Notifications1.png"), heading: "Neuer Titel eingeführt", subHeading: "Traumgeschichte", time: "Vor 5 Minuten" },
        { img: require("./../../Img/Notifications2.png"), heading: "Neuer Titel eingeführt", subHeading: "Traumgeschichte", time: "Vor 5 Minuten" },
        { img: require("./../../Img/Notifications3.png"), heading: "Programm aktualisieren", subHeading: "nicht verpassen", time: "Vor 5 Minuten" },
    ]
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
                    <TouchableOpacity style={styles._menu_icon} onPress={()=> props.navigation.navigate("Profile")}>
                        <FontAwesome name="user-circle-o" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            {/* <==========================> --- <==========================> */}
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles._main}>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._back_btn} onPress={() => props.navigation.goBack()}>
                        <Ionicons name="close" size={30} color="#4A95FA" />
                    </TouchableOpacity>

                    {/* <==========================> --- <==========================> */}
                    {CardData.map((v, i) => {
                        return (
                            <View style={styles._card_main}>
                                <View style={styles._image_main}>
                                    <Image
                                        source={v.img}
                                        style={styles.Notifications1}
                                    />
                                </View>
                                <View style={styles._card_data_main}>
                                    <Text style={styles._card_heading}>{v.heading}</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                        <Text style={styles._card_sub_heading}>{v.subHeading}</Text>
                                        <Text style={styles._time}>{v.time}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
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
                                source={require("./../../Img/active4.png")}
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

    _back_btn: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40 / 2,
        alignSelf: "flex-end",
        marginRight: 20,
        marginTop: 20
    },
    _card_main: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        backgroundColor: "white",
        elevation: 3,
        borderRadius: 10,
        marginTop: 20,
        height: 75
    },
    _image_main: {
        width: "30%",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    Notifications1: {
        width: 81,
        height: 75,
    },
    _card_data_main: {
        width: "70%",
        paddingRight: 10
    },
    _card_heading: {
        fontSize: 18,
        color: '#64A5FC',
        fontWeight: 'bold'
    },
    _card_sub_heading: {
        fontSize: 13,
        color: "#535242",
        fontWeight: 'bold'
    },
    _time: {
        fontSize: 9,
        color: "#444444",
        fontWeight: 'bold'
    }

});