import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #121212;
  font: 400 16px sans-serif;
}

body,
input,
button,
textarea {
  color: #b3b3b3;
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
`
