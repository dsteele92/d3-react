import React, { useEffect, useRef, useMemo } from 'react';
import * as d3 from 'd3';
import Style from './barChart.module.scss';

function BarChart() {
	const svgRef = useRef();

	const data = [10, 20, 30, 40, 50];

	const width = 500;
	const height = 500;
	const barWidth = width / data.length;

	useEffect(() => {
		const svg = d3.select(svgRef.current);
		// Set the width and height of the SVG container
		svg.attr('width', width).attr('height', height);

		svg.selectAll('rect')
			.data(data)
			.enter()
			.append('rect')
			.attr('x', (d, i) => i * barWidth)
			.attr('y', (d) => height - d)
			.attr('width', width)
			.attr('height', (d) => d)
			.attr('fill', (d, i) => (i % 2 === 0 ? 'red' : 'blue'));
	}, [data]);

	return (
		<div>
			<svg ref={svgRef}></svg>

			<h1 style={{ color: 'red' }}>Hello</h1>
		</div>
	);
}

export default BarChart;
