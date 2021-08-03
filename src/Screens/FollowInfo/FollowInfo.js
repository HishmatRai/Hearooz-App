import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Sound from './../../Components/Sound/Sound';
import FollowInfoAudio from './../../Components/FollowInfoAudio/FollowInfoAudio'
export default function FollowInfo(props) {
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
                    <TouchableOpacity style={styles._back_btn} onPress={() => props.navigation.goBack()}>
                        <Ionicons name="close" size={30} color="#4A95FA" />
                    </TouchableOpacity>
                    <Text style={styles._sub_heading}>Lorem Ipsum ist ein einfacher Demo</Text>
                    <Text style={styles._heading}>Vielaaugenflieger</Text>
                    {/* <==========================> --- <==========================> */}
                    <View>
                        <FollowInfoAudio />
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <Text style={styles._details}>
                        Lorem Ipsum ist ein einfacher Demo-Text für
                        die Print- und Schriftindustrie. Lorem Ipsum ist
                        in der Industrie bereits der Standard Demo-Text
                        seit 1500, als ein unbekannter Schriftsteller eine
                        Hand voll Wörter nahm und diese
                        durcheinander warf um ein Musterbuch zu
                        erstellen. Es hat nicht nur 5 Jahrhunderte
                        überlebt, sondern auch in Spruch in die
                        elektronische Schriftbearbeitung geschafft
                        (bemerke, nahezu unverändert). Bekannt
                        wurde es 1960, mit dem erscheinen von
                        "Letraset", welches Passagen von Lorem Ipsum
                        enhielt, so wie Desktop Software wie "Aldus
                        PageMaker" - ebenfalls mit Lorem Ipsum.
                    </Text>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._list_main}>
                        <Text style={styles._list_heading}>Erscheinungsdatum:</Text>
                        <Text style={styles._list_sub_heading}> 10.07.2021</Text>
                    </View>
                    <View style={styles._list_main}>
                        <Text style={styles._list_heading}>Autor:</Text>
                        <Text style={styles._list_sub_heading}> Max Mustermsnn</Text>
                    </View>
                    <View style={styles._list_main}>
                        <Text style={styles._list_heading}>Verlag:</Text>
                        <Text style={styles._list_sub_heading}> Beispielverlag</Text>
                    </View>
                    <View style={styles._list_main}>
                        <Text style={styles._list_heading}>Sprecher:</Text>
                        <Text style={styles._list_sub_heading}> Maria Muster</Text>
                    </View>
                    <Text style={styles._copy_right}>©️ 2021 Hearooz</Text>
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
    _sub_heading: {
        fontSize: 16,
        color: "#535242",
        marginLeft: 20
    },
    _heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#535242",
        marginLeft: 20
    },
    _details: {
        fontSize: 15,
        color: "#535242",
        margin: 20
    },
    _list_main: {
        flexDirection: "row",
        marginHorizontal: 20
    },
    _list_heading: {
        color: "#4A95FA",
        fontSize: 16,
        fontWeight: "bold"
    },
    _list_sub_heading: {
        color: "#4A95FA",
        fontSize: 16,
    },
    _copy_right: {
        fontSize: 18,
        color: "#4A95FA",
        marginHorizontal: 20,
        fontWeight: "bold",
        marginTop:20
    }
});