

import 'react-native-gesture-handler'
import React from 'react';
import Navigation from './src/navigation/Navigation';
import Authprovider from './src/provider/Authprovider';

const App = () => {
    return (
        <Authprovider>
            <Navigation/>
        </Authprovider>
    );
};

export default App;