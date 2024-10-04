import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Principal from '../Componentes/Btn_Principal'
import QEM from '../Componentes/Btn_QEM'
import Agregar from '../Componentes/Btn_Agregar'
import Informacion from '../Componentes/Modal_info'
import asks from '../database/Preguntas_QuienEsMas.json'

const Screen_QuienEsMas = ({ navigation }) => {

  // Aqui esta la seleccion de la pregunta

  const [currentQuestion, setCurrentQuestion] = useState();
  const [level, setLevel] = useState("Quien");
  const asksQuienEsMas = asks.asksQuienEsMas.filter((ask) => ask.category === level);
  const muestraQuienEsMas = () => {
    const random = Math.floor(Math.random() * asksQuienEsMas.length);
    setCurrentQuestion(asksQuienEsMas[random]?.name);
  }

  const [view, setView] = useState(false)

  return (

    <View
      style={{ flex: 1 }}
    >
      <Informacion
        view={view}
        setView={setView}
        text='En la pantalla saldrá el nombre de cada jugador con su respectivo reto o verdad, al terminar dale click  al boton de verdad o reto para que el siguiente jugador lo cumpla.'
      />
      <View
        style={style.superior}
      >
        <Principal
          text='Inicio'
          onPress={() => { navigation.navigate('Screen_Home') }}
          styleType="buttonQEM"
        />
        <Principal
          text='¿?'
          onPress={() => { setView(true); }}
          styleType="buttonQEM"
        />
      </View>


      <View
        style={style.content}
      >
        <View
          height="30%"
          width="90%"
          style={{
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: "center",
            backgroundColor: "#e2d8e4",
            marginTop: 145,
            borderRadius: 30
          }}
        >

          <Text
            style={{
              fontSize: 27,
              textAlign: "center",
              fontWeight: 'bold',
            }}
          >
            {currentQuestion}
          </Text>
        </View>

        <QEM
          text="Siguiente"
          onPress={muestraQuienEsMas}
        />
      </View>
    </View>
  )
}

export default Screen_QuienEsMas

const style = StyleSheet.create({
  superior: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: "#683475",
  },
  content: {
    flexDirection: "column",
    width: '100%',
    height: "100%",
    backgroundColor: '#683475',
    alignItems: 'center',
  }
});