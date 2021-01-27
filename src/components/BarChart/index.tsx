import React from 'react';
import { Box } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';
import numeral from 'numeral';

interface BarChartProps {
  covidData: {
    confirmed: {
      value: number;
    };
    recovered: {
      value: number;
    };
    deaths: {
      value: number;
    };
  };
}

interface TooltipItem {
  datasetIndex: number;
  yLabel: number;
}

interface Chart {
  datasets: [
    {
      label: string;
    },
  ];
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          callback(value: number) {
            return numeral(value).format();
          },
        },
      },
    ],
  },
  tooltips: {
    callbacks: {
      label(tooltipItem: TooltipItem, chart: Chart) {
        const datasetLabel =
          chart.datasets[tooltipItem.datasetIndex].label || '';
        return `${datasetLabel}: ${numeral(tooltipItem.yLabel).format()}`;
      },
    },
  },
  legend: {
    display: false,
  },
};

const BarChart: React.FC<BarChartProps> = ({ covidData }: BarChartProps) => {
  const { confirmed, deaths, recovered } = covidData;

  return (
    <Box justifyContent="center" width="90%">
      <Bar
        data={{
          labels: ['Infectados', 'Mortos', 'Recuperados'],
          datasets: [
            {
              label: 'Total',
              backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(255, 0, 0, 0.5)',
                'rgba(0, 255, 0, 0.5)',
              ],
              data: [confirmed.value, deaths.value, recovered.value],
            },
          ],
        }}
        options={options}
      />
    </Box>
  );
};

export default BarChart;
