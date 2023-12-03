import styled from 'styled-components'

export const ContainerButton = styled.button`
  padding: 5px;
  width: 120px;
  height: 30px;
  background: #9758a6;
  color: #ffffff;
  outline: none;
  border: none;
  border-radius: 20px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`
