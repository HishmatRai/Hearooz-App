import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Sound from './../../Components/Sound/Sound';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import CoverSound from './../../Components/CoverSound/CoverSound'
export default function LogOut(props) {
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
                    <TouchableOpacity style={styles._back_btn} onPress={() => props.navigation.goBack()}>
                        <Ionicons name="close" size={30} color="#4A95FA" />
                    </TouchableOpacity>

                    {/* <==========================> --- <==========================> */}
                    <Image
                        source={require("./../../Img/Pricing.png")}
                        style={styles.Pricing}
                    />
                    <Text style={styles._title}>Willst du dich{"\n"}
                        wirklich ausloggen?</Text>
                    <Text style={{fontSize:18,color:"#707070",textAlign:"center",marginTop:20}}>Wenn du dich ausloggst, wird die App{"\n"}
                        beendet und du musst sie neu starten.</Text>
                    <TouchableOpacity style={styles._Bestätigen_btn} onPress={() => props.navigation.navigate("Registrieren")}>
                        <Text style={styles._Bestätigen_btn_Text}>Ausloggen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._Bestätigen_btn2} onPress={() => props.navigation.navigate("Home")}>
                        <Text style={styles._Bestätigen_btn_Text}>Abbrechen</Text>
                    </TouchableOpacity>
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
    Pricing: {
        alignSelf: "center"
    },
    _title: {
        fontSize: 18,
        color: "#535242",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 20
    },

    _Bestätigen_btn: {
        backgroundColor: "#4A95FA",
        width: "90%",
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        alignSelf:"center"
    },
    _Bestätigen_btn2: {
        backgroundColor: "#FD6387",
        width: "90%",
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        alignSelf:"center"
    },
    _Bestätigen_btn_Text: {
        fontSize: 24,
        color: "white",
        fontWeight:"bold"
    }
});