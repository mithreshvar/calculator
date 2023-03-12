import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState, useEffect } from "react";

export default function Chart({ points }) {


    const [options, setOptions] = useState({
        chart: {
            type: 'areaspline',
            styleMode: true,
            backgroundColor: 'transparent',
            height: '220px',
            style: {
                fontFamily: 'poppins',
                fontSize: '12px',
                fontWeight: '400',
                color: '#000000',

            },
            marginLeft: 15,
            marginRight: 15,
        },

        title: {
            text: ""
        },

        xAxis: {

            allowDecimals: false,
            //tickInterval: 1,

            tickLength: 0,

            gridLineWidth: 1,

            // endOnTick: true,
            // startOnTick: true,

            labels: {
                style: {
                    color: "#000000",
                    fontFamily: 'poppins',
                    fontSize: '12px',
                    fontWeight: '400',
                    opacity: 0.4,
                },
            },

        },

        yAxis: {
            enabled: false,
            title: {
                text: "",
            },
            labels: {
                enabled: false,
            },
            gridLineColor: 'transparent',
        },

        plotOptions: {
            series: {
                pointStart: 2023,
                fillColor: {
                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                    stops: [
                        [0, 'rgba(0, 221, 111, 0.65)'],
                        [1, 'rgba(204, 255, 230,0.2)']
                    ]
                },
            },
            areaspline: {
                color: '#00DD6F',
            },

        },

        tooltip: {
            backgroundColor: '#FFFFFF',
            borderColor: '#FFFFFF',
            borderRadius: 20,
            style: {
                color: '#000000',
            },
            formatter() {
                return `Amount <strong>\u20B9 ${Number(this.y.toFixed(0)).toLocaleString("en-In")}</strong> <br> Year <strong> ${this.x} </strong>`
            }
        },

        legend: {
            enabled: false,
        },

        series: [
            {
                name: 'CAGR',
                data: null,
            }
        ],

        credits: {
            enabled: false
        },

    });

    useEffect(() => {
        setOptions(previousState => {
            return ({
                ...previousState, series: {
                    data: points,
                }
            })
        })
    }, points);


    return (

        <HighchartsReact highcharts={Highcharts} options={options} />

    )
}