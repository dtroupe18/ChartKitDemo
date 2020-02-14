import React  from 'react';
import { View, StyleSheet } from 'react-native';
import LineGraph from "./components/LineGraph";

// import LineGraph from './src/components/LineGraph';

const GraphScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'black'}}>
            <LineGraph/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default GraphScreen;