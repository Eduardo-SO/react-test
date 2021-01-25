import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  padding: 1.6rem;

  h1 {
    font-size: 3.2rem;
    margin-bottom: 3.2rem;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 114rem;
`

export const Filters = styled.div`
  display: grid;
  gap: 1.6rem;

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 670px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }

  background: #121212;
  padding: 3.2rem;
  border-radius: 8px;
`

export const FieldContainer = styled.div`
  label {
    font-weight: bold;
  }

  input {
    height: 4.8rem;
    width: 100%;

    background: transparent;
    color: #fff;
    border: 1px solid #333;
    border-radius: 0.4rem;
    padding: 2.4rem;

    margin-top: 0.8rem;
    margin-bottom: 1.6rem;

    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  }

  select {
    height: 4.8rem;
    width: 100%;

    border: 1px solid #333;
    border-radius: 0.4rem;
    padding: 0 2.4rem;
    appearance: none;
    background: transparent;

    margin-top: 0.8rem;
    margin-bottom: 1.6rem;

    option {
      background: #333;
    }
  }
`

export const Login = styled.div`
  max-width: 50rem;

  display: flex;
  flex-direction: column;

  margin-top: -2.4rem;

  p {
    color: #b3b3b3;
  }

  a {
    width: 15rem;
    padding: 0.8rem 3rem;
    border-radius: 4rem;
    margin-top: 1.6rem;
    border: 2px solid transparent;

    background: #1db954;
    color: #000;

    text-align: center;
    font-weight: bold;

    transition: 0.2s all ease-in;

    &:hover {
      background: transparent;
      color: #fff;
      border: 2px solid #1db954;
    }
  }
`

export const AccessDenied = styled.div`
  margin-top: 3.2rem;
  color: #aa0000;
`
