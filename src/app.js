import React from 'react';
import Header from './modules/Header.js';
import Footer from './modules/Footer.js';
import ToDoList from './modules/to-do-list.js';

function app() {
    return (
        <React.Fragment>
            <Header />
            <ToDoList />
            <Footer />
        </React.Fragment>
    )
} // end of app function 