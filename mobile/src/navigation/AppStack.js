import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ChatScreen from "../screens/ChatScreen";
import MessageScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();

const AppStack = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen name="Messages" component={MessageScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} options={({route}) => ({
            title: route.params.userName,
            headerBackTitleVisible: false,
        })} />
    </Stack.Navigator>
);

export default AppStack;