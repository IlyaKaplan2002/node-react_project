const labels = [1, 2, 3, 4, 5, 6, 7, 8]; // from back - fetch

const data = {
  labels,
  datasets: [
    {
      label: 'PLAN',
      fill: false,
      data: [0, 2, 3, 4, 5, 6, 5, 4], //from back
      borderColor: 'rgba(9, 30, 63, 1,)',
      backgroundColor: 'rgba(9, 30, 63, 1)',
      borderWidth: 2,
      tension: 0.5,
    },
    {
      label: 'ACT',
      fill: false,
      data: [1, 2, 6, 8, 5, 6, 3, 2], //from back
      borderColor: 'rgba(255, 107, 8, 1)',
      backgroundColor: 'rgba(255, 107, 8, 1)',
      borderWidth: 2,
      tension: 0.5,
    },
  ],
};

export default data;
