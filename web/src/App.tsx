import React from 'react';
import './styles/global.ts';

import  Routes from './routes'
import Header from './components/Header';

import Dashboard from './pages/Dashboard';

function App( ) {
    return (
        <div className="App">
            
            <Routes/>
            
        </div>
    )
}

export default App;