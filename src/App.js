import React from "react";

import { GlobalStyle, Container } from "./style.js"

import { Form } from "./components/Form/Form"

import { AuthContext } from "./context/AuthContext"

function App() {
  return (
    <AuthContext>
      <Container>
        <GlobalStyle />
        <Form />
      </Container>
    </AuthContext>
  );
}

export default App;
