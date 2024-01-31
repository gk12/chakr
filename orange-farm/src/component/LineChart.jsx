import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [chartDatas, setChartDatas] = useState([]);
  const chartData = async () => {
    const res = await axios.get('http://localhost:4004/data');
    setChartDatas(res.data);
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 0,
        max: 500,
        stepSize: 20,
        ticks: {
          callback: function (value) {
            return value + 'k';
          },
        },
      },
    },
  };

  // const labels = [
  //   '2016',
  //   '2017',
  //   '2018',
  //   '2019',
  //   '2020',
  //   '2021',
  //   '2022',
  //   '2023',
  // ];
  const labels = chartDatas.year;
  const datasets = [
    {
      // data: [9, 10, 35, 50, 9, 15, 52, 60],
      data: chartDatas.profit,
      borderColor: '#165BAA',
      backgroundColor: '#165BAA',
    },
  ];

  const data = {
    labels,
    datasets: datasets,
  };
  useEffect(() => {
    chartData();
  }, []);
  return <Line options={options} data={data} />;
};

export default LineChart;
