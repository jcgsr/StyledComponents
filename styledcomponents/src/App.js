import React from 'react';
import { Container, Head, Titulo, BemVindo } from './styles';

function App() {
    return (
      <Container >
        <Head>
          <Titulo>Projeto Styled!</Titulo>
        </Head>

        <BemVindo cor="00ff00" tamanho={40}>Bem-vindo, Styled!</BemVindo>

      </Container>
    );
  }

export default App;

/*
Estilo com CSS normal} ↓

function App() {
  return (
    <div className="container">
      <header className="header">
        <a className="titulo">Projeto Styled</a>
      </header>
      <h1>Bem-vindo!</h1>
    </div>
  );
}
*/