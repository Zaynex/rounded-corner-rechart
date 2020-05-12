import React from "react";
import "./App.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";

const data01 = [{ name: "Group A", value: 400 }];

const data = [
  {
    name: "Page A",
    uv: 4000,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    amt: 2210,
  },
];

const datar = [{ name: "L1", value: 25 }];

function App() {
  return (
    <div className="App">
      <BarChart
        width={250}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <YAxis axisLine={false} tickLine={false} />
        <XAxis axisLine={false} tickLine={false}></XAxis>
        <Bar dataKey="uv" fill="#8884d8" background={{ fill: "#eee" }} />
        <Bar
          dataKey="uv"
          fill="#82ca9d"
          shape={renderShape}
        />
      </BarChart>
      <RadialBarChart
        width={400}
        height={400}
        cx={200}
        cy={200}
        innerRadius={50}
        outerRadius={70}
        data={datar}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          tick={false}
          axisLine={false}
        />
        <RadialBar background dataKey="value" fill="#82ca9d" cornerRadius={10}/>
        <text
          x={200}
          y={200}
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-label"
        >
          25%
        </text>
      </RadialBarChart>
    </div>
  );
}

function renderShape(props) {
  return (
    <React.Fragment>
      <rect
        x={props.background.x}
        y={props.background.y}
        width={props.background.width}
        height={props.background.height}
        rx="14"
        fill="#eee"
      ></rect>
      <rect
        x={props.x}
        y={props.y}
        width={props.width}
        height={props.height}
        rx="14"
        fill="#82ca9d"
      ></rect>
    </React.Fragment>
  );
}

export default App;
