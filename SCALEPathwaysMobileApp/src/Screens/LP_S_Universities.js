import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView} from "react-native";
import CustomInputs from "../components/CustomeInputs/CustomInputs"; // for the custom inputs 
import CustomButton from "../components/CustomeButton/CustomButton"; // for the custom button
import { useNavigation } from '@react-navigation/native';
import  HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";

const LandingPage_S_Universities = () => {

    const navigation = useNavigation();

 

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View styles={styles.root}>

                <Text style={styles.title}>  Landing Page Screen </Text>

                
                
                <HamburgerMenu></HamburgerMenu>
                
            </View>
            
            <View>
                <HamburgerMenu></HamburgerMenu>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#051C60",
        margin:10,
        marginVertical: 50,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
        margin:8,
    },
    link: {
        color: '#FDB075',
    },
});

export default LandingPage_S_Universities;
