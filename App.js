import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GraphScreen from "./src/GraphScreen";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={GraphScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;