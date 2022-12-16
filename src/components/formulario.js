import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import Resultado from './resultado'

const Formulario = () => {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [mensagemIMC, setmensgamIMC] = useState('Informe os dados')
  const [IMC, setIMC] = useState(0)
  const [textoBotao, setTextoBotao] = useState('calcular')

  function calcularIMC() {
    const imc = (peso / (altura*altura)).toFixed(2)
    setIMC(imc)
    if (imc < 18.5) {
      setmensgamIMC ('abaixo de peso')
     }else if (imc >= 18.5 && imc < 24.9){
     setmensgamIMC ('peso normal')
     }else if (imc >= 25 && imc < 29.9){
     setmensgamIMC ('sobrepeso')
     }else if (imc >= 30 && imc < 34.9){
     setmensgamIMC ('obesidade grau 1')
     }else if (imc >= 35 && imc < 39.9){
     setmensgamIMC ('obesidade grau 2')
     }else if (imc >= 40){
     setmensgamIMC ('obesidade grau 3')
     }
  
  }

  return (
    <View>
      <View>
        <Text>Altura (m)</Text>
        <TextInput
        placeholder='1.72'
        keyboardType='numeric'
        onChangeText={(altura) => setAltura(altura)}
        value={altura}
        />
        <Text>Peso (Kg)</Text>
        <TextInput
        placeholder='80.5'
        keyboardType='numeric'
        onChangeText={(peso) => setPeso(peso)}
        value={peso}
        />
        <Button title="Calcular" onPress={()=>{calcularIMC()}}/>
      </View>
      <Resultado mensagemResultadoIMC={mensagemIMC} resultadoIMC={IMC}/>
    </View>     
  )
}

export default Formulario
const styles = StyleSheet.create({})