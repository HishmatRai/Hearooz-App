import React from "react";
import { View, StatusBar, Text, TouchableOpacity,Linking  } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import Feather from 'react-native-vector-icons/dist/Feather';
import styles from "./styles";
import { Drawer } from "react-native-paper";
export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* <==========================> --- <==========================> */}
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      />
      <View style={styles.sideMenuContainer}>
        {/* <DrawerItemList {...props} /> */}
        <Drawer.Section />
        {/* <==========================> --- <==========================> */}
    
          <View style={styles._drawer_profile_main}>
            <Text style={styles._user_name}>Hishmat Rai</Text>
          </View>
        <DrawerItem
          label="Onboarding"
          labelStyle={{
            fontWeight: "bold",
            fontSize: 18,
            color: "red"
          }}
        />


        <Text style={styles._version}>Version:1.0.4</Text>
      </View>
    </DrawerContentScrollView >
  );
}