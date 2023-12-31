import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Container, CssBaseline, Typography } from "@mui/material";
import Header from "./Header";
function App() {
  const [darkMode,setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette:{
      mode:paletteType,
      background:{default: paletteType==='light' ?'#eaeaea' : '#121212'}
      
    }
  })
  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
     <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
     <Container>
          <Catalog/>
     </Container>
    
     
    </ThemeProvider>
  );
}

export default App;
