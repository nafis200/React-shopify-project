

import 'react-native-gesture-handler'
import React from 'react';
import Navigation from './src/navigation/Navigation';
import Authprovider from './src/provider/Authprovider';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Authprovider>
                <Navigation />
            </Authprovider>
        </QueryClientProvider>

    );
};

export default App;