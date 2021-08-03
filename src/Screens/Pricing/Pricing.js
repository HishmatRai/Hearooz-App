import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Sound from './../../Components/Sound/Sound';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import CoverSound from './../../Components/CoverSound/CoverSound'
export default function Pricing(props) {
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
                    <Text style={styles._title}>Wählen Sie den besten Plan aus</Text>

                    <View style={styles._premium_main}>
                        <Text style={styles._premium_heading}>PREMIUM</Text>
                    </View>
                    <View style={styles._premium_price_main}>
                    <Image
                                source={require("./../../Img/monatlich.png")}
                                style={styles.monatlich}
                            />
                     <View style={styles._price_show}>
                         <Text style={styles._price_heading}>ab</Text>
                         <Text style={styles._price}> 3,99 EUR</Text>
                         <Text  style={styles._price_heading}> monatlich</Text>
                     </View>
                     <Text style={styles._heading}>Und alle freischalten</Text>
                     <TouchableOpacity style={styles._Bestätigen_btn} onPress={() => props.navigation.navigate("PricingFeature")}>
                         <Text style={styles._Bestätigen_btn_Text}>Bestätigen</Text>
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
    _premium_main: {
        backgroundColor: "#4E9EF3",
        marginHorizontal: 20,
        marginTop: 20,
        height: 141,
        borderRadius: 10
    },
    _premium_heading: {
        fontSize: 26,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginTop: 30
    },
    _premium_price_main:{
        backgroundColor:"white",
        marginHorizontal:40,
        padding:20,
        borderRadius:10,
        marginTop:-50,
        alignItems:"center"
    },
    _price_show:{
        flexDirection:"row",
        alignItems:"center"
    },
    _price_heading:{
        fontSize:18,
        color:"#1B67FA"
    },
    _price:{
        fontSize:20,
        color:"#1B67FA"  ,
        fontWeight:"bold"
    },
    _heading:{
        fontSize:16,
        color:"#535242",
        fontWeight:"bold",
        marginTop:20
    },
    _Bestätigen_btn:{
        backgroundColor:"#FBA312",
        width:"90%",
        height:50,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40
    },
    _Bestätigen_btn_Text:{
        fontSize:22,
        color:"white"
    }
});