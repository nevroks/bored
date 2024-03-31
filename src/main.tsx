import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import store, {persistor} from "./store/store.ts";
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Provider store={store}>
            <PersistGate loading={<h2>Синхронизация...</h2>} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>
)
