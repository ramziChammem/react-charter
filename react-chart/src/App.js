import "./App.css";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
function App() {
  const [data, setData] = useState({
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "Video Mades",
        backgroundColor: "rgba(255, 0, 255, 0.75)",
        data: ["4", "5", "1", "10", "32", "2", "12"],
      },
      {
        label: "Subscription",
        backgroundColor: "rgba(0, 255, 0, 0.75)",
        data: ["14", "15", "21", "0", "12", "4", "2"],
      },
    ],
  });
  const setGradiantColor = (canvas, color) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 600, 550);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.95, "rgba(133, 122, 144, 0.5)");
    return gradient;
  };
  const getChartData = (canvas) => {
    const newData = data;
    if (data.datasets) {
      let colors = ["rgba(255, 0, 255, 0.75)", "rgba(0, 255, 0, 0.75)"];
      data.datasets.forEach((set, index) => {
        set.backgroundColor = setGradiantColor(canvas, colors[index]);
        set.borderColor = "white";
        set.borderWidth = 2;
      });
    }
    return newData;
  };
  return (
    <div className="App">
      <h3>React Chart Sample</h3>
      <Line
        options={{
          responsive: true,
        }}
        data={getChartData}
      />
    </div>
  );
}

export default App;
