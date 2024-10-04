import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import Agregar from "../Componentes/Btn_Agregar";
import Informacion from '../Componentes/Modal_info'
import asks from "../database/Preguntas_YoNunca.json"

const Screen_YoNunca = ({navigation}) => {

    // Aqui esta la seleccion de la pregunta
  const [currentQuestion, setCurrentQuestion] = useState()
  const [level, setLevel] = useState("Nunca");
  const AsksYoNunca = asks.AsksYoNunca.filter((ask) => ask.category === level);
  const muestraYoNunca = () => {
    const random = Math.floor(Math.random() * AsksYoNunca.length);
    setCurrentQuestion(AsksYoNunca[random]?.name);
  }

  //Llega hasta aqui

  const [view, setView] = useState(false)

  return(

//Botones superiores
    
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
      <Agregar
        text='Inicio'
        onPress={() => { navigation.navigate('Screen_Home') }}
      />
      <Agregar
        text='Información'
        onPress={() => { setView(true); }}
      />

    </View>


      <View
        style = {style.content}
      >

        <View
          style={{
            alignContent: 'center',
            alignItems: 'center'
            }}

          >
            <Text>
              Pregunta
            </Text>

            <Text>
              {currentQuestion}
            </Text>

          </View>

          <View
          style={{
            flexDirection: 'row'
            }}
        >
          <Agregar
            text='Next'
            onPress={muestraYoNunca}
          />
        </View>
      </View>

    </View>
    )

}

export default Screen_YoNunca;

const style = StyleSheet.create({
 // Estilo de la parte inferior (Boton, preguntas y el heder verde)
  content: {
    flexDirection: "column",
    marginTop: 10,
    width: '100%',
    backgroundColor: '#17B862',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Estilo de la parte superior (inicio e informacion)
  superior: {
    marginTop: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",}

})