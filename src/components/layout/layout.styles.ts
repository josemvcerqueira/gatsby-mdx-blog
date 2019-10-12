import { createGlobalStyle } from "styled-components"

export const theme = {
  mainGrey: "#f5f5f5",
  mainWhite: "#fff",
  mainBlack: "#3f3f3f",
  darkGrey: "#8e8e8e",
}

export const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
}
body {
  font-family: "Quicksand", sans-serif;
  background: ${props => props.theme.mainGrey};
  color: ${props => props.theme.mainBlack};
}

.code {
background: #f15025;
display: inline-block;
padding: 1rem;
font-size: 1.2rem;
color: ${props => props.theme.mainWhite}
margin: 2rem 0
}

.counter {
color: green;
margin: 3rem 0;
text-transform: capitalize;

}
`
