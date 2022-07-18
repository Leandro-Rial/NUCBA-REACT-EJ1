import React from 'react';
import ContextScreen from './components/ContextScreen';
import { UserProvider } from './context/GlobalState';

function ContextApp() {
    return (
        <UserProvider>
            <ContextScreen />
        </UserProvider>
    );
}

export default ContextApp;