import React from "react";
import {
    CartesianGrid,
    XAxis, YAxis, ResponsiveContainer,
    Tooltip, Legend, Line, LineChart
} from 'recharts';

const Viewers = ({ audienceData }: any) => {
    const reformatData = (data:any): {time:number, value:number}[] => {

        const audience = data.audience

        const formatted = audience.map((arr: number[]) => {

            const time = new Date(arr[0])

            const value = {
                time: time.toDateString(),
                value: arr[1],
            }

            return value
        })

        return formatted
    }
    

    return (
        <ResponsiveContainer width={"100%"} height={500}>
            <LineChart width={730} height={250} data={reformatData(audienceData)}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export {
    Viewers
}