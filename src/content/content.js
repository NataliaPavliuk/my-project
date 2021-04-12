import {MDCSlider} from '@material/slider';
import { Chart} from '/node_modules/chart.js/dist/Chart.min.js';

const DATA_COUNT = 6;
const labels = [];
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
const datapoints = [50, 37, 51, 50, 75, 73];
var chart_line_element = document.getElementById("line-chart").getContext("2d");
var chart_doughnut_element = document.getElementById("doughnut-chart").getContext("2d");

var gradient = chart_line_element.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(83,1,1,1)');   
gradient.addColorStop(1, 'rgba(249,14,2,1)');

for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
}

const data_line = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        data: datapoints,
        borderColor: 'white',
        borderWidth : 2,
        fill: true,
        pointBackgroundColor: '#f90e02',
        pointBorderColor: 'white',
        pointBorderWidth: 2,
        pointRadius: 5,
        cubicInterpolationMode: 'monotone',
        tension: 3,
        backgroundColor: gradient
    }, {
        fill: true,
        data: [100, 100, 100, 100, 100, 100],
        backgroundColor: '#f90e02',
        pointBorderWidth: 0,
        pointRadius: 0,
    }]
    
};

var chart_line = new Chart(chart_line_element, {
    type: 'line',
    data: data_line,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: false
            },
        },
        interaction: { intersect: false },
        scales: {
            x: {
                display: true,
                title: { display: true },
                gridLines: {
                    drawBorder: false,
                }
            },
            y: {
                display: true,
                title: { display: false, text: 'Value' },
                suggestedMin: 0,
                suggestedMax: 100,
                ticks: { reverse: false, stepSize: 25 },
                gridLines: {
                    drawBorder: false,
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});

var chart_doughnut = new Chart(chart_doughnut_element, {
  type: 'doughnut',
  data: {
    labels: ['Iphone 6', 'Iphone 5', 'Iphone 7'],
    datasets: [{
      label: '# of Tomatoes',
      data: [355, 195, 105],
      pointRadius: 20,
      backgroundColor: [ 'red', 'green', 'blue' ],
      borderColor: [ 'white', 'white', 'white' ],
      cutout: '75%'
    }]
  },
  options: {
    responsive: false,
    plugins: {
        legend: {
            display: false,
        }
    }
  }
});