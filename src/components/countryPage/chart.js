import React, {useEffect, useRef} from "react";
import Chart from 'chart.js';

const colors = ['rgba(255, 99, 132, 1)', 'rgba(0, 81, 255, 1)', 'rgba(0, 0, 0, 1)', 'rgba(255, 234, 0, 1)'];
const config = (statistics) => ({
    type: 'line',
    data: {
        labels: statistics.map(({ created_at }) => created_at),
        datasets: [
            {
                label: 'Active',
                data: statistics.map(({ active }) => active),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: colors[0],
                fill: false,
            },
            {
                label: 'Total',
                data: statistics.map(({ total }) => total),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: colors[1],
                fill: false,
            },
            {
                label: 'Death',
                data: statistics.map(({ death }) => death),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: colors[2],
                fill: false,
            },
            {
                label: 'Recovered',
                data: statistics.map(({ recovered }) => recovered),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: colors[3],
                fill: false,
            }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: statistics.length ? statistics[0].country : '',
        },
        tooltips: {
            mode: 'index',
            intersect: true,
        },
        hover: {
            mode: 'nearest',
            intersect: true,
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Date',
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Cases',
                }
            }]
        }
    }
});

const ChartComponent = ({ statistics }) => {

    const chartContainer = useRef(null);

    useEffect(() => {
        if(chartContainer) {
            const newChartInstance = new Chart(chartContainer, config(statistics));
        }
    },[]);
    console.log('render')
    return <canvas style={{ height: 200, width: 300 }} ref={chartContainer}/>
};

export default ChartComponent;
