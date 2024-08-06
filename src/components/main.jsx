import React from "react";
import { Text,View } from "react-native";
import Constants from 'expo';

const Main = () => {
    return (
    <view style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
        <text>Cuaderno Digital</text>
    </view>
    )
}

export default Main