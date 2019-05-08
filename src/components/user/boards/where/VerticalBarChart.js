//this component shows websites collection of the logged-in user
import React from 'react'
import {
    ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, BarChart
} from 'recharts';

const VerticalBarChart = (props) => {

    const { chartData } = props;
    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p className="label text-white">{`${label} : ${payload[0].value}`}</p>
                    {/* <p className="intro">{getIntroOfPage(label)}</p> */}
                    <p className="desc text-white">Anything you want can be displayed here.</p>
                </div>
            );
        }
        return null;
    };
    return (
        <ResponsiveContainer width="95%" height={300}>
            <BarChart
                layout="vertical"
                // width={500}
                // height={300}
                data={chartData}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis className="text-white" tick={{ fill: "#82ca9d" }} type="number" />
                <YAxis className="text-white" tick={{ fill: "#82ca9d" }} dataKey="key" type="category" />
                {/* <Tooltip content= {<CustomTooltip />}  /> */}
                {/* <Legend /> */}
                <Bar dataKey="frequency" barSize={20} fill="#82ca9d" />
                {/* <Bar dataKey="uv" barSize={20} fill="#413ea0" /> */}

                {/* <Line dataKey="pv" stroke="#8884d8" />
            <Line dataKey="uv" stroke="#82ca9d" /> */}
            </BarChart>
        </ResponsiveContainer>
    )
}

export default VerticalBarChart