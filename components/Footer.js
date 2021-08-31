import { RefreshControlBase } from "react-native";
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from "../src/utils/colors";


export default function Footer(props) {
    const { calculate } = props;
    return (
        <View style={styles.VistaFinal}>
            <TouchableOpacity style={styles.boton} onPress={calculate}>
                <Text style={styles.texto}>CALCULAR</Text>
            </TouchableOpacity>
        </View>
    );


}
const styles = StyleSheet.create({
    VistaFinal: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.PRIMARY_COLOR,
        height: 100,
        borderRadius:20,
        alignItems: 'center',
        justifyContent: 'center',
        padding:5
    },
    boton: {
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%',
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
});