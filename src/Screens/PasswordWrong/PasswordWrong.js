import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import OTPInputView from '@twotalltotems/react-native-otp-input'
export default function PasswordWrong(props) {

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
                    <Text style={styles._heading}>Hoppla!</Text>
                    <Text style={styles._sub_heading}>Prüfe, ob du den richtigen Code
                        eingegeben hast und probiere es noch
                        einmal:</Text>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._otp_main}>
                        <OTPInputView
                            style={{ width: '100%', height: 100 }}
                            pinCount={5}
                            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                            // onCodeChanged = {code => { this.setState({code})}}
                            autoFocusOnLoad
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        onCodeFilled = {(code => {
                            // console.log(`Code is ${code}, you are good to go!`)
                            {code !== "12345" ? props.navigation.navigate("PasswordWrong2") : props.navigation.navigate("Login")}
                        })}
                        />
                    </View>

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
    underlineStyleBase: {
        // width: 30,
        height: 100,
        borderWidth: 0,
        borderBottomWidth: 8,
        borderBottomColor: "#535242",
        color: "#4A95FA",
        fontSize: 50,
        fontWeight: "bold"
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
    _otp_main: {
        width: "80%",
        alignSelf: "center"
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
    }
});