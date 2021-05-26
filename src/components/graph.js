import {React, useRef, useEffect} from 'react'
import * as d3 from 'd3'
import "./graph.css"
import { useIntl } from 'react-intl';

const Graph = (props) => {
    const canvas = useRef();
    const intl = useIntl();
    const drawChart = () => {
        const svg = d3
        .select(canvas.current)
        .append("svg")
        .attr("width", 620)
        .attr("height", 535);

        const g = svg.append("g")
        .attr("transform", "translate(40,20)");

        const x = d3.scaleLinear()
        .domain([0,350])
        .range([0,500]);
        
        const y = d3.scaleLinear()
        .domain([0,12])
        .range([480,0]);

        g.append("g").classed("x--axis", true).call(d3.axisBottom(x).ticks(8)).attr("transform","translate(0,480)");
        g.append("g").classed("y--axis", true).call(d3.axisLeft(y).ticks(12));

        const circle = g.selectAll("dot")
        .data(intl.messages.series);

        circle.enter().append("circle")
        .attr("cx", serie => x(serie.episodes))
        .attr("cy", serie => y(serie.seasons))
        .attr("r", 5)
        .attr("fill", "orange");

        circle.enter().append("text")
        .attr("x", serie => x(serie.episodes)+5)
        .attr("y", serie => y(serie.seasons)+5)
        .text(serie => serie.name);

        svg.append("text")
        .attr("x", 485)
        .attr("y", 530)
        .text(intl.messages.titles["episodes"]);

        svg.append("text")
        .attr("x", -80)
        .attr("y", 18)
        .text(intl.messages.titles["seasons"])
        .attr("transform", "rotate(-90)");
    };
    useEffect(() => {
        drawChart();
    }, intl);
    return <div className="graph" ref={canvas}></div>;
};

export default Graph;