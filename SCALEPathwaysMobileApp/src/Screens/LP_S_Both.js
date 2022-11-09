import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button, SafeAreaView, StatusBar, FlatList, Pressable} from "react-native";
import CustomInputs from "../components/CustomeInputs/CustomInputs"; // for the custom inputs 
import CustomButton from "../components/CustomeButton/CustomButton"; // for the custom button
import { useNavigation } from '@react-navigation/native'
import Search_Bar from "../components/Search_Bar/Search_Bar"
import HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";

const LP_S_Both = () => {
    
    const terms_and_classes = [
        { 
            term: 'Fall 2023',
            classes: ['CptS 101', 'CptS 102', 'CptS 103']
        },
        {
            term: 'Spring 2024',
            classes: ['CptS 104', 'CptS 105', 'CptS 106']
        }

    ]
    
    const navigation = useNavigation();

    const onReturnPressed = () => {
        console.warn('Return Pressed');
        navigation.navigate('Profile');
    };

    const onButtonPres = () => {
        Alert.alert('Check on degree details');
    };

    const oneTerm = ( {item} ) => (
        <View>
            <Text style={styles.heading}>{item.term}</Text>
            <Pressable style={styles.class_pressable}>
                    <Text style={styles.class_text}>{item.classes[0]}</Text>
            </Pressable>
            <Pressable style={styles.class_pressable}>
                    <Text style={styles.class_text}>{item.classes[1]}</Text>
            </Pressable>
            <Pressable style={styles.class_pressable}>
                    <Text style={styles.class_text}>{item.classes[2]}</Text>
            </Pressable>
        </View>
    )

    return (
        <View style={styles.view_padding}>
            <Search_Bar></Search_Bar>
            <Text style={styles.title}>Schedule</Text>
            <FlatList 
                data={terms_and_classes}
                renderItem = {oneTerm}>

                </FlatList>

            <View>
                <HamburgerMenu></HamburgerMenu>
            </View>


        </View>





    )
}

const styles = StyleSheet.create({
    view_padding: {
        paddingTop:40
    },
    root: {
        alignItems: 'center',
        padding: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#051C60",
        margin:10,
    },
    heading: {
        fontSize: 20,
        color: "#051C60",
        margin:10
    },
    text: {
        color: 'gray',
        marginVertical: 10,
        margin:8,
    },
    link: {
        color: '#FDB075',
    },
    class_pressable: {
        borderRadius: 10,
        backgroundColor: "#D9D9D9",
        flex: 1,
        padding:10,
        margin:10,
    },
    class_text: {
        fontSize:18,
        fontWeight: 'bold', 
    }
});


export default LP_S_Both;