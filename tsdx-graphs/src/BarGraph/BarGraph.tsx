import React, { useMemo } from "react";
import './BarGraph.css';

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

function createYAxisMarker(label: number) {
    return (
        <div className="bar-graph-y-axis-marker" data-testid="y-axis-marker-with-label" key={`y-axis-${label}`}>
            <div className="bar-graph-y-axis-marker-line"></div>
            <div className="bar-graph-y-axis-marker-label">{label}</div>
        </div>
    )
}

function createYAxisMarkerWithLabel(label: number, axisLabel: string) {
    return (
        <div className="bar-graph-y-axis-marker" data-testid="y-axis-marker-with-label" key={`y-axis-${label}`}>
            <div className="bar-graph-y-axis-marker-line"></div>
            <div className="bar-graph-y-axis-marker-label">{label}</div>
            <div className="bar-graph-y-axis-label">
                {axisLabel}
            </div>
        </div>
    )
}

export function getYAxisMarkings(minVal: number, maxVal: number, yLabel: string) {
    let markings = [];

    if (maxVal <= 10) {
        for (let i = maxVal; i > (minVal); i--) {
            if (i - 1 > minVal) {
                markings.push(createYAxisMarker(i));
            } else {
                markings.push(createYAxisMarkerWithLabel(i, yLabel))
            }
        }
    }

    return markings;
}

/** This is a test again */
export const BarGraph = ({ minValue, maxValue, entries, xLabel, yLabel }: BarGraphProps) => {
    /** This is a test */
    const minValMemo = useMemo(() => {
        if (minValue) {
            return minValue;
        }
        return 0;
    }, [minValue])

    const maxValMemo = useMemo(() => {
        if (maxValue) {
            return maxValue;
        }
        let maxFoundVal = 0;

        entries.forEach(entry => {
            if (entry.value > maxFoundVal) {
                maxFoundVal = entry.value;
            }
        })
        return maxFoundVal;
    }, [maxValue, entries]);

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

    return (
        <div className="bar-graph-container">
            <div className="bar-graph-x-container">
                <div className="bar-graph-y-container">
                    <div className="bar-graph-y-axis">
                        <div className="bar-graph-y-axis-markings">
                            {getYAxisMarkings(minValMemo, maxValMemo, yLabel)}
                        </div>

                        {/* <div className="bar-graph-y-axis-label">
                            {yLabel}
                        </div> */}
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