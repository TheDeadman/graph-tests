import React, { useMemo } from "react";
import './BarGraph.css';
import { YAxisMarker, YAxisMarkerWithAxisLabel } from "./components/YAxisMarker";

export type BarGraphEntry = {
    value: number;
    label: string;
    color?: string;
}

export interface BarGraphProps {
    /** The lower value for the y-axis */
    minValue?: number;
    /** The max value for the x-axis */
    maxValue?: number;
    /** JSON Objects that correspond to each bar in the graph. */
    entries: BarGraphEntry[];
    /** Text label to be used for the x-axis */
    xLabel: string;
    /** Text label to be used for the y-axis */
    yLabel: string;
}



export function getYAxisMarkings(minVal: number, maxVal: number, yLabel: string) {
    let markings = [];

    if (maxVal <= 10) {
        for (let i = maxVal; i > (minVal); i--) {
            if (i - 1 > minVal) {
                markings.push(<YAxisMarker label={i} />);
            } else {
                markings.push(<YAxisMarkerWithAxisLabel label={i} axisLabel={yLabel} />)
            }
        }
    } else if (maxVal > 10) {
        for (let i = maxVal; i > (minVal); i = i - 5) {
            if (i - 5 > minVal) {
                markings.push(<YAxisMarker label={i} />);
            } else {
                markings.push(<YAxisMarkerWithAxisLabel label={i} axisLabel={yLabel} />)
            }
        }
    }

    return markings;
}

/** This is a test again */
export const BarGraph = ({ minValue, maxValue, entries, xLabel, yLabel }: BarGraphProps) => {

    const maxValMemo = useMemo(() => {
        if (maxValue) {
            if (maxValue > 10 && maxValue % 5 !== 0) {
                maxValue = maxValue + 5 - (maxValue % 5)
            }
            return maxValue;
        }
        let maxFoundVal = 0;

        entries.forEach(entry => {
            if (entry.value > maxFoundVal) {
                maxFoundVal = entry.value;
            }
        })

        if (maxFoundVal > 10 && maxFoundVal % 5 !== 0) {
            maxFoundVal = maxFoundVal + 5 - (maxFoundVal % 5)
        }
        return maxFoundVal;
    }, [maxValue, entries]);


    /** This is a test */
    const minValMemo = useMemo(() => {
        if (minValue && (!maxValue || maxValue <= 10)) {
            return minValue;
        }
        return 0;
    }, [minValue, maxValue])

    const memoEntries = useMemo(() => entries.map(entry => {
        console.log((entry.value - minValMemo), (maxValMemo - minValMemo), (entry.value - minValMemo) / (maxValMemo - minValMemo))
        return (
            <div key={`${entry.label}`} className="bar-graph-data-entry">
                <div className="bar-graph-data-entry-bar" style={{ height: `${(entry.value - minValMemo) / (maxValMemo - minValMemo) * 100}%` }}>
                    {entry.label}
                </div>
            </div>
        )
    }), [entries, maxValMemo, minValMemo]);

    const yAxisMarkings = useMemo(() => getYAxisMarkings(minValMemo, maxValMemo, yLabel), [minValMemo, maxValMemo, yLabel]);

    return (
        <div className="bar-graph-container">
            <div className="bar-graph-x-container">
                <div className="bar-graph-y-container">
                    <div className="bar-graph-y-axis">

                        <div className="bar-graph-y-axis-label">
                            <div className="bar-graph-y-label-rotation">{yLabel}</div>
                        </div>
                        <div className="bar-graph-y-axis-markings">
                            {yAxisMarkings}
                        </div>
                    </div>

                    <div className="bar-graph-data-container">
                        {memoEntries}
                    </div>

                </div>

                <div className="bar-graph-x-axis">
                    <div className="bar-graph-x-axis-label">
                        {xLabel}
                    </div>
                </div>
            </div>

        </div>
    )
}