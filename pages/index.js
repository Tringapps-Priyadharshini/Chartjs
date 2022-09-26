import React, { useEffect, useState } from 'react';
import { Bar,Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

// const barChart =
// {
//   week: [
//     {
//       anyValue: 'mon',
//       yaxis: { y: 34 }
//     },
//     {
//       anyValue: 'tues',
//       yaxis: { y: 32 }
//     },
//     {
//       anyValue: 'wed',
//       yaxis: { y: 30 }
//     },
//     {
//       anyValue: 'thurs',
//       yaxis: { y: 23 }
//     },
//     {
//       anyValue: 'fri',
//       yaxis: { y: 10 }
//     }
//   ],
//   month: [
//     {
//       anyValue: 'january',
//       yaxis: { y: 203 },
//     },
//     {
//       anyValue: 'february',
//       yaxis: { y: 200 },
//     },
//     {
//       anyValue: 'march',
//       yaxis: { y: 180 },
//     },
//     {
//       anyValue: 'april',
//       yaxis: { y: 190 },
//     },
//     {
//       anyValue: 'may',
//       yaxis: { y: 150 },
//     },
//   ],
//   year: [
//     {
//       anyValue: '2020',
//       yaxis: { y: 90 },
//     },
//     {
//       anyValue: '2021',
//       yaxis: { y: 20 },
//     },
//     {
//       anyValue: '2022',
//       yaxis: { y: 30 },
//     },
//     {
//       anyValue: '2019',
//       yaxis: { y: 40 },
//     },
//     {
//       anyValue: '2018',
//       yaxis: { y: 50 },
//     },
//   ]
// }

// const lineChart = {
//   week:[
//     {
//       label:'Mon',
//       yaxis:{y:23}
//     },
//     {
//       label:'Tues',
//       yaxis:{y:20}
//     },
//     {
//       label:'Wed',
//       yaxis:{y:43}
//     },
//     {
//       label:'Thurs',
//       yaxis:{y:63}
//     },
//     {
//       label:'Fri',
//       yaxis:{y:53}
//     },
//     {
//       label:'Sat',
//       yaxis:{y:33}
//     },
//     {
//       label:'Sun',
//       yaxis:{y:20}
//     }

//   ],
//   month:[
//     {
//       label:'Mon',
//       yaxis:{y:13}
//     },
//     {
//       label:'Tues',
//       yaxis:{y:60}
//     },
//     {
//       label:'Wed',
//       yaxis:{y:33}
//     },
//     {
//       label:'Thurs',
//       yaxis:{y:54}
//     },
//     {
//       label:'Fri',
//       yaxis:{y:23}
//     },
//     {
//       label:'Sat',
//       yaxis:{y:45}
//     },
//     {
//       label:'Sun',
//       yaxis:{y:34}
//     }

//   ],
//   year:[
//     {
//       label:'Mon',
//       yaxis:{y:78}
//     },
//     {
//       label:'Tues',
//       yaxis:{y:56}
//     },
//     {
//       label:'Wed',
//       yaxis:{y:34}
//     },
//     {
//       label:'Thurs',
//       yaxis:{y:23}
//     },
//     {
//       label:'Fri',
//       yaxis:{y:56}
//     },
//     {
//       label:'Sat',
//       yaxis:{y:70}
//     },
//     {
//       label:'Sun',
//       yaxis:{y:65}
//     }

//   ]
// }

export default function Home(props) { 
  const barChart = props.barChart;
  const lineChart = props.lineChart;
  const [chartData, setChartData] = useState(barChart['week'])
  const weekHandler = (event) => {
    setChartData(barChart[event.target.value])
  }
  const bar = {
    datasets: [{
      label: 'Sales',
      data: chartData,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  }
  const line = {
    labels : ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'],
    datasets: [
      {
        label: "Weekly",
        data: lineChart['week'],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Monthly",
        data:lineChart['month'],
        fill: false,
        borderColor: "#742774"
      },
      {
        label: "Yearly",
        data: lineChart['year'],
        fill: false,
        borderColor: "#936543"
      }
    ]
  };

  return (
    <div>
      <h2>$4,14,23,5444</h2>
      <select onClick={weekHandler}>
        <option value="week">Weekly</option>
        <option value="month">Monthly</option>
        <option value="year">Yearly</option>
      </select>
      <Bar
        data={bar}
        width={3}
        height={1}
        options={{
          parsing: {
            xAxisKey: 'anyValue',
            yAxisKey: 'yaxis.y',
          }
        }}
      />
      <br/><br/><br/><br/>
      <Line
        datasetIdKey='id'
        data={line}
        width={3}
        height={1}
        options={{
          parsing: {
            xAxisKey: 'label',
            yAxisKey: 'yaxis.y',
          }
        }}
        
      />

    </div>
  );
}

export async function getStaticProps(){
  const barChartData = await fetch('https://run.mocky.io/v3/2543150b-532c-446f-8782-b016423f743b');
  const lineChartData = await fetch('https://run.mocky.io/v3/50e1aa7e-8f2d-4d32-89dd-f676dd96fa89')
  const dataBar = await barChartData.json();
  const dataLine = await lineChartData.json();
    return{
      props:{
        barChart:dataBar,
        lineChart:dataLine,
      }
    }
}

