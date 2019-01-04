import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
        {
            data: [10, 20, 30, 38],
            label: "lab1",
            backgroundColor: "#4286f4",
            // borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            stack: '1',
            hoverBackgroundColor: "#4286f4",
            hoverBorderColor: "#4286f4"
        },
        {
            data: [30, 20, 10, 40],
            label: "lab2",
            backgroundColor: "#e5f94a",
            // borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            stack: '2',
            hoverBackgroundColor: "#e5f94a",
            hoverBorderColor: "#e5f94a"
        },
        {
            data: [0, 15, 20, 30],
            label: "lab3",
            backgroundColor: "#f2264c",
            // borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            stack: '2',
            hoverBackgroundColor: "#f2264c",
            hoverBorderColor: "#f2264c",
        },
        {
            data: [10, 20, 30, 28],
            label: "lab4",
            backgroundColor: "#8722f4",
            // borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            stack: '3',
            hoverBackgroundColor: "#8722f4",
            hoverBorderColor: "#8722f4"
        },
        {
            data: [30, 20, 10, 40],
            label: "lab5",
            backgroundColor: "#3547b7",
            // borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            stack: '3',
            hoverBackgroundColor: "#3547b7",
            hoverBorderColor: "#3547b7"
        },


    ]
};
const doughnutData = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};


class ParentChartjsComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>Horizontal Bar Example</h2>
                <HorizontalBar data={data} />
                <h2>Doughnut Example</h2>
                <Doughnut data={doughnutData} />
            </div>
        );
    }
}
export default ParentChartjsComponent;


 //stacked example
        // {
        //     label: 'My First dataset',
        //     backgroundColor: 'rgba(255,99,132,0.2)',
        //     borderColor: 'rgba(255,99,132,1)',
        //     borderWidth: 1,
        //     stack: '1',
        //     hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        //     hoverBorderColor: 'rgba(255,99,132,1)',
        //     data: [65, 59, 80, 81, 56, 55, 40]
        //   },
        //   {
        //     label: 'My Second dataset',
        //     backgroundColor: 'rgba(155,49,12,0.4)',
        //     borderColor: 'rgba(155,49,12,1)',
        //     borderWidth: 1,
        //     stack: '2',
        //     hoverBackgroundColor: 'rgba(155,49,12,0.4)',
        //     hoverBorderColor: 'rgba(155,59,12,1)',
        //     data: [55, 40, 81, 56, 65, 59, 80]
        //   },
        //   {
        //     label: 'My Third dataset',
        //     backgroundColor: 'rgba(45,149,102,0.4)',
        //     borderColor: 'rgba(45,149,102,1)',
        //     borderWidth: 1,
        //     stack: '2',
        //     hoverBackgroundColor: 'rgba(155,49,12,0.4)',
        //     hoverBorderColor: 'rgba(155,59,12,1)',
        //     data: [55, 40, 81, 56, 65, 59, 80]
        //   }