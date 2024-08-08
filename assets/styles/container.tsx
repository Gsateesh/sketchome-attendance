import { StyleSheet } from "react-native"
import customData from '../colors/color-palletes.json';

export const container = StyleSheet.create({
        styles: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: customData.pagecolor
        }
});