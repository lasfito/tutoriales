import React, { useState } from "react";
import { Stack, Container, Form, Button } from "react-bootstrap";

import firebaseApp from "../credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const Logueo = () => {
  const [estaRegistrandose, setEstaRegistrandose] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    const correo = e.target.formBasicEmail.value;
    const contra = e.target.formBasicPassword.value;

    if (estaRegistrandose) {
      //si se registra
      const usuario = await createUserWithEmailAndPassword(
        auth,
        correo,
        contra
      );
    } else {
      // si está iniciando sesión
      signInWithEmailAndPassword(auth, correo, contra);
    }
  }

  return (
    <Container>
      <Stack gap={3}>
        <h1>{estaRegistrandose ? "Regístrate" : "inicia sesión"}</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="dark" type="submit">
            {estaRegistrandose ? "Regístrate" : "inicia sesión"}
          </Button>
        </Form>

        <Button
          variant="primary"
          type="submit"
          style={{ width: "300px" }}
          onClick={() => signInWithRedirect(auth, googleProvider)}
        >
          Acceder con Google
        </Button>

        <Button
          style={{ width: "300px" }}
          variant="secondary"
          onClick={() => setEstaRegistrandose(!estaRegistrandose)}
        >
          {estaRegistrandose
            ? "¿Ya tienes cuenta? Inicia sesión"
            : "¿No tienes cuenta? Regístrate"}
        </Button>
      </Stack>
    </Container>
  );
};

export default Logueo;
