import { View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import ThemeSwitchButton from "../components/ThemeSwitchButton";
import { UseTheme } from "../context/UseTheme";
import Styles from "../Styles";


export default function Settings(){
    const{isDarkMode} = UseTheme()
    return(
        <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
            <ThemeSwitchButton/>
        </View>
    )
}