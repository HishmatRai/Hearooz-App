import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function Profile(props) {
    return (
        <View style={styles.container}>

            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="white"
                hidden={true}
                backgroundColor="white"
                translucent={true}
            />

            {/* <==========================> --- <==========================> */}
            <View style={styles._header_main}>
                <TouchableOpacity style={styles._back_btn} onPress={() => props.navigation.goBack()}>
                    <Ionicons name="chevron-back" size={30} color="#535242" />
                </TouchableOpacity>
                <TouchableOpacity style={styles._back_btn}>
                    <Ionicons name="md-settings-sharp" size={30} color="#4A95FA" />
                </TouchableOpacity>
            </View>
            {/* <==========================> --- <==========================> */}
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* <==========================> --- <==========================> */}
                <View style={styles._main}>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._Ronaldo_btn} onPress={() => props.navigation.navigate("Home")}>
                        <Image
                            source={require("./../../Img/Ronaldo.png")}
                            style={styles._Ronaldo_Img}
                        />
                    </TouchableOpacity>
                    <Text style={styles._heading}>Ronaldo</Text>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._Ronaldo_btn} onPress={() => props.navigation.navigate("Home")}>
                        <Image
                            source={require("./../../Img/Leonie.png")}
                            style={styles._Ronaldo_Img}
                        />
                    </TouchableOpacity>
                    <Text style={styles._heading}>Leonie</Text>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._Ronaldo_btn} onPress={() => props.navigation.navigate("Home")}>
                        <Image
                            source={require("./../../Img/Sepp.png")}
                            style={styles._Ronaldo_Img}
                        />
                    </TouchableOpacity>
                    <Text style={styles._heading}>Sepp</Text>

                    {/* <==========================> --- <==========================> */}

                    {/* <Image
                        source={require("./../../Img/loginImg.png")}
                        style={styles._footer_Img}
                    /> */}

                    <ImageBackground
                        source={require("./../../Img/loginImgBG.png")}
                        style={styles._image}
                    >
                        <TouchableOpacity onPress={() => props.navigation.navigate("LogOut")}>
                        <Text style={styles._heading2}>Ausloggen</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    _header_main: {
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _back_btn: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40 / 2,
    },
    _footer_Img: {
        width: "100%",
        marginTop: 50
    },
    _Ronaldo_btn: {
        alignSelf: "center",
        marginTop: 20
    },
    _heading: {
        fontSize: 21,
        color: "#535242",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 10
    },
    _image: {
        flex: 1,
        resizeMode: "cover",
        height: "100%",
        flex: 1
    },
    _heading2: {
        fontSize: 21,
        fontWeight: "bold",
        color: 'white',
        textAlign: "center",
        marginTop: 50,
        marginBottom: 20,


    }
});