import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LineChart } from "react-native-chart-kit";

const gammaData = [
    0.01602640000000005,
    -0.26920046500000006,
    -0.2110727975,
    -0.24689070749999997,
    -0.294595845,
    -0.37674595,
    -0.5034833200000001,
    -0.377722345,
    -0.398969355,
    -0.437651302,
    -0.22000950750000003,
    -0.419637592875,
    -0.6174383,
    -0.7192281475,
    -0.6453245075,
    -0.4891945575,
    -0.5287521875,
    -0.56367009,
    -0.555984413,
    -0.5807724400000001,
    -0.5858744675,
    -0.4999815425,
    -0.6458471575,
    -0.5745356525,
    -0.7124254775,
    -0.7156414425,
    -0.76257698,
    -0.53770659,
    -0.5730544550000001,
    -0.7952484825,
    -0.8502933500000001,
    -0.633239015,
    -0.6447727249999999,
    -0.554626945,
    -0.67704801,
    -0.48247598,
    -0.630023855,
    -0.48471612250000007,
    -0.46966416499999997,
    -0.39520123,
    -0.5450536625,
    -0.59039211,
    -0.5632668825,
    -0.7588391750000001,
    -0.58956433,
    -0.6705453575,
    -0.657916545,
    -0.7439066274999999,
    -0.8845577250000001,
    -0.7233522925,
    -0.6938218574999999,
    -0.45358217,
    -0.553732245,
    -0.5079125725,
    -0.5751826775,
    -0.51351529,
    -0.7754559575000001,
    -0.737262675,
    -0.7571076275,
    -0.6243471875,
    -0.646661175,
    -0.5850861224999999,
    -0.669039355,
    -0.7153978575000001,
    -0.6349161624999999,
    -0.547055625,
    -0.7071038649999999,
    -0.83919772,
    -0.66982117,
    -0.6132197724999999,
    -0.718208465,
    -0.8808309125,
    -0.8000052,
    -0.7834353549999999,
    -0.719575275,
    -0.8192933575000001,
    -0.67384215,
    -0.6268333650000001,
    -0.7278638975,
    -0.7335313299999999,
    -0.6462836249999999,
    -0.7961674925,
    -0.8096657575,
    -0.839748075,
    -0.827061675,
    -0.6949456175,
    -0.6545071175,
    -0.640472815,
    -0.636837205,
    -0.6595436175,
    -0.7056844824999999,
    -0.764863975,
    -0.8942901425,
    -0.8619480749999999,
    -0.82139579,
    -0.774441265,
    -0.6389890725,
    -0.6586691375,
    -0.7131441375,
    -0.70307534,
    -0.720016075,
    -0.7060651375,
    -0.7262072625,
    -0.6741888600000001,
    -0.48821044999999996,
    -0.6982968900000001,
    -0.6995144074999999,
    -0.823069375,
    -0.94265219,
    -0.930875525,
    -0.7566859575,
    -0.767230025,
    -0.6761758275,
    -0.78895513,
    -0.6156802612500001,
    -0.5804808925,
    -0.6027374325,
    -0.57233733,
    -0.73155046,
    -0.72293442,
    -0.73328616,
    -0.8219239599999999,
    -0.8504596874999999,
    -0.760986695,
    -0.6921003675,
    -0.5987046925,
    -0.5985612225000001,
    -0.7338838625,
    -0.37980902925000004,
    -0.7170575925,
    -0.6540227949999999,
    -0.84060277,
    -0.58143684,
    -0.63677517125,
    -0.5884450560000001,
    -0.5367472050000001,
    -0.6639851725,
    -0.6029234649999999,
    -0.620260155,
    -0.66767524,
    -0.6030189275,
    -0.6293167075,
    -0.67643387,
    -0.7824858275000001,
    -0.72135345,
    -0.8184797124999998,
    -0.8359716799999999,
    -0.8347882175000001,
    -0.7333090600000001,
    -0.836645415,
    -0.69000761,
    -0.82291991,
    -0.7774017449999999,
    -0.6819249425,
    -0.7142410875,
    -0.8720541075,
    -0.8232977925,
    -0.85084304,
    -0.73492056,
    -0.81362458,
    -0.6444723325,
    -0.8299601525,
    -0.8425968075000001,
    -0.853154025,
    -0.836083175,
    -0.9043806074999999,
    -0.7849463799999999,
    -0.8246916049999999,
    -0.6752885275,
    -0.71141356,
    -0.6529441425,
    -0.6236874800000001,
    -0.41797280075,
    -0.5212760949999999,
    -0.8096364600000001,
    -0.8870901249999998,
    -0.7567590024999999,
    -0.84093829,
    -0.8258339749999999,
    -0.7367825499999999,
    -0.8528382750000001,
    -0.7850455049999999
];

const chartConfig = {
    backgroundColor: 'black',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

    // propsForBackgroundLines - Override styles of the background lines, refer to react-native-svg's Line documentation
    // propsForLabels - Override styles of the background lines, refer to react-native-svg's Line documentation
};

const LineGraph = () => {
    return (
        <View>
            <Text style={styles.title}>Brain Activity</Text>
            <LineChart
                data={{
                    labels: ["5 Min", "10 Min", "15 Min", "20 Min", "25 Min", "30 Min"],
                    datasets: [
                        {
                            data: gammaData,
                            color: (opacity = 1) => `rgba(237, 255, 0)`, // optional
                            strokeWidth: 1, // optional
                        }
                    ]
                }}
                width={ Dimensions.get("window").width - 16 } // from react-native
                height={ 225 }
                chartConfig={chartConfig}
                bezier
                style={styles.chart}
                withDots={false}
                withInnerLines={false}
                withHorizontalLabels={false}
                withShadow={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        paddingTop: 8,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    chart: {
        marginHorizontal: 8,
        marginVertical: 8,
        borderRadius: 16
    }
});

export default LineGraph;