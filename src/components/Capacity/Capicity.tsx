import React from "react";
import { formatBytes, styles } from "../../helpers";
import { DefaultData, GraphData } from "../../types";
import {
    XAxis, YAxis, ResponsiveContainer,
    Tooltip, Legend, AreaChart, Area, ReferenceLine
} from 'recharts';

const Capacity = ({ bandwidthData }: any) => {

    let maxSum = 0
    let maxCDN = 0

    const reformatData = (data: DefaultData): GraphData[] => {

        const p2p: number[][] = data.p2p
        const cdn: number[][] = data.cdn

        const formatted = p2p.map((arr: number[], index) => {

            const time = new Date(arr[0])
            const valueP2P = formatBytes(arr[1])
            const valueCDN = formatBytes(cdn[index][1])

            const value = {
                time: time.toDateString(),
                valueP2P,
                valueCDN,
            }

            if (maxSum < valueCDN + valueP2P) {
                maxSum = valueP2P + valueCDN
            }

            if (maxCDN < valueCDN) {
                maxCDN = valueCDN
            }

            return value
        })

        return formatted
    }

    return (
        <ResponsiveContainer width={"100%"} height={250}>
            <AreaChart width={730} height={250} data={reformatData(bandwidthData)}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="time" />
                <YAxis domain={[0, maxSum]} />
                <Legend />
                <Tooltip />
                <Area type="monotone" dataKey="valueP2P" strokeWidth={1.5} stroke={styles.Twilight} fillOpacity={1} fill={styles.Azure} />
                <Area type="monotone" dataKey="valueCDN" strokeWidth={1.5} stroke={styles.Velvet} fillOpacity={1} fill={styles.HotPink} />
                <ReferenceLine y={maxCDN} label={`Maximum CDN contribution: ${maxCDN}`} stroke="#9A193E" strokeDasharray="3 3" />
                <ReferenceLine y={maxSum} label={`Maximum Throughput: ${maxSum}`} stroke="#3FCB7E" strokeDasharray="3 3" />
            </AreaChart>
        </ResponsiveContainer>

    )
};


export {
    Capacity
}