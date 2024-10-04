import React, { useState } from 'react'
import { View, Modal, Text, TouchableOpacity } from 'react-native'

const Informacion = (props) => {

    const { text, view, setView } = props

    return (
        <Modal
            animationType='slide' //fade, none o slite
            onDismiss={() => console.log('close')}
            onShow={() => console.log('show')}
            transparent
            visible={view}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(1,1,1,0.5)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <View
                    style={{
                        height: '80%',
                        width: '90%',
                        backgroundColor: '#FFF',
                    }}
                >

                    <View
                        style={{
                            height: 40,
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            paddingHorizontal: 10,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => setView(false)}
                        >
                            <Text>
                                Cerrar
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <View
                        style={{
                            flexDirection: 'column'
                        }}
                    >
                        <Text
                            style={{
                                alignContent: 'center',
                                marginTop: 20,
                                marginHorizontal: 20,
                                backgroundColor: 'blue',
                            }}
                        >
                            {text}
                        </Text>
                    </View>

                </View>
            </View>
        </Modal>
    )
}

export default Informacion