import React from "react";
import { formatBytes } from "../../helpers";
import { DefaultData, GraphData } from "../../types";
import {
    LineChart, Line, CartesianGrid,
    XAxis, YAxis, ResponsiveContainer,
    Tooltip, Legend
} from 'recharts';

const CapacityChart = ({ bandwidthData }: any) => {

    const reformatData = (data: DefaultData): GraphData[] => {

        const p2p: number[][] = data.p2p
        const cdn: number[][] = data.cdn


        const formatted = p2p.map((arr: number[], index) => {

            const time = new Date(arr[0])
            const valueP2P = formatBytes(arr[1])
            const valueCDN = formatBytes(cdn[index][1])

            const value = {
                time: time.getUTCDate(),
                valueP2P,
                valueCDN,
            }

            return value
        })

        return formatted
    }

    return (
        <ResponsiveContainer width={"100%"} height={500}>
            <LineChart data={reformatData(bandwidthData)}>
                <Line type="monotone" dataKey="valueP2P" stroke="#8884d8" />
                <Line type="monotone" dataKey="valueCDN" stroke="#888400" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
            </LineChart>
        </ResponsiveContainer>

    )
};


export {
    CapacityChart
}