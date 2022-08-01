import React from 'react';
import AppRouter from './router/AppRouter';
import { UserProvider } from './context/GlobalState';

function ContextApp() {
    return (
        <UserProvider>
            <AppRouter />
        </UserProvider>
    );
}

export default ContextApp;