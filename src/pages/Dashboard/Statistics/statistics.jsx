// import React from 'react';

// const statistics = () => {
//     return (
//         <div>
//             <h1>statistics</h1>
//         </div>
//     );
// };

// export default statistics;

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const statistics = () => {
  // Sample data for the chart
  const data = {
    labels: ["Total Products", "Total Likes", "Total Products Sold"],
    datasets: [
      {
        label: "Statistics",
        data: [120, 450, 300], // Replace with your dynamic data
        backgroundColor: ["#4caf50", "#2196f3", "#ff9800"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Product Statistics Overview",
      },
    },
  };

  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "50px" }}>
      <h2 style={{ textAlign: "center" }}>Statistics Page</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default statistics;
