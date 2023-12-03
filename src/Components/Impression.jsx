import React from 'react'
import Chart from 'react-apexcharts';

const Impression = () => {
    const options = {
        chart: {
          id: 'mixed-chart',
        },
        xaxis: {
          categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
        },
      };
    
      const series = [
        {
          name: 'Line Series',
          type: 'line',
          data: [30, 40, 35, 50, 49],
        },
        {
          name: 'Bar Series',
          type: 'bar',
          data: [40, 30, 50, 35, 40],
        },
      ];
    
      return <Chart options={options} series={series} type="line" height={350} />;
    }
export default Impression
