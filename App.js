import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import colors from './src/utils/colors';
import Form from './components/Forms';
import Footer from './components/Footer';
import Result from './components/Result';

export default function App() {
  const [tamaño, setTamaño] = useState(null);
  const [tipocafe, setTipoCafe] = useState(null);
  const [tipoPago, setTipoPago] = useState("");
  const [cantidad, setCantidad] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [total, setTotal] = useState(null);
  const [descuento, setDescuento] = useState(null);



  useEffect(() => {
    if (tamaño && tipocafe && tipoPago && cantidad) {
      calculate();
    }
    else reset();
  }, [tamaño, tipocafe, tipoPago, cantidad]);

  const calculate = () => {
    reset();
    if (!tamaño) {
      setErrorMessage('Elige un Tamaño');
    } else if (!tipocafe) {
      setErrorMessage('Elige un Tipo de Café');
    }
    else if (!tipoPago) {
      setErrorMessage('Selecciona un Método de Pago');
    }
    else if (!cantidad) {
      setErrorMessage('Selecciona la Cantidad');
    }
    else {
      if (tipoPago == "efectivo") {
        const porcentaje5 = 0.15;
        const descuento = (tamaño + tipocafe) * (cantidad) * (porcentaje5);
        setDescuento({
          desc: descuento.toFixed(2).replace('.', ','),
        })
        const t = (tamaño + tipocafe) * (cantidad) - descuento;
        setTotal({
          valor: t.toFixed(2).replace('.', ','),
        });
      }
      else if (tipoPago == "tarjeta") {
        const porcentaje5 = 0.05;
        const descuento = (tamaño + tipocafe) * (cantidad) * (porcentaje5);
        setDescuento({
          desc: descuento.toFixed(2).replace('.', ','),
        })
        const t = (tamaño + tipocafe) * (cantidad) - descuento;
        setTotal({
          valor: t.toFixed(2).replace('.', ','),
        });
      }


    }
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };



  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.Cabecera}>
        <View style={styles.AlinearLogo}>

          <Text style={styles.cabeceraApp}>Cafe Bosco  </Text>
          <Image style={styles.Logo} source={{ uri: 'https://cdn.pixabay.com/photo/2018/03/11/17/36/coffee-3217471_1280.png' }}></Image>
        </View>

        <Form
          setTamaño={setTamaño}
          setTipoCafe={setTipoCafe}
          setTipoPago={setTipoPago}
          setCantidad={setCantidad}
        />
      </SafeAreaView>
      <Result
        tamaño={tamaño}
        tipoPago={tipoPago}
        cantidad={cantidad}
        errorMessage={errorMessage}
        total={total}
        descuento={descuento}
        tipocafe={tipocafe}
      />
      <Footer
        calculate={calculate}
      />
    </>
  );
}

const styles = StyleSheet.create({
  Cabecera: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 400,
    alignItems: 'center'
  },
  cabeceraApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  Logo: {
    width: 50,
    height: 50,
  },
  AlinearLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

});


