import React from "react";
import { View, StatusBar, Text, TouchableOpacity, Linking } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import Feather from 'react-native-vector-icons/dist/Feather';
import styles from "./styles";
import { Drawer } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* <==========================> --- <==========================> */}
      <View style={styles.sideMenuContainer}>
        {/* <DrawerItemList {...props} /> */}
        {/* <Drawer.Section /> */}
        {/* <==========================> --- <==========================> */}
        <TouchableOpacity style={styles._menu_icon} onPress={() => props.navigation.closeDrawer()}>
          <Ionicons name="menu" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles._line}></View>

        <DrawerItem
          label="Hilfe"
          labelStyle={{
            fontSize: 20,
            color: "white",
            marginBottom:-10
          }}
        />
        <DrawerItem
          label="Premium"
          labelStyle={{
            fontSize: 20,
            color: "white",
            marginTop:-20,
            marginBottom:-10
          }}
        />
    <DrawerItem
          label="Datenschutz"
          labelStyle={{
            fontSize: 20,
            color: "white",
            marginTop:-20
          }}
        />
         <DrawerItem
          label="Freunde empfehlen"
          labelStyle={{
            fontSize: 20,
            color: "white",
            marginTop:-20
          }}
        />
         <DrawerItem
          label="FAQ"
          labelStyle={{
            fontSize: 20,
            color: "white",
            marginTop:-20
          }}
        />
             <DrawerItem
          label="Ausloggen"
          labelStyle={{
            fontSize: 20,
            color: "#FFE96E",
            
          }}
          onPress={() => props.navigation.navigate("LogOut")}
        />
      </View>
    </DrawerContentScrollView >
  );
}