import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';

import createRouter from './routes';

export default function src() {
    const signed = useSelector(state => state.auth.signed);
    const Routes = createRouter(signed)
    return (
        <Routes />
    );
}
