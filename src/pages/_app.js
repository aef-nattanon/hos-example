import '@/styles/globals.css'
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import store from "../store";

export default function MyApp({ Component, pageProps }) {

  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={<>loading.........</>} persistor={persistor}>
        <Component {...pageProps} />
        </PersistGate>
    </Provider>
  )
}
