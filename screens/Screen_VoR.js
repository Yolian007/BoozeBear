import React, { useState } from 'react'
import { View, StyleSheet, Text, } from 'react-native'
import Principal from '../Componentes/Btn_Principal'
import VoR from '../Componentes/Btn_VoR'
import Informacion from '../Componentes/Modal_info'
import asks from '../database/Preguntas_VoR.json'

const Screen_VoR = ({ navigation }) => {

    // comentario racista
    //otro comentario racista

    const [currentQuestion, setCurrentQuestion] = useState();
    const [level, setLevel] = useState("Hot");
    const asksVerdad = asks.asksVerdad.filter((ask) => ask.category === level);
    const asksReto = asks.asksReto.filter((ask) => ask.category === level);
    const muestreVerdad = () => {
        const random = Math.floor(Math.random() * asksVerdad.length);
        setCurrentQuestion(asksVerdad[random]?.name);
    };
    const muestreReto = () => {
        const random = Math.floor(Math.random() * asksReto.length);
        setCurrentQuestion(asksReto[random]?.name);
    };


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
                    styleType="buttonVoR"
                />
                <Principal
                    text='¿?'
                    onPress={() => { setView(true); }}
                    styleType="buttonVoR"
                />
            </View>

            <View
                style={style.contenido}
            >
                <View
                    style={{
                        alignContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{
                        marginTop: 135,
                        fontSize: 42,
                        textTransform: 'uppercase',
                        letterSpacing: 3,
                        fontWeight: 'bold',
                    }}>
                        JESUS
                    </Text>
                    <View
                        style={{
                            backgroundColor: "#ffffff",
                            borderColor: "#660000",
                            borderRadius: 30,
                            borderWidth: 1,
                            width: '90%',
                            height: 125,
                            alignContent: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text
                            style={{
                                marginHorizontal: 10,
                                marginVertical: 10,
                                fontSize: 20,
                                fontWeight: 'bold',
                                textAlign: "center",
                            }}
                        >
                            {currentQuestion}
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        marginTop: 30,
                        alignContent: 'center',
                        alignItems: 'center',
                        width: '63%',
                        backgroundColor: "#cc0000",
                        borderRadius: 30,
                    }}
                >
                    <Text
                        style={{
                            marginTop: 10,
                            fontSize: 20,
                            color: "#ffffff",
                            fontWeight: 'bold',
                        }}
                    >
                        Siguiente: Judas
                    </Text>
                    <View
                        style={{
                            justifyContent: "space-between",
                            flexDirection: 'row',
                        }}
                    >
                        <VoR
                            text='Verdad'
                            onPress={muestreVerdad}
                        />
                        <VoR
                            text='Reto'
                            onPress={muestreReto}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Screen_VoR

const style = StyleSheet.create({
    superior: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: "#fddeda",
    },
    contenido: {
        flexDirection: "column",
        width: '100%',
        height: "100%",
        backgroundColor: "#fddeda",
        alignItems: 'center',
    }
});