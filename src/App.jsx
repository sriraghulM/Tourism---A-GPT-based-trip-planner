{
  /*
import Comp from './Comp';
import './App.css';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import { Login,Register } from './Login';
import Interface from './Chatpage/interface';


function App() {
    return (
            <div className="App">
               
                <Routes>
                    <Route path = "/Login" element = { <Login/>}/>

                    <Route path = "/Register" element = { <Register/>}/>

                
                    <Route path = "/" element={<Comp />}> </Route>

                    <Route path = "/Interface" element={<Interface />}> </Route>


                    
                </Routes>
                </div>
            
        
    );
}

export default App;


------------------------------
*/
}

import React from "react";
import "./App.css";
import About from "./Newadded/About";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Service from "./Newadded/Service";
import Contact from "./Newadded/Contact";
import Home from "./Newadded/Home";
import {Login} from "./Login";
import { Register } from "./Login";

function App() {
    const initialIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const initialUserID = localStorage.getItem("userId") || null;

    const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);
    const [userID, setUserID] = useState(initialUserID);

    const updateUser = (newUser) => {
        setUserID(newUser);
        const userLoggedIn = !!newUser;
        setIsLoggedIn(userLoggedIn);

        // Set local storage values
        localStorage.setItem("userId", newUser);
        localStorage.setItem("isLoggedIn", userLoggedIn);
    };

    console.log(isLoggedIn);

    if (!isLoggedIn) {
        return <Login currentUser={updateUser} />;
    }

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Login" element={<Login currentUser={updateUser} />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;

{
  /*
import React from 'react';
import './App.css';
import Comp from './Comp';



function App() {
    return (
        <div className='App'>
            
        <Comp/>
            
        </div>
    );
}
export default App;
    */
}
