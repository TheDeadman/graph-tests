import React from "react";

interface YAxisMarkerProps {
    label: number
}

export function YAxisMarker({label}: YAxisMarkerProps) {
    return (
        <div className="bar-graph-y-axis-marker" data-testid="y-axis-marker-with-label" key={`y-axis-${label}`}>
            <div className="bar-graph-y-axis-marker-line"></div>
            <div className="bar-graph-y-axis-marker-label">{label}</div>
        </div>
    )
}

interface YAxisMarkerWithAxisLabelProps {
    label: number;
    axisLabel: string
}

export function YAxisMarkerWithAxisLabel({label, axisLabel}: YAxisMarkerWithAxisLabelProps) {
    return (
        <div className="bar-graph-y-axis-marker" data-testid="y-axis-marker-with-label" key={`y-axis-${label}`}>
            <div className="bar-graph-y-axis-marker-line"></div>
            <div className="bar-graph-y-axis-marker-label">{label}</div>
        </div>
    )
}