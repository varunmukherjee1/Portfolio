import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styled/globalStyles";
import { lightTheme } from "./styled/themes";

import About from "./pages/About"
import Main from "./pages/Main"
import Skills from "./pages/Skills"
import MyWork from "./pages/MyWork";
import ContactMe from "./pages/ContactMe";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <ThemeProvider theme = {lightTheme}>
        <Routes>
          <Route path = "/" element = {<Main/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/mywork" element = {<MyWork/>}/>
          <Route path = "/skills" element = {<Skills/>}/>
          <Route path = "/contact" element = {<ContactMe/>}/>
=        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
