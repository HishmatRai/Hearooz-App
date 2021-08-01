import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Sound from './../../Components/Sound/Sound';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import CoverSound from './../../Components/CoverSound/CoverSound'
export default function CoverDetail(props) {
    const [info, setInfo] = useState(false);
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
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles._main}>

                    {/* <==========================> --- <==========================> */}
                    <ImageBackground
                        source={require("./../../Img/cover.png")}
                        style={styles.coverBG}
                    >
                        <View style={styles._cover_main}>
                            <Text style={styles._cover_heading}>Das ist das{"\n"}
                                Originalmärchen</Text>
                            <View>
                                <TouchableOpacity style={styles._save_btn}>
                                    <Entypo name="heart" size={25} color="#FD6387" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles._info_btn} onPress={() => setInfo(!info)}>
                                    <Text style={styles._info_btn_Text}>i</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                    {/* <==========================> --- <==========================> */}
                    {info !== false ?
                        <View style={styles._cover_info_main}>
                            <Text style={styles._cover_info_heading}>weißt du's schon? - Das ...</Text>
                            <Text style={styles._cover_info_details}>Lorem Ipsum ist ein einfacher Demo-Text für
                                die Print- und Schriftindustrie. Lorem Ipsum ist
                                in der Industrie bereits der Standard Demo-Text
                                seit 1500, als ein unbekannter Schriftsteller eine
                                Hand voll Wörter nahm und diese.</Text>
                        </View>
                        : null}

                    {/* <==========================> --- <==========================> */}
                    <View>
                        <CoverSound />
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
    coverBG: {
        resizeMode: "cover",
        height: 152,
        marginTop: -5
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
    _save_btn: {
        backgroundColor: "white",
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    _cover_heading: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 50
    },
    _cover_main: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 20
    },
    _info_btn: {
        backgroundColor: "#E4EFFF",
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    _info_btn_Text: {
        fontWeight: "bold",
        color: "#535242",
        fontSize: 25
    },
    _cover_info_main: {
        padding: 20,
        backgroundColor: 'white',
        elevation: 3,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    _cover_info_heading: {
        color: "#30302F",
        fontSize: 18,
        fontWeight: "bold"
    },
    _cover_info_details: {
        fontSize: 14,
        color: "#535242",
        fontWeight: "bold",
        marginTop: 10
    }
});