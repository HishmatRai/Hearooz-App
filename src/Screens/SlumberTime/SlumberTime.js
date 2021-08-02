import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Sound from './../../Components/Sound/Sound';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import CoverSound from './../../Components/CoverSound/CoverSound'
export default function SlumberTime(props) {
    const [info, setInfo] = useState(false);
    const [activeBtn, setActiveBtn] = useState(0);

    useEffect(() => {
        StatusBar.setHidden(true);
    }, [])

    const DataList = [
        { value: "Aus" },
        { value: "5 Minuten" },
        { value: "10 Minuten" },
        { value: "15 Minuten" },
        { value: "30 Minuten" },
        { value: "45 Minuten" },
        { value: "60 Minuten" },
        { value: "Ende des kapitels" },
        { value: "Ende der Folge" },
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
                            <Ionicons name="moon" size={30} color="#FD6387" />
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
                    <Text style={styles._heading}>Stelle die Schlummerzeit ein.</Text>

                    {/* <==========================> --- <==========================> */}
                    {DataList.map((v, i) => {
                        return (
                            <TouchableOpacity style={styles.select_main}
                                onPress={() => setActiveBtn(i)}
                                style={
                                    activeBtn === i
                                        ? {
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            backgroundColor: '#E7F5FC',
                                            paddingHorizontal: 20,
                                            marginTop: 10,
                                            paddingVertical:15
                                        }
                                        : {
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            paddingHorizontal: 20,
                                            marginTop: 10,
                                            paddingVertical:15

                                        }
                                }>
                                <Text style={styles._history_text}>{v.value}</Text>
                                {
                                    activeBtn === i
                                        ? <Ionicons name="checkmark-sharp" size={30} color="#22DBB7" />
                                        : null}
                            </TouchableOpacity>
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
    _heading: {
        color: "#535242",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 20
    },
    select_main: {
        backgroundColor: "red"
    },
    _history_text: {
        fontSize: 16,
        color: "#535242",
        fontWeight: "bold"
    }
});