import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Sound from './../../Components/Sound/Sound';
export default function PricingFeature(props) {
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
                        <Ionicons name="close" size={30} color="white" />
                    </TouchableOpacity>

                    {/* <==========================> --- <==========================> */}
                    <Text style={styles._title}>7 Tage gratis & uber 20% sparen</Text>
                    <Text style={{ fontSize: 16, color: "white", marginLeft: 20, marginTop: 20 }}>MONATLICH</Text>
                    <View style={{ marginLeft: 20, flexDirection: "row" }}>
                        <Text style={styles._price_show}>3,99 €</Text>
                        <Text style={styles._price_time}> Preis für 6 Monate</Text>
                    </View>
                    <View style={styles._data_main}>
                        <Text style={styles._data_show}>23,94 € /6 Monate</Text>
                    </View>
                    <View style={styles._data_main2}>
                        <Text style={styles._data_show}>automatische Erneuerung</Text>
                    </View>
                    <View style={styles._data_main2}>
                        <Text style={styles._data_show}>Zugriff auf alle freien Inhalte</Text>
                    </View>
                    <View style={styles._data_main2}>
                        <Text style={styles._data_show}>uneingeschränkt Zugriff auf alle
                            PREMIUM-Inhalte</Text>
                    </View>
                    <View style={styles._data_main2}>
                        <Text style={styles._data_show}>Unsere Profile für bis zu 3 Kinder in einem
                            Familie</Text>
                    </View>
                    <View style={styles._data_main2}>
                        <Text style={styles._data_show}>Offline anhören*</Text>
                    </View>
                    <TouchableOpacity style={styles._Bestätigen_btn} onPress={() => props.navigation.navigate("Premium")}>
                        <Text style={styles._Bestätigen_btn_Text}>Abo mit Test starten</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles._main2}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 21, color: "#1A2637" }}>1 Tag gratis</Text>
                        <Image
                            source={require("./../../Img/Taggratis.png")}
                            style={styles.Taggratis}
                        />
                    </View>
                    <Text style={{ fontSize: 16, color: "#535242", fontWeight: "bold", marginTop: 20 }}>MONATLICH</Text>
                    <Text style={{ fontSize: 45, color: "#535242", fontWeight: "bold", marginTop: 0 }}>4,99 €</Text>
                    <View style={styles._list}>
                        <Text style={styles._list_data}>4,44 €/Monate</Text>
                    </View>
                    <View style={styles._list}>
                        <Text style={styles._list_data}>automatische Erneuerung</Text>
                    </View>
                    <View style={styles._list}>
                        <Text style={styles._list_data}>Zugriff auf alle freien Inhalte</Text>
                    </View>
                    <View style={styles._list}>
                        <Text style={styles._list_data}>uneingeschränkt Zugriff auf alle
                            PREMIUM-Inhalte</Text>
                    </View>
                    <View style={styles._list}>
                        <Text style={styles._list_data}>Unsere Profile für bis zu 3 Kinder in einem
                            Familie</Text>
                    </View>
                    <View style={styles._list}>
                        <Text style={styles._list_data}>Offline anhören*         </Text>
                    </View>
                    <TouchableOpacity style={styles._Bestätigen_btn2} onPress={() => props.navigation.navigate("Premium")}>
                        <Text style={styles._Bestätigen_btn_Text}>Abo mit Test starten</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles._Fertig_btn}  onPress={() => props.navigation.navigate("Premium")}>
                    <Text style={styles._Fertig_btn_text}>Fertig</Text>
                </TouchableOpacity>
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
        backgroundColor: "#4E9EF3",
        paddingBottom: 30
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

    _title: {
        fontSize: 21,
        color: "#FFCB24",
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 20
    },
    _Bestätigen_btn: {
        backgroundColor: "#FBA312",
        width: "90%",
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        alignSelf: "center"
    },
    _Bestätigen_btn2: {
        backgroundColor: "#33B2F6",
        width: "90%",
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        alignSelf: "center"
    },
    _Bestätigen_btn_Text: {
        fontSize: 22,
        color: "white",
        fontWeight: "bold"
    },
    _price_show: {
        color: "white",
        fontSize: 48,
        fontWeight: "bold"
    },
    _price_time: {
        color: "white",
        fontSize: 16,
        marginLeft: 20,
        marginTop: 10
    },
    _data_main: {
        borderTopColor: "white",
        borderTopWidth: 1,
        borderBottomColor: "white",
        borderBottomWidth: 1,
        marginTop: 20,
        marginHorizontal: 20,
        paddingVertical: 15
    },
    _data_main2: {
        borderBottomColor: "white",
        borderBottomWidth: 1,
        marginHorizontal: 20,
        paddingVertical: 15
    },
    _data_show: {
        fontSize: 16,
        color: "white"
    },
    _main2: {
        backgroundColor: "white",
        elevation: 5,
        margin: 20,
        borderRadius: 10,
        padding: 20,
        paddingBottom: 40
    },
    _list: {
        borderBottomColor: "#535242",
        borderBottomWidth: 1,
        marginHorizontal: 20,
        paddingVertical: 15
    },
    _list_data: {
        fontSize: 16,
        color: "#535242"
    },
    _Fertig_btn: {
        backgroundColor: "#4A95FA",
        height: 56,
        width: "40%",
        alignSelf: "center",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    _Fertig_btn_text: {

        fontSize: 22,
        color: "white",
        fontWeight: "bold"
    }
});