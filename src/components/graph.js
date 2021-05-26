import {React, useRef, useEffect} from 'react'
import * as d3 from 'd3'

const Graph = (props) => {
    const canvas = useRef();
    const drawChart = () => {
        const svg = d3
        .select(canvas.current)
        .append("svg")
        .attr("width", 500)
        .attr("height", 500);
        const rect = svg
        .append("rect")
        .attr("x", 100)
        .attr("y", 100)
        .attr("width", 100)
        .attr("height", 100);
    };
    useEffect(() => {
        drawChart();
    });
    return <div ref={canvas}></div>;
};

export default Graph;