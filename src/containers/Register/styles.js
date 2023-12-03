import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RegisterImage = styled.img`
  height: 90%;
`

export const ContainerItens = styled.div`
  height: 90%;
  padding: 25px 75px;

  border-radius: 0 10px 10px 0;
  background: #373737;

  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    text-align: center;
    color: #fff;

    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 5px;
  }

  img {
    margin-left: auto;
    margin-right: auto;
    width: 240px;
    height: 64px;
  }
`

export const Label = styled.p`
  color: #ffffff;

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: ${(props) => (props.error ? '10' : '35')};
  margin-bottom: 2px;
`

export const Input = styled.input`
  width: 391.416px;
  height: 38.319px;
  border-radius: 5px;
  background: #ffffff;
  border: ${(props) => (props.error ? '2px solid #CC1717' : 'none')};
  padding-left: 10px;
  margin-bottom: 15px;

  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
`

export const SignInLink = styled.p`
  width: 187.296px;
  height: 22.991px;

  color: #fff;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
