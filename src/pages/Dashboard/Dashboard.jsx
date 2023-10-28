// import "./styles.css";
import React,{PureComponent} from "react";
import {
  ComposedChart,
  Area,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data= [
    {
      week: 'Week 1',
      squat_weight: 75,
      squat_rep: 12,
      squat_set: 4,
      curl_weight: 25,
      curl_rep: 12,
      curl_set: 4,
      press_weight: 50,
      press_rep: 12,
      press_set: 4,
      bmi: 25.35,
     squat_tot: 48,
     curl_tot: 48,
     press_tot: 48,
      heart_rate: 90,
    },
    {
      week: 'Week 2',
      squat_weight: 95,
      squat_rep: 12,
      squat_set: 4,
      curl_weight: 30,
      curl_rep: 12,
      curl_set: 4,
      press_weight: 70,
      press_rep: 12,
      press_set: 4,
      bmi: 24.68,
     squat_tot: 48,
     curl_tot: 48,
     press_tot: 48,
      heart_rate: 80,
    },
    {
      week: 'Week 3',   
      squat_weight: 105,
      squat_rep: 8,
      squat_set: 4,
      curl_weight: 30,
      curl_rep: 8,
      curl_set: 4,
      press_weight: 75,
      press_rep: 12,
      press_set: 4,
      bmi: 24.34,
      squat_tot: 32,
     curl_tot: 32,
     press_tot: 48,
      heart_rate: 70,
  
    },
    {
      week: 'Week 4',
      squat_weight: 130,
      squat_rep: 8,
      squat_set: 3,
      curl_weight: 45,
      curl_rep: 8,
      curl_set: 3,
      press_weight: 90,
      press_rep: 12,
      press_set: 3,
      bmi: 24.34,
      squat_tot: 24,
     curl_tot: 24,
      press_tot: 36,
      heart_rate: 70,
  
    },
    {
      week: 'Week 5',
      squat_weight: 135,
      squat_rep: 8,
      squat_set: 3,
      curl_weight: 65,
      curl_rep: 12,
      curl_set: 2,
      press_weight: 115,
      press_rep: 12,
      press_set: 2,
      bmi: 24.34,
      squat_tot: 24,
     curl_tot: 24,
      press_tot: 24,
      heart_rate: 70,
  
    },
    {
      week: 'Week 6',
      squat_weight: 165,
      squat_rep: 8,
      squat_set: 2,
      curl_weight: 70,
      curl_rep: 8,
      curl_set: 2,
      press_weight: 130,
      press_rep: 8,
      press_set: 2,
      bmi: 24.68,
     squat_tot: 16,
     curl_tot: 16,
      press_tot: 16,
      heart_rate: 75,
  
    },
  ];

export default function App() {
  return (
    <>
    <h2 className="mt-28 px-4 flex justify-center text-blue-200 font-bold">Have a look into your analytics!</h2>
    <h3 className="px-8 font-bold mt-8 underline">1. Squat Analysis</h3>
    <div className="flex flex-row">
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      className="mt-4"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="week" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="squat_weight"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="squat_tot" stroke="#82ca9d" />
    </LineChart>
     
     <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
      className=""
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="week" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="squat_weight" barSize={50} fill="#413ea0" />
      <Line type="monotone" dataKey="squat_tot" stroke="#ff7300" />
    </ComposedChart>
    </div>


    <h3 className="px-8 font-bold mt-8 underline">2. Press Analysis</h3>
    <div className="flex flex-row">
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      className="mt-4"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="week" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="press_weight"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="press_tot" stroke="#82ca9d" />
    </LineChart>
     
     <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
      className=""
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="week" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="press_weight" barSize={50} fill="#413ea0" />
      <Line type="monotone" dataKey="press_tot" stroke="#ff7300" />
    </ComposedChart>
    </div>


    <h3 className="px-8 font-bold mt-8 underline">3. Curl Analysis</h3>
    <div className="flex flex-row">
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      className="mt-4"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="week" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="curl_weight"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="curl_tot" stroke="#82ca9d" />
    </LineChart>
     
     <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
      className=""
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="week" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="curl_weight" barSize={50} fill="#413ea0" />
      <Line type="monotone" dataKey="curl_tot" stroke="#ff7300" />
    </ComposedChart>
    </div>


    <h3 className="px-8 font-bold mt-8 underline">4. BMI and Heart Rate</h3>
    <div className="flex flex-row">
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      className="mt-4"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="week" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="bmi"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="heart_rate" stroke="#82ca9d" />
    </LineChart>
     
     <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
      className=""
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="week" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="bmi" barSize={50} fill="#413ea0" />
      <Line type="monotone" dataKey="heart_rate" stroke="#ff7300" />
    </ComposedChart>
    </div>


    </>
  );
}
