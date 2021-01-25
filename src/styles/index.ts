import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  padding: 1.6rem;
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
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 144rem;

  h1 {
    max-width: 50rem;
    margin-bottom: 3.2rem;
    font-size: 10.4rem;
    line-height: 100%;
  }

  p {
    max-width: 50rem;

    margin-bottom: 3.2rem;
    color: #b3b3b3;
    font-size: 1.8rem;
    line-height: 150%;
  }

  a {
    width: 20rem;
    padding: 0.8rem 3rem;
    border-radius: 4rem;
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
  color: #c10;
`
