import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { store } from './components/App/app.store.tsx'


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
    </Provider>
  
);
