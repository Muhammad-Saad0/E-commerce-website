import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const OrdersChart = ({
  total,
  processing,
  shipped,
  delivered,
}) => {
  const chartData = {
    labels: [
      "Placed Orders",
      "Processing",
      "Shipped",
      "Delivered Orders",
    ],
    datasets: [
      {
        label: "Order Amount",
        data: [
          total,
          processing,
          shipped,
          delivered,
        ], // Example data for order amounts
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
      },
    },
  };

  return (
    <Bar
      data={chartData}
      options={chartOptions}
    />
  );
};

export default OrdersChart;
