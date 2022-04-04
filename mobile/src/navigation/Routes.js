import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./AuthProvider";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

const Routes = () => {
    const { user, setUser } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack />}
            {console.log(user)}
        </NavigationContainer>
    );
};

export default Routes;