import React, { useState, useContext } from "react";
import { Text, Image, StyleSheet, ScrollView } from "react-native";

import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { AuthContext } from "../navigation/AuthProvider";

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState();

    const {user,setUser} = useContext(AuthContext);

    const handleSignup = () => {
      setUser("email");
      console.log("Email",email,user);
    }

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require("../../assets/rn-social-logo.png")} style={styles.logo} />
            <Text>Chattr App</Text>

            <FormInput labelValue={email} onChangeText={(userEmail) => setEmail(userEmail)} placeholderText="Email" iconType="user" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} />

            <FormButton buttonTitle="Signup" onPress={handleSignup} />
        </ScrollView>
    )
}


export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
});
