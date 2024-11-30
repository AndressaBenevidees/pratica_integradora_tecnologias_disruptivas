import React from "react";
import Header from './components/header'; // use 'header' em minúsculas
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import './App.css'; // Importando o CSS para estilização

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ListarTarefa />
      </main>
    </div>
  );
}

export default App;
