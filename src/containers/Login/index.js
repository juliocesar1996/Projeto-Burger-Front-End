import React from 'react'

import {
  Container,
  Background,
  ContainerItens,
  P,
  Input,
  Button,
  SignInLink
} from './styles'

function Login() {
  return (
    <Container>
      <Background>
        <ContainerItens>
          <img />
          <h1>Login</h1>

          <P>Email</P>
          <Input />

          <P>Senha</P>
          <Input />

          <Button>SignIn</Button>
          <SignInLink>
            Não possui conta ? <a>SignUp</a>
          </SignInLink>
        </ContainerItens>
      </Background>
    </Container>
  )
}

export default Login
