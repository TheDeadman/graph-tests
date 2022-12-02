import React from "react";
import { render } from "@testing-library/react";
import { BarGraph, getYAxisMarkings } from "./BarGraph";

describe('BarGraph', () => {
    test('test', () => {
        render(<BarGraph xLabel='X AXIS' yLabel='Y AXIS' maxValue={3} minValue={0} entries={[{ label: "Entry One", value: 1 }, { label: "Entry Two", value: 2 }]} />)
    })
})

describe('getYAxisMarrkings', () => {
    test('should be single digits if the max is less than 10', () => {
        const { debug } = render(<>{getYAxisMarkings(0, 1, 'test')}</>)
        const result = getYAxisMarkings(0, 1, 'test');
        expect(result.length).toEqual(1);
        console.log(result[0])
        debug();
    })
});