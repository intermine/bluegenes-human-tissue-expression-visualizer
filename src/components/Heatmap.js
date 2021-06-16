import React from 'react';
import { VegaLite } from 'react-vega';

const Heatmap = ({ graphData, isLogarithmic }) => {
	const spec = {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		width: 'container',
		height: { step: 10 },
		autosize: {
			type: 'fit-x',
			contains: 'padding'
		},
		mark: 'rect',
		encoding: {
			y: { field: 'gene', type: 'ordinal', title: null },
			x: {
				field: 'tissue',
				type: 'ordinal',
				title: null,
				axis: { orient: 'top', labelAngle: -45, labelAlign: 'left' }
			},
			color: {
				field: 'expression',
				type: 'quantitative',
				legend: { title: null }
			},
			tooltip: [
				{ field: 'gene', type: 'ordinal' },
				{ field: 'tissue', type: 'ordinal' },
				{ field: 'expression', type: 'quantitative' }
			]
		},
		data: { name: 'values' }
	};

	if (isLogarithmic) {
		spec.transform = [
			{
				calculate: 'if(datum.expression < 1, 1, datum.expression)',
				as: 'expression_logready'
			}
		];
		spec.encoding.color.field = 'expression_logready';
		spec.encoding.color.scale = { type: 'log' };
	}

	return (
		<div className="graph-container">
			<VegaLite spec={spec} data={{ values: graphData }} />
		</div>
	);
};

export default Heatmap;
