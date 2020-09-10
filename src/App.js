import React from 'react';
import Stories from './stories/stories.js';
import Contacts from './contacts/contacts.js';
//import './App.css';

class App extends React.Component {
    render(){
        return(
            <div>
                <Contacts />
            </div>
        )
    }
}

export default App;
