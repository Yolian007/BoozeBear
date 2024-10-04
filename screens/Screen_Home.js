import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Agregar from '../Componentes/Btn_Agregar'
import Btns_Categorias from '../Componentes/Btn_Categorias';
import { Button } from 'react-native-web'
import { BaseButton, RawButton } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/game'


const Screen_Home = ({ navigation }) => {
  const value = useSelector((state) => state.game.value)
  const dispatch = useDispatch()
  const onPress1 = () => {
    dispatch(increment(50))
  }
  const onPress2 = () => {
    dispatch(decrement(2))
  }
  return (

    <View style={{ flex: 1 }}>

      <View style={styles.inicio}>
        <Image source={require('../img/React.png')} style={styles.img} />
        <Agregar
          text="Agregar"
          onPress={() => { navigation.navigate('Personas') }}
        />
        <StatusBar style="auto" />
      </View>

      <View style={styles.content}>
        <Btns_Categorias />
        <StatusBar style="auto" />
      </View>

      <TouchableOpacity onPress={onPress1}  >
        <Text>Press Incrementar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress2}  >
        <Text>Press Decrementar</Text>
      </TouchableOpacity>
      <Text>{`valor: ${value}`}</Text>

    </View>
  )
}

export default Screen_Home

const styles = StyleSheet.create({
  Text: {
    backgroundColor: 'yellow',
  },
  content: {
    flexDirection: "column",
    marginTop: 10,
    width: '100%',
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inicio: {
    marginTop: 30,
    paddingHorizontal: 7,
    backgroundColor: 'orange',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
  },
  img: {
    height: 75,
    width: 75,
    marginStart: 1,
    resizeMode: 'contain',
  }
});