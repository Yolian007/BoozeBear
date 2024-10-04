import { View } from "react-native";
import MainStack from "./screens/MainStack";
import { Provider } from "react-redux";
import { persistor, store } from './store';
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{ flex: 1 }}>
          <MainStack />
        </View>
      </PersistGate>
    </Provider>
  );
}
