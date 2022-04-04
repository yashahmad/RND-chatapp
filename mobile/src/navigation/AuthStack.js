import React, { useState, useEffect } from "react";
import {createStackNavigator} from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const AuthStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{header: () => null}}/>
            <Stack.Screen name="Signup" component={SignupScreen} options={{header: () => null}}/>
        </Stack.Navigator>

    )
};

export default AuthStack;