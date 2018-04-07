import React, { Component } from 'react';
import MessageList from './components/MessageList'
import MessageBox from './components/MessageBox'
import Header from './components/Header'
import firebase from 'firebase';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        var config = {
            apiKey: "AIzaSyAZ_sQYShiz6NnAlVjP-4gmsIBNtizP1Uw",
            authDomain: "firstapp-a9724.firebaseapp.com",
            databaseURL: "https://firstapp-a9724.firebaseio.com",
            projectId: "firstapp-a9724",
            storageBucket: "firstapp-a9724.appspot.com",
            messagingSenderId: "432000586348"
        };
        firebase.initializeApp(config);
    }


    render() {
        return ( <
            div className = "container" >
            <
            Header title = ' Simple Firebase App' / >
            <
            div className = 'columns' >
            <
            div className = 'column is-3' > < /div> <
            div className = 'column is-6' >
            <
            MessageList db = { firebase }
            / > < /
            div > <
            /div>  <
            div className = 'columns' >
            <
            div className = 'column is-3' > < /div> <
            div className = 'column is-6' >
            <
            MessageBox db = { firebase }
            / > < /
            div >
            <
            /div>


            <
            /
            div >
        );
    }
}

export default App;