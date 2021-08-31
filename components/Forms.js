import React,{useState,useEffect} from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../src/utils/colors';
import InputSpinner from "react-native-input-spinner";

export default function Form(props) {
    const { setTamaño, setTipoCafe, setTipoPago,setCantidad,setNombreCafe} = props;





    return (
        <View style={styles.Formulario}>
            <View style={styles.Entradas}>
                <RNPickerSelect
                    style={picketSelectStyles}
                    onValueChange={(value) => setTamaño(value)}
                    placeholder={{
                        label: 'Tamaño del Café',
                        value: null,
                    }}
                    items={[
                        { label: 'Short 8 onz - $1', value: 1 },
                        { label: 'Tall 12 onz - $1.50', value: 1.5},
                        { label: 'Grande 16 onz - $2', value: 2 }
                    ]}
                />
            </View>

            <View style={styles.Entradas}>
                <RNPickerSelect
                    style={picketSelectStyles}
                    onValueChange={(value) => setTipoCafe(value)}
                    placeholder={{
                        label: 'Tipo del Café',
                        value: null,
                    }}
                    items={[
                        { label: 'Mocha - $2', value: 2 },
                        { label: 'Té Chai - $2.50', value: 2.5},
                        { label: 'Americano - $1.50', value: 1.5 },
                        { label: 'Frapper - $3', value: 3},
                    ]}
                />

            </View>


            <View style={styles.Entradas}>
                <RNPickerSelect
                    style={picketSelectStyles}
                    onValueChange={(value) => setTipoPago(value)}
                    placeholder={{
                        label: 'Tipo de Pago',
                        value: null,
                    }}
                    items={[
                        { label: 'Efectivo', value: "efectivo" },
                        { label: 'Tajeta de Credito', value: "tarjeta" }
                    ]}

                />
            </View>
            <View style={styles.Entradas}> 
            <InputSpinner max={25} min={0} step={1} color={"#E5AA63"} onChange={value => setCantidad(value)} />
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    Formulario: {
        bottom: 5,
        width: '80%',
        padding: 20,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        flexDirection:'column',
        flex:1,
        justifyContent: 'space-between'
        
    },
    Entradas: {
        backgroundColor: colors.PRIMARY_COLOR_DARk,
        padding: 10,
        borderRadius: 10,
        alignItems:'center'

    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,
    },
    inputPercentage: {
        width: '40%',
        marginLeft: 5,
    },
});
const picketSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
        marginLeft: -5,
        marginRight: -5,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
    },
});