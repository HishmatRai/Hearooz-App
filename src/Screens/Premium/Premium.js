import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Sound from './../../Components/Sound/Sound';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FollowInfoAudio from './../../Components/FollowInfoAudio/FollowInfoAudio'
export default function Premium(props) {
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
                    <TouchableOpacity style={styles._menu_icon} onPress={()=> props.navigation.navigate("Profile")}>
                        <FontAwesome name="user-circle-o" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            {/* <==========================> --- <==========================> */}
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles._main}>
                    {/* <==========================> --- <==========================> */}
                    <ImageBackground
                        source={require("./../../Img/PremiumBG.png")}
                        style={styles.PremiumBG}
                    >
                        <View style={styles._card_header}>
                            <Text style={styles._card_heading}>Dies ist der{"\n"}Premiumbereich</Text>
                            <Image
                                source={require("./../../Img/Premiumbereich.png")}
                                style={styles.active1}
                            />
                        </View>
                        <Text style={styles._card_sub_heading}>Um die unteren inhalte abzuspielen,{"\n"}
                            benötigst du ein Abo.</Text>
                        <TouchableOpacity style={styles._Informationen_btn}>
                            <Text style={styles._Informationen_btn_text}>Mehr Informationen ></Text>
                        </TouchableOpacity>
                    </ImageBackground>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._header_main}>
                        <Image
                            source={require("./../../Img/NeueFolgen.png")}
                            style={styles._footer_img}
                        />
                        <Text style={styles._header_heading}>Lustige Geschichte</Text>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles._slider_1_main}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Pricing")}>
                            <Image
                                source={require("./../../Img/Premium1.png")}
                                style={styles.slider1Img1}
                            />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate("Pricing")}>
                            <Image
                                source={require("./../../Img/Premium12.png")}
                                style={styles.slider1Img1}
                            />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate("Pricing")}>
                            <Image
                                source={require("./../../Img/Premium1.png")}
                                style={styles.slider1Img3}
                            />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                     {/* <==========================> --- <==========================> */}
                     <View style={styles._header_main}>
                        <Image
                            source={require("./../../Img/Schule.png")}
                            style={styles._footer_img}
                        />
                        <Text style={styles._header_heading}>Schule</Text>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles._slider_1_main}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Pricing")}>
                            <Image
                                source={require("./../../Img/Premium2.png")}
                                style={styles.slider1Img1}
                            />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate("Pricing")}>
                            <Image
                                source={require("./../../Img/Premium21.png")}
                                style={styles.slider1Img1}
                            />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate("Pricing")}>
                            <Image
                                source={require("./../../Img/Premium2.png")}
                                style={styles.slider1Img3}
                            />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

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
                                source={require("./../../Img/active2.png")}
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
    PremiumBG: {
        resizeMode: "cover",
        height: 197
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
    _card_header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20
    },
    _card_heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white"
    },
    _card_sub_heading: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        marginLeft: 20,
        marginTop: -10
    },
    _Informationen_btn: {
        borderBottomWidth: 1,
        borderBottomColor: "#FFED47",
        marginLeft: 20,
        width: "40%",
        marginTop: 10
    },
    _Informationen_btn_text: {
        fontSize: 16,
        color: "#FFED47",
        fontWeight: "bold"
    },
    _header_main: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30,
        marginLeft: 20
    },
    _header_heading: {
        fontSize: 18,
        color: "#535242",
        fontWeight: "bold",
        marginLeft: 10
    },
    _slider_1_main: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
    slider1Img1: {
        width: 160,
        height: 160,
        borderRadius: 10,
        marginLeft: 20,
    },
    slider1Img3: {
        width: 160,
        height: 160,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 10
    },
});