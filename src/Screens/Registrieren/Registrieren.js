import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity, Image, TextInput, Linking } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
export default function Login(props) {
    const [email, onChangeEmail] = React.useState("");
    const [remember, setRemember] = useState(true);
    const [remember2, setRemember2] = useState(true);

    return (
        <View style={styles.container}>

            {/* <==========================> --- <==========================> */}
            <StatusBar
                barStyle="white"
                hidden={true}
                backgroundColor="white"
                translucent={true}
            />
            <TouchableOpacity style={styles._cross_icon}>
                <Entypo name="cross" size={34} color="#535242" />
            </TouchableOpacity>
            {/* <==========================> --- <==========================> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles._main}>
                    <Text style={styles._heading}>Account anlegen</Text>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._input_main}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            value={email}
                            placeholder="Deine E-Mail-Adresse"
                            placeholderTextColor="#B7B7B7"
                            color="#4A95FA"
                        />
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <View style={styles._remember_main}>
                        {remember ? (
                            <TouchableOpacity onPress={() => setRemember(!remember)} style={styles._un_selected}>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={() => setRemember(!remember)} style={styles._selected}>
                                <View style={styles._selected2}></View>
                            </TouchableOpacity>
                        )}

                        <View style={styles._remember_data_main}>
                            <View style={styles._remember_data}>
                                <Text style={styles._remember_data_text}>Ich akzeptiere die </Text>
                                <TouchableOpacity style={styles._remember_data_btn}>
                                    <Text style={styles._remember_data_btn_text}>Datenschutzbestimmungen</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles._remember_data}>
                                <Text style={styles._remember_data_text}>und </Text>
                                <TouchableOpacity style={styles._remember_data_btn}>
                                    <Text style={styles._remember_data_btn_text}>Allgemeinen Geschäftsbedingungen.</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    <View style={styles._remember_main2}>
                        {remember2 ? (
                            <TouchableOpacity onPress={() => setRemember2(!remember2)} style={styles._un_selected}>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={() => setRemember2(!remember2)} style={styles._selected}>
                                <View style={styles._selected2}></View>
                            </TouchableOpacity>
                        )}

                        <View style={styles._remember_data_main2}>
                            <View style={styles._remember_data}>
                                <Text style={styles._remember_data_text}>Ich möchte Infos zu Neuigkeiten und Aktionen{"\n"}
                                    per Email erhalten.</Text>

                            </View>
                        </View>
                    </View>
                    {/* <==========================> --- <==========================> */}
                    {email === "" ?
                        <View style={styles._lets_go_btn} >
                            <Text style={styles._lets_go_btn_text}>Los geht's</Text>
                        </View>
                        : <TouchableOpacity style={styles._lets_go_btn_visible} >
                            <Text style={styles._lets_go_btn_text}>Los geht's</Text>
                        </TouchableOpacity>}
                    {/* <==========================> --- <==========================> */}
                    <View style={styles._login}>
                        <Text style={styles._remember_data_text}>Bereits registriert? </Text>
                        <TouchableOpacity>
                            <Text style={styles._remember_data_btn_text}>Zum Login!</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <==========================> --- <==========================> */}
                    <Image
                        source={require("./../../Img/Registrieren.png")}
                        style={styles._footer_img}
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
    _cross_icon: {
        marginVertical: 20,
        marginHorizontal: 20,
        alignSelf: "flex-end",
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    _main: {
        padding: 0,
        margin: 0
    },
    _heading: {
        fontSize: 24,
        color: "#535242",
        textAlign: "center",
        fontWeight: "bold"
    },
    _input_main: {
        width: "70%",
        alignSelf: "center",
        borderBottomWidth: 3,
        borderBottomColor: "#707070"
    },
    input: {
        paddingHorizontal: 20,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    _un_selected: {
        borderWidth: 3,
        borderColor: "#707070",
        width: 20,
        height: 20,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center"
    },
    _selected: {
        borderWidth: 3,
        borderColor: "#22DBB7",
        width: 20,
        height: 20,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center"
    },
    _selected2: {
        backgroundColor: "#22DBB7",
        width: 8,
        height: 8
    },
    _remember_main: {
        flexDirection: "row",
        marginTop: 50,
        margin: 20,
    },
    _remember_main2: {
        flexDirection: "row",
        marginTop: 10,
        margin: 20,
    },
    _remember_data_main: {
        marginLeft: 10
    },
    _remember_data_main2: {
        marginLeft: 10
    },
    _remember_data: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"

    },
    _remember_data_text: {
        fontSize: 15,
        color: "#535242",
        textAlign: "center"

    },
    _remember_data_btn_text: {
        fontSize: 15,
        color: "#535242",
        fontWeight: "bold"
    },
    _remember_data_btn: {
        borderBottomColor: "#535242",
        borderBottomWidth: 1
    },
    _lets_go_btn: {
        backgroundColor: "#B7B7B7",
        height: 50,
        width: "80%",
        borderRadius: 50,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    _lets_go_btn_visible:{
        backgroundColor: "#4A95FA",
        height: 50,
        width: "80%",
        borderRadius: 50,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    _lets_go_btn_text: {
        color: 'white',
        fontSize: 24,
        fontWeight: "bold"
    },
    _login: {
        marginTop: 20,
        alignItems: "center",
        flexDirection: "row",
        alignSelf: "center"
    },
    _footer_img: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: "100%"
    }
});