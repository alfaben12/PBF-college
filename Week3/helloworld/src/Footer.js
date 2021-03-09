import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import List from './List';

class App extends Component{
    render(){
        return (
            <div>
                <Header/>
                <h1>Component from Class App</h1>
                <List/>
                <Footer judul = 'Footer Page' nama = 'Auna'/>
            </div>
        );
    }
}
export default App;