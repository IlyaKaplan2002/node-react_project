const fn = value => {
  if (value < 768) {
    console.log(value);
    return false;
  }
  return true;
};

const options = {
  plugins: {
    title: {
      display: true,
      text: ` ${'Amount of pages / DA'.toUpperCase()}`,
      align: 'start',
      color: 'rgba(36, 42, 55, 1)',
      font: {
        family: 'Montserrat',
        size: 12,
        weight: 500,
      },
    },
    legend: {
      beginAtZero: true,
      display: false,
    },
    tooltip: {
      beginAtZero: true,
      backgroundColor: 'rgba(245, 247, 250, 1)',
      displayColors: false,
      bodyColor: ' rgba(9, 30, 63, 1)',
      bodyFont: {
        size: 12,
        weight: 600,
      },
      bodyAlign: 'center',
      borderColor: ' rgba(9, 30, 63, 0.1)',
      titleFont: { size: 0 },
    },
  },

  responsive: true,
  maintainAspectRatio: false,

  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        display: false,
      },

      title: {
        display: true,
        text: `${'time'.toUpperCase()}`,
        color: 'rgba(36, 42, 55, 1)',
        align: 'end',
        font: {
          family: 'Montserrat',
          size: 12,
          weight: 500,
        },
      },

      grid: {
        display: fn(window.innerWidth),
      },
    },

    y: {
      display: true,
      ticks: {
        display: false,
      },

      grid: {
        display: false,
      },
    },
  },
};

export default options;
