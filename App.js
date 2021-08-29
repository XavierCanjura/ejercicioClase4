import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, SafeAreaView } from 'react-native';

const App = () => {

  const [ valor1, setValor1 ] = useState(null);
  const [ valor2, setValor2 ] = useState(null);
  const [ resultado, setResultado ] = useState(null);

  // onPress={() => {
  //   Sumar(this.state.text1,this.state.text2);
  // }}

  const Sumar = () => {
    if( (valor1 && valor2) !== null && (valor1.value.trim() && valor2.value.trim() ) !== "")
    {
      let resul = parseFloat( valor1.value ) + parseFloat( valor2.value );

      setResultado(`${ valor1.value } + ${ valor2.value } = ${ resul }`);
    }
    else
    {
      setResultado('Llene los campos');
    }
  }

  const Restar = () => {
    if( (valor1 && valor2) !== null && (valor1.value.trim() && valor2.value.trim() ) !== "")
    {
      let resul = parseFloat( valor1.value ) - parseFloat( valor2.value );

      setResultado(`${ valor1.value } - ${ valor2.value } = ${ resul }`);
    }
    else
    {
      setResultado('Llene los campos');
    }
  }

  const Multiplicar = () => {
    if( (valor1 && valor2) !== null && (valor1.value.trim() && valor2.value.trim() ) !== "")
    {
      let resul = parseFloat( valor1.value ) * parseFloat( valor2.value );

      setResultado(`${ valor1.value } x ${ valor2.value } = ${ resul }`);
    }
    else
    {
      setResultado('Llene los campos');
    }
  }

  const Dividir = () => {
    if( (valor1 && valor2) !== null && (valor1.value.trim() && valor2.value.trim() ) !== "")
    {
      if(valor2.value != 0)
      {
        let resul = parseFloat( valor1.value ) / parseFloat( valor2.value );

        setResultado(`${ valor1.value } / ${ valor2.value } = ${ resul }`);
      }
      else
      {
        setResultado('No se puede dividir entre 0');
      }
    }
    else
    {
      setResultado('Llene los campos');
    }
  }

  return (
    <SafeAreaView style={ styles.container }>
      <Text style={ styles.title }>
        Operaciones Basicas
      </Text>
    
      <TextInput
        style={ styles.input }
        placeholder="Valor 1"
        onChangeText={(value) => setValor1({value})}
        keyboardType='numeric'
      />
      <TextInput
        style={ styles.input }
        placeholder="Valor 2"
        onChangeText={(value) => setValor2({value})}
        keyboardType='numeric'
      />
    
      <View style = { styles.containterButtons }>
        <TouchableOpacity style={ styles.touchable } onPress = { Sumar } >
          <Text style={ styles.textButton }>Sumar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.touchable } onPress = { Restar } >
          <Text style={ styles.textButton }>Restar</Text>
        </TouchableOpacity>
      </View>
      <View style = { styles.containterButtons }>
        <TouchableOpacity style={ styles.touchable } onPress = { Multiplicar } >
          <Text style={ styles.textButton }>Multiplicar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.touchable } onPress = { Dividir } >
          <Text style={ styles.textButton }>Dividir</Text>
        </TouchableOpacity>
      </View>
      

      <Text style={{padding: 10, fontSize: 32}}>
        { resultado }
      </Text>
      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 10,
    fontSize: 24,
    marginTop: 15,
  },
  title: {
    padding: 15,
    fontSize: 24,
    backgroundColor:'green',
    color: 'white',
    textAlign:'center',
  },
  input: {
    height: 40,
    borderColor:'green',
    borderWidth:2,
    padding:5,
    marginTop:10,
    width: '100%',
  },
  containterButtons:{
    display: 'flex',
    flexDirection: 'row',
  },
  touchable: {
    width: '49%',
    height: 60,
    backgroundColor:'blue',
    margin: 2,
    marginTop: 5,
    justifyContent: 'center',
    alignItems:'center',
  },
  textButton: {
    color:'white',
    fontSize:24,
  },
})

export default App;