import React from "react";

import Navbar from "../components/Navbar";
import ContextScreen from '../components/ContextScreen';
import Home from "../components/Home";
import PokeAPI from "../components/PokeAPI";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter = () => {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/todoList" element={<ContextScreen />} />
                <Route exact path="/pokeAPI" element={<PokeAPI />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;