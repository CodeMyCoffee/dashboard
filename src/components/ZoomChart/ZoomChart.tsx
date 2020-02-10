import React from "react";
import {
    CartesianGrid,
    ResponsiveContainer, XAxis, YAxis,
    Tooltip, Legend, AreaChart, Area, Brush
} from "recharts";
import { styles } from "../../helpers";

interface DataFormat {
    time: number,
    value: number
}

const ZoomChart = ({ audienceData, dates }: any) => {

    const reformatData = (data: any) => {

        const audience = data.audience

        const formatted = audience.map((arr: number[]) => {

            const time = new Date(arr[0])

            if (time >= dates.begin && time <= dates.end) {
                const value = {
                    time: time.toDateString(),
                    value: arr[1],
                }

                return value
            }

            return null
        })

        return  formatted.filter((value: DataFormat) => value !== null)
    }

    return (
        <ResponsiveContainer width={"100%"} height={150} >
            <AreaChart width={730} height={250} data={reformatData(audienceData)}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
                <CartesianGrid fill={styles.LightGreen} />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="value" strokeWidth={1.5}  stroke={styles.LightGreen} fill={styles.Green} />

                <Brush
                    dataKey='time'
                    height={20}
                    stroke="#000000">
                    <AreaChart>
                        <Area dataKey="value" fill={styles.Green} />
                    </AreaChart>
                </Brush>
            </AreaChart>
        </ResponsiveContainer>
    )
}

export {
    ZoomChart
}