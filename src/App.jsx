import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styled/globalStyles";
import { lightTheme } from "./styled/themes";

import About from "./pages/About"
import Main from "./pages/Main"
import Projects from "./pages/Projects";
import Skills from "./pages/Skills"
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
          <Route path = "/projects" element = {<Projects/>}/>
          <Route path = "/skills" element = {<Skills/>}/>
          <Route path = "/contact" element = {<ContactMe/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
