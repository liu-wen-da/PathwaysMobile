import React from "react";
import { View, Text, StyleSheet, Pressable} from "react-native";


const CustomButton_Forgot_Password= ({ onPress, text, type = "PRIMARY" }) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 5,
        marginVertical: 5,
        alignItems: 'center',
    },
    text_TERTIARY: {
        color: 'Black',
    },

});

export default CustomButton_Forgot_Password