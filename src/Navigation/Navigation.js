import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Password,
  Login,
  LoginErfolgreich,
  PasswordWrong,
  PasswordWrong2,
  Profile,
  Home,
  DrawerContent,
  Registrieren,
  CoverDetail,
  SlumberTime,
  Search,
  FollowInfo,
  Premium,
  Favorites,
  Notifications,
  Pricing,
  PricingFeature,
  LogOut
} from './../Screens/index'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function HomeDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{
        width: "75%",
        height: 320,
        marginTop: 170,
        backgroundColor: "#4A95FA",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      }}
    >
      <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="CoverDetail" component={CoverDetail} options={{ headerShown: false }} />
        <Stack.Screen name="SlumberTime" component={SlumberTime} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
        <Stack.Screen name="FollowInfo" component={FollowInfo} options={{ headerShown: false }} />
        <Stack.Screen name="Premium" component={Premium} options={{ headerShown: false }} />
        <Stack.Screen name="Favorites" component={Favorites} options={{ headerShown: false }} />
        <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
        <Stack.Screen name="Pricing" component={Pricing} options={{ headerShown: false }} />
        <Stack.Screen name="PricingFeature" component={PricingFeature} options={{ headerShown: false }} />
        <Stack.Screen name="LogOut" component={LogOut} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registrieren" component={Registrieren} options={{ headerShown: false }} />
        <Stack.Screen name="Password" component={Password} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="LoginErfolgreich" component={LoginErfolgreich} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordWrong" component={PasswordWrong} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordWrong2" component={PasswordWrong2} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
  
        <Stack.Screen
          name="Home"
          component={HomeDrawer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;