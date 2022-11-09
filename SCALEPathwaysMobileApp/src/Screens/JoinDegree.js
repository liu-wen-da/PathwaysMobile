import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, Button, Alert} from "react-native";
import Search_Bar from "../components/Search_Bar/Search_Bar";
import CustomButton from "../components/CustomeButton/CustomButton";
import { useNavigation } from '@react-navigation/native';
import HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";

const DegreeScreen = () => {

    const navigation = useNavigation();

    const onReturnPressed = () => {
        console.warn('Return Pressed');
        navigation.navigate('Profile');
    };

    const onButtonPres = () => {
        Alert.alert('Check on degree details');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View styles={styles.root}>
                <Search_Bar></Search_Bar>

                <Text style={styles.title}> Degree </Text>
                <Button
                disabled
                title="Computer Science(BS)"
                onPress = {onButtonPres}
                color = "#841584"
                ></Button>

                <Button
                disabled
                title="Software Engineering(BS)"
                onPress = {onButtonPres}
                color = "#841584"
                ></Button>

                <Button
                disabled
                title="Data Mining(BS)"
                onPress = {onButtonPres}
                color = "#841584"
                ></Button>

                
                
            </View>
            <HamburgerMenu></HamburgerMenu>
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

export default DegreeScreen