import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { PieChart } from "react-native-chart-kit";

const data = [
    {
        name: "WSOM",
        population: 37,
        color: "rgba(67, 67, 67, 1)",
        legendFontColor: 'white',
        legendFontSize: 15
    },
    {
        name: "Relaxed",
        population: 43,
        color: "rgba(55, 55, 55, 1)",
        legendFontColor: "white",
        legendFontSize: 15
    },
    {
        name: "Active",
        population: 20,
        color: "rgba(18, 18, 18, 1)",
        legendFontColor: "white",
        legendFontSize: 15
    }
];

const chartConfig = {
    backgroundColor: 'black',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
};

const WsomPieChart = () => {
    return (
        <View>
            <Text style={styles.title}>Brain State</Text>
            <PieChart
                data={data}
                width={ Dimensions.get("window").width - 16 }
                height={225}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default WsomPieChart;