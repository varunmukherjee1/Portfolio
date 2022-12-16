import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import GlobalStyle from "./styled/globalStyles";
import { lightTheme } from "./styled/themes";

import About from "./pages/About"
import Main from "./pages/Main"
import Skills from "./pages/Skills"
import MyWork from "./pages/MyWork";
import ContactMe from "./pages/ContactMe";


function App() {
  return (
    <div className="App">
      <Toaster position="top-center"/>
      <GlobalStyle/>
      <ThemeProvider theme = {lightTheme}>
        <Routes>
          <Route path = "/" element = {<Main/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/mywork" element = {<MyWork/>}/>
          <Route path = "/skills" element = {<Skills/>}/>
          <Route path = "/contact" element = {<ContactMe/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
