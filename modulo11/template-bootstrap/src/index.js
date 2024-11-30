import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importando estilos globais
import App from './App'; // Importando o componente principal da aplicação
import reportWebVitals from './reportWebVitals'; // Importando para medir performance
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando Bootstrap para estilos

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Função para medir a performance da aplicação
reportWebVitals(console.log); // Logando os resultados de performance
