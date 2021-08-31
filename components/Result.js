import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Result(props) {
    const { tamaño, tipoPago, cantidad, errorMessage, total, descuento, tipocafe } = props;
    const [tamañoText, setTamañoText] = useState("");
    const [CafeText, setCafeText] = useState("");



    useEffect(() => {
        Cafe();
    }, [tamaño, tipoPago, cantidad, total, descuento]);


    const Cafe = () => {
        reset();
        if (tamaño == 1 && tipocafe == 2) {
            setTamañoText("Short 8 onz");
            setCafeText("Mocha");
        }
        else if (tamaño == 1 && tipocafe == 2.5) {
            setTamañoText("Tall 12 onz");
            setCafeText("Té Chai");
        }
        else if (tamaño == 1 && tipocafe == 1.5) {
            setTamañoText("Grande 16 onz");
            setCafeText("Americano");
        }
        else if (tamaño == 1 && tipocafe == 3) {
            setTamañoText("Grande 16 onz");
            setCafeText("Frapper");
        }
        else if (tamaño == 1.5 && tipocafe == 2) {
            setTamañoText("Short 8 onz");
            setCafeText("Mocha");
        }
        else if (tamaño == 1.5 && tipocafe == 2.5) {
            setTamañoText("Tall 12 onz");
            setCafeText("Té Chai");
        }
        else if (tamaño == 1.5 && tipocafe == 1.5) {
            setTamañoText("Grande 16 onz");
            setCafeText("Americano");
        }
        else if (tamaño == 1.5 && tipocafe == 3) {
            setTamañoText("Grande 16 onz");
            setCafeText("Frapper");
        }
        else if (tamaño == 2 && tipocafe == 2) {
            setTamañoText("Short 8 onz");
            setCafeText("Mocha");
        }
        else if (tamaño == 2 && tipocafe == 2.5) {
            setTamañoText("Tall 12 onz");
            setCafeText("Té Chai");
        }
        else if (tamaño == 2 && tipocafe == 1.5) {
            setTamañoText("Grande 16 onz");
            setCafeText("Americano");
        }
        else if (tamaño == 2 && tipocafe == 3) {
            setTamañoText("Grande 16 onz");
            setCafeText("Frapper");
        }

    }

    const reset = () => {
        setTamañoText(null);
    };

    return (
        <View style={styles.contenido}>
            {total && (<View style={styles.Resultado}>
                <Text style={styles.Titulo}>RESUMEN</Text>
                <DataResult titulo="Cantidad solicitada:" valores={cantidad} />
                <DataResult titulo="Tamaño:" valores={tamañoText} />
                <DataResult titulo="Tipo de Café:" valores={CafeText} />
                <DataResult titulo="Descuento:" valores={`$ ${descuento.desc}`} />
                <DataResult titulo="Método de Pago:" valores={tipoPago} />
                <DataResult titulo="Total a Pagar:" valores={`$ ${total.valor}`} />

            </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}
function DataResult(props) {
    const { titulo, valores } = props;
    return (
        <View style={styles.valor}>
            <Text>{titulo}</Text>
            <Text>{valores}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    contenido: {
        marginHorizontal: 0,
        backgroundColor:'#FFF'
    },
    Resultado: {
        padding: 10,
    },
    Titulo: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    valor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    },
});