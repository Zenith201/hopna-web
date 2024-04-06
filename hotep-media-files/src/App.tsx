import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/Appbar/NavBar";
import {ThemeProvider} from "@mui/joy";
import theme from "./theme";
import Appbar from "./components/Appbar";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Appbar/>
            </ThemeProvider>
        </div>
    )
}

export default App;
