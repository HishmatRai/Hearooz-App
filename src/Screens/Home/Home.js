import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Sound from './../../Components/Sound/Sound'
export default function Home(props) {
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
                        <TouchableOpacity style={styles._menu_icon}>
                            <Ionicons name="home-sharp" size={30} color="#FFEB5A" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._menu_icon} onPress={()=> props.navigation.navigate("SlumberTime")}>
                            <Ionicons name="moon" size={30} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._menu_icon} style={styles._menu_icon} onPress={()=> props.navigation.navigate("Search")}>
                            <Ionicons name="search" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles._menu_icon}  onPress={()=> props.navigation.navigate("Profile")}>
                        <FontAwesome name="user-circle-o" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            {/* <==========================> --- <==========================> */}
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles._main}>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._header_main}>
                        <Image
                            source={require("./../../Img/glass.png")}
                            style={styles._footer_img}
                        />
                        <Text style={styles._header_heading}>Zuletzt gehört</Text>
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles._slider_1_main}>
                            <TouchableOpacity onPress={()=> props.navigation.navigate("CoverDetail")}>
                            <Image
                                source={require("./../../Img/slider1Img1.png")}
                                style={styles.slider1Img1}
                            />
                            </TouchableOpacity>
                            <Image
                                source={require("./../../Img/slider1Img2.png")}
                                style={styles.slider1Img1}
                            />
                            <Image
                                source={require("./../../Img/slider1Img3.png")}
                                style={styles.slider1Img3}
                            />
                        </View>
                    </ScrollView>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._header_main}>
                        <Image
                            source={require("./../../Img/NeueFolgen.png")}
                            style={styles._footer_img}
                        />
                        <Text style={styles._header_heading}>Neue Folgen</Text>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles._slider_1_main}>
                            <Image
                                source={require("./../../Img/slider2Img1.png")}
                                style={styles.slider1Img1}
                            />
                            <Image
                                source={require("./../../Img/slider2Img2.png")}
                                style={styles.slider1Img1}
                            />
                            <Image
                                source={require("./../../Img/slider2Img1.png")}
                                style={styles.slider1Img3}
                            />
                        </View>
                    </ScrollView>
                    {/* <==========================> --- <==========================> */}
                    <View style={styles._header_main}>
                        <Image
                            source={require("./../../Img/NeueSendungen.png")}
                            style={styles._footer_img}
                        />
                        <Text style={styles._header_heading}>Neue Sendungen</Text>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles._slider_1_main}>
                            <Image
                                source={require("./../../Img/slider3Img1.png")}
                                style={styles.slider1Img1}
                            />
                            <Image
                                source={require("./../../Img/slider3Img2.png")}
                                style={styles.slider1Img1}
                            />
                            <Image
                                source={require("./../../Img/slider3Img3.png")}
                                style={styles.slider1Img3}
                            />
                        </View>
                    </ScrollView>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._header_main}>
                        <Image
                            source={require("./../../Img/Aktuelles.png")}
                            style={styles._footer_img}
                        />
                        <Text style={styles._header_heading}>Aktuelles</Text>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles._slider_1_main}>
                            <Image
                                source={require("./../../Img/slider4Img1.png")}
                                style={styles.slider1Img1}
                            />
                            <Image
                                source={require("./../../Img/slider4Img2.png")}
                                style={styles.slider1Img1}
                            />
                            <Image
                                source={require("./../../Img/slider4Img1.png")}
                                style={styles.slider1Img3}
                            />
                        </View>
                    </ScrollView>

                    <Image
                        source={require("./../../Img/Mikado.png")}
                        style={styles.Mikado}
                    />

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._header_main}>
                        <Image
                            source={require("./../../Img/MikadoRadiofürkinder.png")}
                            style={styles._footer_img}
                        />
                        <Text style={styles._header_heading}>Mikado: Radio für kinder</Text>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles._slider_1_main}>
                            <Image
                                source={require("./../../Img/slider5Img1.png")}
                                style={styles.slider1Img1}
                            />
                            <Image
                                source={require("./../../Img/slider5Img2.png")}
                                style={styles.slider1Img1}
                            />
                            <Image
                                source={require("./../../Img/slider5Img1.png")}
                                style={styles.slider1Img3}
                            />
                        </View>
                    </ScrollView>

                    <Image
                        source={require("./../../Img/Einschlafgeschichten.png")}
                        style={styles.Mikado}
                    />

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._header_main}>
                        <Image
                            source={require("./../../Img/EinschlafgeschichtenIcon.png")}
                            style={styles._footer_img}
                        />
                        <Text style={styles._header_heading}>Einschlafgeschichten</Text>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles._slider_1_main}>
                            <Image
                                source={require("./../../Img/slider1Img1.png")}
                                style={styles.slider1Img1}
                            />
                            <Image
                                source={require("./../../Img/slider6Img2.png")}
                                style={styles.slider1Img1}
                            />
                            <Image
                                source={require("./../../Img/slider2Img2.png")}
                                style={styles.slider1Img3}
                            />
                        </View>
                    </ScrollView>
                    {/* <==========================> --- <==========================> */}
                    <View style={styles._header_main}>
                        <Image
                            source={require("./../../Img/Schuleund.png")}
                            style={styles._footer_img}
                        />
                        <Text style={styles._header_heading}>Schule und Lernen</Text>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles._slider_1_main}>
                            <Image
                                source={require("./../../Img/slider7Img1.png")}
                                style={styles.slider1Img1}
                            />
                            <Image
                                source={require("./../../Img/slider7Img2.png")}
                                style={styles.slider1Img1}
                            />
                            <Image
                                source={require("./../../Img/slider7Img3.png")}
                                style={styles.slider1Img3}
                            />
                        </View>
                    </ScrollView>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._header_main}>
                        <Image
                            source={require("./../../Img/Sendungen.png")}
                            style={styles._footer_img}
                        />
                        <Text style={styles._header_heading}>Sendungen</Text>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles._slider_1_main}>
                            <Image
                                source={require("./../../Img/slider8Img1.png")}
                                style={styles.slider1Img1}
                            />
                            <Image
                                source={require("./../../Img/slider8Img2.png")}
                                style={styles.slider1Img1}
                            />
                            <Image
                                source={require("./../../Img/slider8Img3.png")}
                                style={styles.slider1Img3}
                            />
                        </View>
                    </ScrollView>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._header_main}>
                        <Image
                            source={require("./../../Img/Wissen.png")}
                            style={styles._footer_img}
                        />
                        <Text style={styles._header_heading}>Wissen</Text>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles._slider_1_main}>
                            <Image
                                source={require("./../../Img/slider9Img1.png")}
                                style={styles.slider1Img1}
                            />
                            <Image
                                source={require("./../../Img/slider9Img2.png")}
                                style={styles.slider1Img1}
                            />
                            <Image
                                source={require("./../../Img/slider2Img2.png")}
                                style={styles.slider1Img3}
                            />
                        </View>
                    </ScrollView>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._header_main}>
                        <Image
                            source={require("./../../Img/LustigeGeschichte.png")}
                            style={styles._footer_img}
                        />
                        <Text style={styles._header_heading}>Lustige Geschichte</Text>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles._slider_1_main}>
                            <Image
                                source={require("./../../Img/slider10Img1.png")}
                                style={styles.slider1Img1}
                            />
                            <Image
                                source={require("./../../Img/slider10Img2.png")}
                                style={styles.slider1Img1}
                            />
                            <Image
                                source={require("./../../Img/slider2Img1.png")}
                                style={styles.slider1Img3}
                            />
                        </View>
                    </ScrollView>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._refresh_btn}>
                        <MaterialIcons name="refresh" size={25} color="#535242" />
                        <Text style={styles._refresh_btn_text}>Ziehen zum refresh</Text>
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
                        <TouchableOpacity onPress={()=> props.navigation.navigate("Home")}>
                            <Image
                                source={require("./../../Img/active1.png")}
                                style={styles.active1}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> props.navigation.navigate("Premium")}>
                            <Image
                                source={require("./../../Img/seconttab.png")}
                                style={styles.active1}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> props.navigation.navigate("Favorites")}>
                            <Image
                                source={require("./../../Img/thirdtab.png")}
                                style={styles.active1}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> props.navigation.navigate("Notifications")}>
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
    slider1Img1: {
        width: 130,
        height: 130,
        borderRadius: 10,
        marginLeft: 20,
    },
    slider1Img3: {
        width: 130,
        height: 130,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 10
    },
    _slider_1_main: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
    _tab_main: {
    },
    _tabs: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 10
    },
    Mikado: {
        marginTop: 30,
    },
    _refresh_btn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop:20
    },
    _refresh_btn_text: {
        color: "#535242",
        fontSize: 14,
        fontWeight: "bold",
        marginLeft:5
    }
});