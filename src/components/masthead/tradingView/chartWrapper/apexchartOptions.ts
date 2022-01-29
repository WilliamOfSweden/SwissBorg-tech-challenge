const options: ApexCharts.ApexOptions = {
  theme: {
    mode: 'dark',
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy HH:mm',
    },
  },
  stroke: {
    colors: ['#01c38d'],
    curve: 'smooth',
    width: 1.5,
  },
  chart: {
    foreColor: '#ffffff',
    id: 'area-datetime',
    type: 'area',
    width: '100%',
    zoom: {
      enabled: false,
    },
    animations: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
  },
  xaxis: {
    axisBorder: {
      show: false,
      strokeWidth: 10,
    },
    type: 'datetime',
    labels: {
      show: true,
      trim: true,
      format: 'dd-MMM',
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: false,
    },
  },
  yaxis: {
    floating: true,
    decimalsInFloat: 2,
    crosshairs: {
      show: false,
    },
  },
  grid: {
    borderColor: '#77777755',
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {},
  },
  fill: {
    colors: ['#019c71'],
    type: 'gradient',
    gradient: {
      opacityFrom: 1,
      opacityTo: 0,
      stops: [0, 100],
      gradientToColors: ['#019c71', '#019c7166'],
    },
  },
}

export default options
