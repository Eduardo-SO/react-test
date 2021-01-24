import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  padding: 16px;

  h1 {
    font-size: 32px;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 24px;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 900px;

  background: #000;

  padding: 40px;

  input {
    height: 48px;
    width: 100%;

    background: transparent;
    color: #fff;
    border: 1px solid #333;
    border-radius: 4px;
    padding: 24px;

    margin-top: 8px;
    margin-bottom: 16px;

    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  }

  select {
    height: 48px;
    width: 100%;

    background: transparent;
    border: 1px solid #333;
    border-radius: 4px;
    padding: 0 24px;
    appearance: none;

    margin-top: 8px;
    margin-bottom: 16px;

    option {
      background: #333;
    }
  }
`
