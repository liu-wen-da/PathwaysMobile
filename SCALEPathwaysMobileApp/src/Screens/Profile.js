import React from "react";
import { View, Text, StyleSheet, Image, ScrollView} from "react-native";
import CustomButton from "../components/CustomeButton/CustomButton";
import Profile from "../../assets/images/profile.png";
import { useNavigation } from '@react-navigation/native';
import HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";

const ProfileScreen = () => {

    const navigation = useNavigation();

    const onReturnPressed = () => {
        console.warn('Return Pressed');
        navigation.navigate('Sign in');
    };

    const onDegreePagepressed = () => {
        console.warn('Turn to degree page');
        navigation.navigate('Degree');
    };
    
    // TODO: Have 3 seperate containers, use flex space to order our components to get consistent spacing in our buttons/navbar. 
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View styles={styles.root}>
                
                <Text style={styles.title}> User Profile </Text>
                {/* To-do: be able to edit the profile  */}
                {/* To-do: allow user to upload their profile picture  */}
                <Image source={Profile} style={[styles.logo]} />

                {/* To-do: display user's information */}
                <View styles={styles.userInfo}>
                    <Text style={styles.text}> Name： </Text>
                    <Text style={styles.text}> University: </Text>
                    <Text style={styles.text}> Email: </Text>
                    <Text style={styles.text}> Major: </Text> 
                </View>
                
                
                
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
    userInfo: {
        flex: 1,
        backgroundcolor: '#F0F0F0',
        borderBottomWidth: 1,
        borderBottomColor: '#B7B7B7',
        flexDirection: 'row'
    },
    logo: {
        width: 80,
        height: 80,
        wideth: 80,
        borderRadius: 40
    }
});

export default ProfileScreen