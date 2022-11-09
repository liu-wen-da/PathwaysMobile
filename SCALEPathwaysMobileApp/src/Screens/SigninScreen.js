import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput, Button, Pressable} from "react-native";
import Logo from "../../assets/images/scale.png";
import CustomButton_Forgot_Password from "../components/CustomeButton/CustomButton_Forgot_Password";
import CustomButton_Create_Account from "../components/CustomeButton/CustomButton_Create_Account";
import { useNavigation } from '@react-navigation/native';
import { Validator } from 'email-validator';
import HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";

const SigninScreen = () => {


    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    

    // tells me the sign in button was pressed
    const onSignInPressed = () => {
        console.warn('Sign in');    
        navigation.navigate('Landing Page');
    };

    // tells me the forgot password button was pressed
    const onForgotPasswordPressed = () => {
        console.warn('Forgot Password');
        navigation.navigate('Forgot Password');
    };

    // tells me the sign up button was pressed
    const onSignUpPressed = () => {
        console.warn('Sign Up');
        navigation.navigate('Sign up');
    };

    return (
        <View style = {styles.mainbackground}> 
            <View style>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={Logo} style={[styles.logo]} />
                    <View style={styles.warraper}>
                        
                        <View style = {styles.wrapper_white}>
                        
                            <View style={styles.inputField}>  
                            
                                <TextInput
                                    placeholderTextColor={'#444'}
                                    placeholder="Username"
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    authFocus={true}
                                />
                            </View>
                            <View style={styles.inputField}>  
                            
                                <TextInput
                                    placeholderTextColor={'#444'}
                                    placeholder="Password"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    secureTextEntry={true}
                                    textContentType="password"
                                />
                            </View>

                            <View style ={styles.inputFieldSignin}>
                                <Button title="Sign In" onPress={onSignInPressed} />
                            </View>

                            
                            <View>
                                <CustomButton_Forgot_Password text="Forgot Password" onPress={onForgotPasswordPressed} type="TERTIARY" /> 
                            </View>
                            
                        </View>


                        <View>
                            <CustomButton_Create_Account text="Create Account" onPress={onSignUpPressed} type="TERTIARY" />
                        </View>

                        
                            
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    logo: {
        width: '85%',
        maxHeight: 300,
        maxWidth: 300,
        marginVertical: 40,
        marginHorizontal: 45,
    },
    inputField: {
        borderRadius : 4,
        padding : 6,
        backgroundColor : '#ffffff',
        marginBottom : 10,
        borderWidth : 1,
        dropShadow : 1,
    },
    inputFieldSignin: {
        borderRadius : 4,
        padding : 6,
        dropShadow : 1,
    },
    warraper: {
       marginTop: 80,
       margin: 20,
    },
    button: {
        backgroundColor: '#0096F6',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 17,
        frontWeight: 'bold',
    },
    mainbackground: {
        backgroundColor: '#494D53',
        
    },
    wrapper_white: {
        backgroundColor: '#ffffff',
        padding: 12,
        borderRadius: 20,
        dropShadow: 1,
    },
    background: {
        backgroundColor: '#ffffff',
        
    },
    
});

export default SigninScreen