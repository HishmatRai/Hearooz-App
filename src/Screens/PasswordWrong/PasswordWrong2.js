import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function PasswordWrong2(props) {

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
                    <Text style={styles._heading}>Etwas ist schief gelaufen.</Text>
                    <Text style={styles._sub_heading}>Das hat nicht geklappt.
                        Bitte gib aus Sicherheitsgründen deine
                        Emailadresse erneut ein.</Text>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._los_btn}>
                        <Text style={styles._los_btn_text}>Zurück</Text>
                    </TouchableOpacity>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._Keine_Mail_main}>
                        <Text style={styles._Keine_Mail_title}>
                            Keine Mail erhalten?
                        </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                            <Text style={styles._Keine_Mail_btn_text}> Erneut senden!</Text>
                        </TouchableOpacity>
                    </View>

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
        color: "#FD6387",
        fontSize: 24,
        fontWeight: "bold"
    },
    _sub_heading: {
        marginHorizontal: 32,
        textAlign: "center",
        fontSize: 18,
        color: "#FD6387",
        marginTop: 10
    },
    _Keine_Mail_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    _Keine_Mail_title: {
        color: "#535242",
        fontSize: 16
    },
    _Keine_Mail_btn_text: {
        color: "#535242",
        fontSize: 16,
        fontWeight: "bold"
    },
    _footer_Img: {
        width: "100%",
        marginTop: 50
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
});