import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Password,
    Login,
    LoginErfolgreich,
    PasswordWrong,
    PasswordWrong2,
    Profile
} from './../Screens/index'
const Stack = createStackNavigator();
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Password" component={Password} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="LoginErfolgreich" component={LoginErfolgreich} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="PasswordWrong" component={PasswordWrong} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="PasswordWrong2" component={PasswordWrong2} options={{ headerShown: false }} /> */}
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;