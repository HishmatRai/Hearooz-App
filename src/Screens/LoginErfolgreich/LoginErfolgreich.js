import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function LoginErfolgreich(props) {
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
                <TouchableOpacity style={styles._back_btn} onPress={() => props.navigation.goBack()}>
                    <Ionicons name="close" size={30} color="#535242" />
                </TouchableOpacity>
            </View>
            {/* <==========================> --- <==========================> */}
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* <==========================> --- <==========================> */}
                <View style={styles._main}>
                    <Image
                        source={require("./../../Img/sucess.png")}
                        style={styles._sucess_Img}
                    />
                    <Text style={styles._heading}>Login erfolgreich!</Text>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._los_btn} onPress={()=> props.navigation.navigate("Home")}>
                        <Text style={styles._los_btn_text}>Lass uns gehen</Text>
                    </TouchableOpacity>

                    {/* <==========================> --- <==========================> */}

                    <Image
                        source={require("./../../Img/loginImg.png")}
                        style={styles._footer_Img}
                    />

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
    _heading: {
        textAlign: "center",
        color: "#22DBB7",
        fontSize: 24,
        fontWeight: "bold",
        marginTop:20
    },

    _los_btn: {
        backgroundColor: "#4A95FA",
        width: "80%",
        marginTop: 50,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 50,
        height: 50,
        marginBottom: 10
    },
    _los_btn_text: {
        fontSize: 24,
        color: "white",
        textAlign: "center"
    },
    _footer_Img: {
        width: "100%",
        marginTop: 50
    },
    _sucess_Img: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: 142,
        height: 142,
        borderRadius:142/2
    }
});