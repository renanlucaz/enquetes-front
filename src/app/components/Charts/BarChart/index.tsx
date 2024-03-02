import Chart from 'react-apexcharts'
import { type BarChartProps } from './BarChart.interface'

export function BarChart(props: BarChartProps): JSX.Element {
  const { data } = props

  const options = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      }
    },
    colors: ['#3d9abd'],
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: data.map(item => item.title)
    }
  }

  const series = [
    {
      name: 'Total de votos',
      data: data.map(item => item.score)
    }
  ]

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            // @ts-expect-error asda
            options={options}
            series={series}
            type="bar"
          />
        </div>
      </div>
    </div>
  )
}
