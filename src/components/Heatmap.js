import React from 'react';
import { VegaLite } from 'react-vega';

const Heatmap = ({ graphData, tissueList, labelHeight, graphHeight }) => {
	const spec = {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		width: 'container',
		height: { step: 10 },
		autosize: {
			type: 'fit-x',
			contains: 'padding'
		},
		mark: { type: 'rect', tooltip: true },
		encoding: {
			x: { field: 'tissue', type: 'ordinal' },
			y: { field: 'gene', type: 'ordinal' },
			color: { field: 'expression', type: 'quantitative' }
		},
		data: { name: 'values' }
	};

	return (
		<div className="graph-container">
			<VegaLite spec={spec} data={{ values: graphData }} />
		</div>
	);
};

export default Heatmap;
