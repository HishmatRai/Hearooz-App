import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function Login(props) {
    const [email, onChangeEmail] = React.useState("timo@foxandsheep.com");

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
                    <Text style={styles._heading}>Einloggen</Text>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._input_main}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            value={email}
                            placeholder="timo@foxandsheep.com"
                            placeholderTextColor="#4A95FA"
                            color="#4A95FA"
                        />
                        {email !== "" ?
                            <Ionicons name="checkmark-sharp" size={40} color="#22DBB7" />
                            : null
                        }
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <TouchableOpacity style={styles._los_btn} onPress={()=> props.navigation.navigate("LoginErfolgreich")}>
                        <Text style={styles._los_btn_text}>Los geht's</Text>
                    </TouchableOpacity>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._Keine_Mail_main}>
                        <Text style={styles._Keine_Mail_title}>
                            Keine Mail erhalten?
                        </Text>
                        <TouchableOpacity>
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
        color: "#535242",
        fontSize: 24,
        fontWeight: "bold"
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
    _input_main: {
        width: "70%",
        borderBottomWidth: 3,
        borderBottomColor: "#22DBB7",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20
    },
    input: {
        paddingHorizontal: 10,
        fontSize: 18,
        fontWeight: "bold"
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
    }
});