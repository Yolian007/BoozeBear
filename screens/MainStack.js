import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen_Home from "./Screen_Home";
import Screen_Informacion from "./Screen_Informacion";
import Screen_VoR from "./Screen_VoR";
import Screen_QuienEsMas from "./Screen_QuienEsMas";
import Screen_YoNunca from "./Screen_YoNunca";
import Personas from "./Personas";

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false, //Esconde el titulo  del stack en la parte superior de la pantalla
                }}
            >
                <Stack.Screen name="Screen_Home" component={Screen_Home} />
                <Stack.Screen
                    name="Screen_Informacion"
                    component={Screen_Informacion}
                />
                <Stack.Screen name="Screen_VoR" component={Screen_VoR} />
                <Stack.Screen name="Screen_QuienEsMas" component={Screen_QuienEsMas} />
                <Stack.Screen name="Screen_YoNunca" component={Screen_YoNunca} />
                <Stack.Screen name="Personas" component={Personas} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack;