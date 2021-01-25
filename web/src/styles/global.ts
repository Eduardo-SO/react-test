import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  font-size: 62.5%;

  @media (max-width: 700px) {
    font-size: 60%;
  }

  @media (max-width: 400px) {
    font-size: 57.5%;
  }
}

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  background: #212121;
  font: 400 1.6rem sans-serif;
}

body,
input,
select,
button,
textarea {
  line-height: 150%;
  color: #fff;
  -webkit-font-smoothing: antialiased;
}

a {
  color: #b3b3b3;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    color: #fff;
  }
}

h1, h2, h3 {
  line-height: 125%;
}
`
